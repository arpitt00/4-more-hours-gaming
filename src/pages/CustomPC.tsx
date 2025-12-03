import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, MonitorSpeaker, Zap, MessageCircle } from "lucide-react";

const preBuilds = [
  {
    id: 1,
    name: "Starter Gaming PC",
    price: "₹45,000",
    specs: ["Intel i3-12100F", "GTX 1650 4GB", "8GB RAM", "256GB SSD"],
    badge: "Budget Friendly",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Performance Build",
    price: "₹75,000",
    specs: ["Intel i5-12400F", "RTX 3060 12GB", "16GB RAM", "512GB NVMe"],
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Ultimate Gaming Rig",
    price: "₹1,50,000",
    specs: ["Intel i7-13700K", "RTX 4070 12GB", "32GB RAM", "1TB NVMe"],
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop",
  },
];

const customOptions = [
  { icon: Cpu, label: "Processor", description: "Intel & AMD options" },
  { icon: MonitorSpeaker, label: "Graphics Card", description: "NVIDIA & AMD GPUs" },
  { icon: HardDrive, label: "Storage", description: "SSD, HDD & NVMe" },
  { icon: Zap, label: "Power Supply", description: "Bronze to Platinum" },
];

const CustomPC = () => {
  const [activeTab, setActiveTab] = useState<"prebuilt" | "custom">("prebuilt");

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="container py-6 space-y-6">
        <div className="text-center mb-8">
          <h1 className="font-display text-2xl font-bold mb-2">Custom PC Builds</h1>
          <p className="text-muted-foreground">
            Build your dream gaming machine with us
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center gap-2 p-1 bg-muted rounded-xl">
          <button
            onClick={() => setActiveTab("prebuilt")}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "prebuilt"
                ? "bg-primary text-primary-foreground shadow-gaming"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Pre-Built PCs
          </button>
          <button
            onClick={() => setActiveTab("custom")}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "custom"
                ? "bg-primary text-primary-foreground shadow-gaming"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Custom Build
          </button>
        </div>

        {activeTab === "prebuilt" ? (
          /* Pre-Built PCs */
          <div className="space-y-4">
            {preBuilds.map((build) => (
              <div key={build.id} className="gaming-card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-40 md:h-auto overflow-hidden">
                    <img
                      src={build.image}
                      alt={build.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                          {build.badge}
                        </Badge>
                        <h3 className="font-semibold text-lg">{build.name}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{build.price}</div>
                        <span className="text-xs text-muted-foreground">onwards</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {build.specs.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1 gaming-button">
                        View Details
                      </Button>
                      <Button variant="outline">
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Custom Build */
          <div className="space-y-6">
            <div className="gaming-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Build Your Dream PC</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Tell us your requirements and budget, we'll help you build the perfect gaming machine
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {customOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={option.label}
                      className="p-4 bg-muted rounded-xl text-left"
                    >
                      <Icon className="w-5 h-5 text-primary mb-2" />
                      <p className="font-medium text-sm">{option.label}</p>
                      <p className="text-xs text-muted-foreground">{option.description}</p>
                    </div>
                  );
                })}
              </div>

              <Button className="w-full gaming-button gap-2">
                <MessageCircle className="w-4 h-4" />
                Start Custom Build Consultation
              </Button>
            </div>

            {/* Process */}
            <div className="gaming-card p-6 space-y-4">
              <h3 className="font-display font-semibold">Our Build Process</h3>
              <div className="grid gap-4 text-sm">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Share Your Requirements</p>
                    <p className="text-muted-foreground">Tell us games, budget & preferences</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Get Custom Quote</p>
                    <p className="text-muted-foreground">We'll curate the best parts for you</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium">We Build & Deliver</p>
                    <p className="text-muted-foreground">Professional assembly with warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default CustomPC;
