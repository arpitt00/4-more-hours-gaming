import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Yin Yang inspired gaming logo */}
      <div className={cn("relative", sizes[size])}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Outer circle */}
          <circle cx="50" cy="50" r="48" fill="hsl(217 91% 50%)" />
          {/* Yin Yang shape */}
          <path
            d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2"
            fill="hsl(220 14% 96%)"
          />
          {/* Small circles */}
          <circle cx="50" cy="26" r="8" fill="hsl(217 91% 50%)" />
          <circle cx="50" cy="74" r="8" fill="hsl(220 14% 96%)" />
          {/* Gaming controller hint in center */}
          <circle cx="50" cy="50" r="6" fill="hsl(217 91% 35%)" opacity="0.3" />
        </svg>
      </div>
      <span className="font-display font-bold text-foreground">
        4.more.hours
      </span>
    </div>
  );
};

export default Logo;
