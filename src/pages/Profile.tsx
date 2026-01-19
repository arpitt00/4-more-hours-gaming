import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import {
  User,
  Package,
  Heart,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  ShoppingBag,
  Calendar,
  Loader2,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const menuItems = [
  { icon: Package, label: "My Orders", badge: "2" },
  { icon: Calendar, label: "My Rentals", badge: "1" },
  { icon: Heart, label: "Wishlist", badge: "5" },
  { icon: ShoppingBag, label: "Sell Your Gear" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help & Support" },
];

const Profile = () => {
  const { user, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
    navigate("/auth");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="container py-6 space-y-6">
        {/* Profile Header */}
        <div className="gaming-card p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">Gaming Pro</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="gaming-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-xs text-muted-foreground">Orders</p>
          </div>
          <div className="gaming-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">3</div>
            <p className="text-xs text-muted-foreground">Rentals</p>
          </div>
          <div className="gaming-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">5</div>
            <p className="text-xs text-muted-foreground">Wishlist</p>
          </div>
        </div>

        {/* Menu */}
        <div className="gaming-card divide-y divide-border">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
                <span className="flex-1 text-left font-medium">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            );
          })}
        </div>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full gap-2 text-destructive hover:text-destructive"
          onClick={handleSignOut}
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
