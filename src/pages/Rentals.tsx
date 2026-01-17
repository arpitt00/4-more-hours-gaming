import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Check, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const rentalItems = [
  {
    id: 101,
    name: "PlayStation 5",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
    dailyRate: 600,
    weeklyRate: 3000,
    monthlyRate: 8500,
    available: true,
    includes: ["Console", "1 Controller", "Power Cable", "HDMI Cable"],
    extraController: "₹120/day",
  },
  {
    id: 102,
    name: "PlayStation VR2",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&h=300&fit=crop",
    dailyRate: 800,
    weeklyRate: 4000,
    monthlyRate: 12000,
    available: true,
    includes: ["VR Headset", "Sense Controllers", "All Cables"],
  },
  {
    id: 103,
    name: "Logitech G29",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400&h=300&fit=crop",
    dailyRate: 400,
    weeklyRate: 2000,
    monthlyRate: 6000,
    available: true,
    includes: ["Steering Wheel", "Pedals", "Mounting Clamps"],
  },
  {
    id: 104,
    name: "PS5 Games Bundle",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400&h=300&fit=crop",
    dailyRate: 100,
    weeklyRate: 400,
    monthlyRate: 1000,
    available: true,
    includes: ["Choice of 50+ titles", "Disc or Digital"],
  },
];

const Rentals = () => {
  const [selectedDuration, setSelectedDuration] = useState<"daily" | "weekly" | "monthly">("weekly");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const getPrice = (item: typeof rentalItems[0]) => {
    switch (selectedDuration) {
      case "daily":
        return item.dailyRate;
      case "weekly":
        return item.weeklyRate;
      case "monthly":
        return item.monthlyRate;
    }
  };

  const handleBookNow = (item: typeof rentalItems[0]) => {
    const price = getPrice(item);
    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: `₹${price.toLocaleString()}`,
      priceValue: price,
      type: "rental",
      duration: selectedDuration,
    });
    navigate("/checkout");
  };

  const handleAddToCart = (item: typeof rentalItems[0]) => {
    const price = getPrice(item);
    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: `₹${price.toLocaleString()}`,
      priceValue: price,
      type: "rental",
      duration: selectedDuration,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="container py-6 space-y-6">
        <div className="text-center mb-8">
          <h1 className="font-display text-2xl font-bold mb-2">Rent Gaming Gear</h1>
          <p className="text-muted-foreground">
            Try before you buy - affordable rental options
          </p>
        </div>

        {/* Duration Toggle */}
        <div className="flex justify-center gap-2 p-1 bg-muted rounded-xl">
          {(["daily", "weekly", "monthly"] as const).map((duration) => (
            <button
              key={duration}
              onClick={() => setSelectedDuration(duration)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDuration === duration
                  ? "bg-primary text-primary-foreground shadow-gaming"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {duration.charAt(0).toUpperCase() + duration.slice(1)}
            </button>
          ))}
        </div>

        {/* Rental Items */}
        <div className="space-y-4">
          {rentalItems.map((item) => (
            <div key={item.id} className="gaming-card overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-40 md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      {item.available ? (
                        <Badge variant="secondary" className="bg-green-500/10 text-green-600">
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-red-500/10 text-red-600">
                          Unavailable
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        ₹{getPrice(item).toLocaleString()}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        per {selectedDuration.replace("ly", "")}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.includes.map((inc, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                      >
                        <Check className="w-3 h-3 text-primary" />
                        {inc}
                      </span>
                    ))}
                  </div>

                  {item.extraController && (
                    <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg border border-primary/20">
                      <span className="text-sm font-medium text-primary">+ Extra Controller:</span>
                      <span className="text-sm font-semibold">{item.extraController}</span>
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <Button 
                      className="flex-1 gaming-button gap-2"
                      onClick={() => handleBookNow(item)}
                      disabled={!item.available}
                    >
                      <Calendar className="w-4 h-4" />
                      Book Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleAddToCart(item)}
                      disabled={!item.available}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="gaming-card p-6 space-y-4">
          <h3 className="font-display font-semibold">How Rentals Work</h3>
          <div className="grid gap-4 text-sm">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <p className="font-medium">Choose Your Gear</p>
                <p className="text-muted-foreground">Select from our available inventory</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">2</span>
              </div>
              <div>
                <p className="font-medium">Book & Pay Deposit</p>
                <p className="text-muted-foreground">Secure your rental with a refundable deposit</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <p className="font-medium">Pickup or Delivery</p>
                <p className="text-muted-foreground">Get your gear and start gaming!</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Rentals;
