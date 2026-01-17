import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 1,
    name: "PlayStation 5 Digital",
    price: "₹35,999",
    priceValue: 35999,
    originalPrice: "₹44,990",
    condition: "Pre-owned",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop",
    badge: "Hot Deal",
  },
  {
    id: 2,
    name: "DualSense Controller",
    price: "₹4,499",
    priceValue: 4499,
    originalPrice: "₹5,990",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop",
    badge: null,
  },
  {
    id: 3,
    name: "PSVR2 Headset",
    price: "₹45,999",
    priceValue: 45999,
    originalPrice: "₹57,990",
    condition: "Pre-owned",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=300&h=300&fit=crop",
    badge: "Limited",
  },
  {
    id: 4,
    name: "Logitech G29 Wheel",
    price: "₹22,999",
    priceValue: 22999,
    originalPrice: "₹29,995",
    condition: "Excellent",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=300&h=300&fit=crop",
    badge: null,
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      priceValue: product.priceValue,
      type: "product",
      condition: product.condition,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold">Featured Products</h2>
        <Link
          to="/category"
          className="text-sm text-primary hover:underline font-medium"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="gaming-card group overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {product.badge && (
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              )}
              <button className="absolute top-2 right-2 p-2 rounded-full bg-card/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
                <Heart className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3 space-y-2">
              <Badge variant="secondary" className="text-xs">
                {product.condition}
              </Badge>
              <h3 className="font-semibold text-sm line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">{product.price}</span>
                <span className="text-xs text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              </div>
              <Button 
                size="sm" 
                className="w-full gap-2 gaming-button text-xs py-2"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="w-3 h-3" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
