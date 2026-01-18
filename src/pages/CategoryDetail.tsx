import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { getProductsByCategory, getCategoryInfo, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const products = getProductsByCategory(id || "");
  const categoryInfo = getCategoryInfo(id || "");

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: parseInt(product.id.replace(/\D/g, '') || '0'),
      name: product.name,
      price: formatPrice(product.price),
      priceValue: product.price,
      image: product.image,
      type: "product",
    });
    toast.success(`${product.name} added to cart!`);
  };


  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="container py-6 space-y-6">
        {/* Back Button & Header */}
        <div className="flex items-center gap-4">
          <Link to="/category" className="p-2 rounded-lg bg-card hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-display text-2xl font-bold">{categoryInfo.name}</h1>
            <p className="text-muted-foreground text-sm">
              {categoryInfo.description} • {products.length} items
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="gaming-card group overflow-hidden animate-fade-up"
                style={{ animationDelay: `${Math.min(index * 30, 300)}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {product.originalPrice && (
                    <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs font-semibold px-2 py-1 rounded-md">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                      <span className="text-muted-foreground font-medium">Out of Stock</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-3 space-y-2">
                  <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>
                  
                  {product.description && (
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {product.description}
                    </p>
                  )}

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">{product.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    size="sm"
                    className="w-full mt-2"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
            <Link to="/category" className="text-primary hover:underline mt-2 inline-block">
              Browse all categories
            </Link>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default CategoryDetail;
