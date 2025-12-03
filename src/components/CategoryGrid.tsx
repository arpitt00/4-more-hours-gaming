import { Link } from "react-router-dom";
import { Gamepad2, Disc3, Headphones, Glasses, Circle, Trophy, Monitor, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "ps5",
    name: "PS5",
    icon: Gamepad2,
    color: "from-primary/20 to-primary/5",
    count: "12+ Items",
  },
  {
    id: "ps5-games",
    name: "PS5 Games",
    icon: Disc3,
    color: "from-gaming-blue-light/20 to-gaming-blue-light/5",
    count: "50+ Games",
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: Headphones,
    color: "from-accent/20 to-accent/5",
    count: "30+ Items",
  },
  {
    id: "vr",
    name: "VR Headsets",
    icon: Glasses,
    color: "from-primary/15 to-primary/5",
    count: "5+ Items",
  },
  {
    id: "racing",
    name: "Racing Wheels",
    icon: Circle,
    color: "from-gaming-blue/20 to-gaming-blue/5",
    count: "8+ Items",
  },
  {
    id: "collectables",
    name: "Collectables",
    icon: Trophy,
    color: "from-accent/15 to-accent/5",
    count: "20+ Items",
  },
  {
    id: "pc",
    name: "Gaming PCs",
    icon: Monitor,
    color: "from-primary/20 to-primary/5",
    count: "10+ Builds",
  },
  {
    id: "pc-parts",
    name: "PC Parts",
    icon: Cpu,
    color: "from-gaming-blue-light/20 to-gaming-blue-light/5",
    count: "100+ Parts",
  },
];

interface CategoryGridProps {
  compact?: boolean;
}

const CategoryGrid = ({ compact = false }: CategoryGridProps) => {
  const displayCategories = compact ? categories.slice(0, 4) : categories;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold">Categories</h2>
        {compact && (
          <Link
            to="/category"
            className="text-sm text-primary hover:underline font-medium"
          >
            View All
          </Link>
        )}
      </div>
      <div
        className={cn(
          "grid gap-3",
          compact ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-4"
        )}
      >
        {displayCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={cn(
                  "p-4 md:p-6 bg-gradient-to-br",
                  category.color
                )}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 rounded-xl bg-card shadow-gaming group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">
                    {category.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {category.count}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;
