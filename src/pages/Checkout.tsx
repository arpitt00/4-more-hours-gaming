import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { CreditCard, Wallet, Smartphone, CheckCircle2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: CreditCard },
  { id: "upi", name: "UPI Payment", icon: Smartphone },
  { id: "wallet", name: "Digital Wallet", icon: Wallet },
];

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deposit = Math.round(totalPrice * 0.2);
  const grandTotal = totalPrice + deposit;

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setOrderPlaced(true);
    toast.success("Order placed successfully!");
    
    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  if (items.length === 0 && !orderPlaced) {
    navigate("/cart");
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <Header />
        <main className="container py-12 flex flex-col items-center justify-center space-y-6">
          <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center animate-pulse">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="font-display text-2xl font-bold text-center">Order Confirmed!</h1>
          <p className="text-muted-foreground text-center max-w-md">
            Thank you for your order. You will receive a confirmation email shortly with pickup/delivery details.
          </p>
          <div className="gaming-card p-6 w-full max-w-sm space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Order ID</span>
              <span className="font-mono font-medium">#ORD{Date.now().toString().slice(-8)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Amount Paid</span>
              <span className="font-bold text-primary">₹{grandTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Payment Method</span>
              <span>{paymentMethods.find(p => p.id === selectedPayment)?.name}</span>
            </div>
          </div>
          <Button onClick={() => navigate("/")} className="gaming-button gap-2">
            Continue Shopping
          </Button>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="container py-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/cart")}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-display text-2xl font-bold">Checkout</h1>
        </div>

        {/* Contact Info */}
        <div className="gaming-card p-6 space-y-4">
          <h3 className="font-display font-semibold">Contact Information</h3>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address</Label>
              <Input id="address" placeholder="123, Main Street, City" />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="gaming-card p-6 space-y-4">
          <h3 className="font-display font-semibold">Payment Method</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                  selectedPayment === method.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  selectedPayment === method.id ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}>
                  <method.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{method.name}</span>
                {selectedPayment === method.id && (
                  <CheckCircle2 className="w-5 h-5 text-primary ml-auto" />
                )}
              </button>
            ))}
          </div>

          {selectedPayment === "card" && (
            <div className="grid gap-4 pt-4 border-t border-border">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" type="password" />
                </div>
              </div>
            </div>
          )}

          {selectedPayment === "upi" && (
            <div className="pt-4 border-t border-border">
              <div className="space-y-2">
                <Label htmlFor="upiId">UPI ID</Label>
                <Input id="upiId" placeholder="yourname@upi" />
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="gaming-card p-6 space-y-4">
          <h3 className="font-display font-semibold">Order Summary</h3>
          <div className="space-y-2 text-sm">
            {items.map((item) => (
              <div key={`${item.id}-${item.type}`} className="flex justify-between">
                <span className="text-muted-foreground">
                  {item.name} x {item.quantity}
                </span>
                <span>₹{(item.priceValue * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t border-border pt-2 mt-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Deposit (Refundable)</span>
                <span>₹{deposit.toLocaleString()}</span>
              </div>
            </div>
            <div className="border-t border-border pt-2 mt-2">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-primary">₹{grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <Button 
            className="w-full gaming-button gap-2" 
            size="lg"
            onClick={handlePlaceOrder}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Pay ₹{grandTotal.toLocaleString()}
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By placing this order, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Checkout;
