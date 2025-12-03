import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "PS5 Mega Sale",
    subtitle: "Up to 30% Off on Pre-owned Consoles",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    accent: "text-primary",
  },
  {
    id: 2,
    title: "Rent & Play",
    subtitle: "Try Before You Buy - PS5, PSVR2 & G29",
    gradient: "from-gaming-blue-light/30 via-gaming-blue/10 to-transparent",
    accent: "text-gaming-blue",
  },
  {
    id: 3,
    title: "Custom PC Builds",
    subtitle: "Dream Machine Starting at ₹50,000",
    gradient: "from-accent/20 via-accent/10 to-transparent",
    accent: "text-accent",
  },
  {
    id: 4,
    title: "New Arrivals",
    subtitle: "Latest PS5 Games & Accessories",
    gradient: "from-primary/15 via-gaming-grey/10 to-transparent",
    accent: "text-primary",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50">
      <div className="relative h-48 md:h-64">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-out",
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-r",
                slide.gradient
              )}
            />
            <div className="relative h-full flex flex-col justify-center px-6 md:px-10">
              <h2
                className={cn(
                  "font-display text-2xl md:text-4xl font-bold mb-2",
                  slide.accent
                )}
              >
                {slide.title}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-md">
                {slide.subtitle}
              </p>
              <Button className="mt-4 w-fit gaming-button">
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "slide-indicator",
              index === currentSlide && "active"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
