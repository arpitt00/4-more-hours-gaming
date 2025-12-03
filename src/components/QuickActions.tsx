import { Link } from "react-router-dom";
import { Gamepad2, Monitor, Package } from "lucide-react";

const actions = [
  {
    id: "rent",
    title: "Rent Gaming Gear",
    description: "PS5, PSVR2, G29 & Games",
    icon: Gamepad2,
    path: "/rentals",
    gradient: "from-primary to-gaming-blue-dark",
  },
  {
    id: "custom-pc",
    title: "Custom PC Build",
    description: "Build Your Dream Machine",
    icon: Monitor,
    path: "/custom-pc",
    gradient: "from-gaming-blue to-primary",
  },
  {
    id: "sell",
    title: "Sell Your Gear",
    description: "Get Best Price Instantly",
    icon: Package,
    path: "/sell",
    gradient: "from-accent to-gaming-blue-light",
  },
];

const QuickActions = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-lg font-semibold">Quick Actions</h2>
      <div className="grid gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.id}
              to={action.path}
              className="group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-90`}
              />
              <div className="relative flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary-foreground/20 backdrop-blur-sm">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-foreground">
                    {action.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">
                    {action.description}
                  </p>
                </div>
                <div className="text-primary-foreground/60 group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
