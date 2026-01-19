import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import {
  checkoutContactSchema,
  cardPaymentSchema,
  upiPaymentSchema,
  CheckoutContactFormData,
  CardPaymentFormData,
  UpiPaymentFormData,
} from "@/lib/validations";
import { CreditCard, Wallet, Smartphone, CheckCircle2, ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: CreditCard },
  { id: "upi", name: "UPI Payment", icon: Smartphone },
  { id: "wallet", name: "Digital Wallet", icon: Wallet },
];

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [step, setStep] = useState<"contact" | "payment">("contact");

  const deposit = Math.round(totalPrice * 0.2);
  const grandTotal = totalPrice + deposit;

  const contactForm = useForm<CheckoutContactFormData>({
    resolver: zodResolver(checkoutContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: user?.email || "",
      phone: "",
      address: "",
    },
  });

  const cardForm = useForm<CardPaymentFormData>({
    resolver: zodResolver(cardPaymentSchema),
    defaultValues: {
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  const upiForm = useForm<UpiPaymentFormData>({
    resolver: zodResolver(upiPaymentSchema),
    defaultValues: {
      upiId: "",
    },
  });

  const handleContactSubmit = (data: CheckoutContactFormData) => {
    setStep("payment");
    toast.success("Contact information saved!");
  };

  const handlePlaceOrder = async () => {
    let isValid = false;

    if (selectedPayment === "card") {
      isValid = await cardForm.trigger();
      if (!isValid) {
        toast.error("Please fill in all card details correctly");
        return;
      }
    } else if (selectedPayment === "upi") {
      isValid = await upiForm.trigger();
      if (!isValid) {
        toast.error("Please enter a valid UPI ID");
        return;
      }
    } else {
      // Wallet doesn't need additional validation
      isValid = true;
    }

    if (!isValid) return;

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
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
            <CheckCircle2 className="w-12 h-12 text-primary" />
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
          <Button variant="ghost" size="icon" onClick={() => step === "payment" ? setStep("contact") : navigate("/cart")}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-display text-2xl font-bold">Checkout</h1>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <div className={`flex items-center gap-2 ${step === "contact" ? "text-primary" : "text-muted-foreground"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === "contact" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
              1
            </div>
            <span className="text-sm font-medium">Contact</span>
          </div>
          <div className="flex-1 h-0.5 bg-muted" />
          <div className={`flex items-center gap-2 ${step === "payment" ? "text-primary" : "text-muted-foreground"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === "payment" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
              2
            </div>
            <span className="text-sm font-medium">Payment</span>
          </div>
        </div>

        {step === "contact" && (
          <Form {...contactForm}>
            <form onSubmit={contactForm.handleSubmit(handleContactSubmit)} className="space-y-6">
              {/* Contact Info */}
              <div className="gaming-card p-6 space-y-4">
                <h3 className="font-display font-semibold">Contact Information</h3>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={contactForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="John" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={contactForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Doe" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" placeholder="john@example.com" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input {...field} type="tel" placeholder="+91 98765 43210" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Delivery Address</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="123, Main Street, City, State, PIN" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full gaming-button" size="lg">
                Continue to Payment
              </Button>
            </form>
          </Form>
        )}

        {step === "payment" && (
          <div className="space-y-6">
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
                <Form {...cardForm}>
                  <form className="grid gap-4 pt-4 border-t border-border">
                    <FormField
                      control={cardForm.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Card Number</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={cardForm.control}
                        name="expiry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiry Date</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="MM/YY"
                                maxLength={5}
                                onChange={(e) => {
                                  let value = e.target.value.replace(/\D/g, "");
                                  if (value.length >= 2) {
                                    value = value.slice(0, 2) + "/" + value.slice(2);
                                  }
                                  field.onChange(value);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={cardForm.control}
                        name="cvv"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CVV</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="123"
                                type="password"
                                maxLength={4}
                                onChange={(e) => {
                                  const value = e.target.value.replace(/\D/g, "");
                                  field.onChange(value);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </form>
                </Form>
              )}

              {selectedPayment === "upi" && (
                <Form {...upiForm}>
                  <form className="pt-4 border-t border-border">
                    <FormField
                      control={upiForm.control}
                      name="upiId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>UPI ID</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="yourname@upi" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              )}

              {selectedPayment === "wallet" && (
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                    <AlertCircle className="w-5 h-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      You will be redirected to your digital wallet to complete the payment.
                    </p>
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
                    <span className="text-primary">Free</span>
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
                    <Loader2 className="w-4 h-4 animate-spin" />
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
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Checkout;
