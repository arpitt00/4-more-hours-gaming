import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Logo from "@/components/Logo";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="container py-6 space-y-6">
        <div className="text-center mb-8">
          <Logo size="lg" className="justify-center mb-4" />
          <h1 className="font-display text-2xl font-bold mb-2">About 4.more.hours</h1>
          <p className="text-muted-foreground">
            Your trusted gaming partner since 2023
          </p>
        </div>

        {/* Story */}
        <div className="gaming-card p-6 space-y-4">
          <h2 className="font-display font-semibold text-lg">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            4.more.hours was born from a simple idea - make premium gaming accessible to everyone. 
            We specialize in pre-owned gaming equipment, ensuring quality while keeping prices affordable. 
            Whether you want to buy, sell, or rent gaming gear, we've got you covered.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From PlayStation 5 consoles to custom PC builds, we're passionate about helping gamers 
            get the best experience without breaking the bank.
          </p>
        </div>

        {/* Services */}
        <div className="gaming-card p-6 space-y-4">
          <h2 className="font-display font-semibold text-lg">What We Offer</h2>
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="font-medium">Buy & Sell Pre-owned Gear</p>
                <p className="text-sm text-muted-foreground">PS5, PSVR2, Controllers, Games & More</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="font-medium">Gaming Rentals</p>
                <p className="text-sm text-muted-foreground">Try before you buy with flexible rental plans</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="font-medium">Custom PC Builds</p>
                <p className="text-sm text-muted-foreground">Pre-built & custom gaming PCs to your specs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="font-medium">Accessories & Collectables</p>
                <p className="text-sm text-muted-foreground">Covers, cases, caps & gaming memorabilia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="gaming-card p-6 space-y-4">
          <h2 className="font-display font-semibold text-lg">Contact Us</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>hello@4morehours.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>Mon - Sat: 10 AM - 8 PM</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <a
          href="https://www.instagram.com/4.more.hour/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full gaming-button gap-2">
            <Instagram className="w-5 h-5" />
            Follow @4.more.hour on Instagram
          </Button>
        </a>
      </main>

      <BottomNav />
    </div>
  );
};

export default AboutUs;
