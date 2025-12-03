import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import HeroSlider from "@/components/HeroSlider";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import QuickActions from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="container py-4 space-y-6">
        {/* Hero Slider */}
        <section className="animate-fade-in">
          <HeroSlider />
        </section>

        {/* Categories */}
        <section className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          <CategoryGrid compact />
        </section>

        {/* Quick Actions */}
        <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <QuickActions />
        </section>

        {/* Featured Products */}
        <section className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <FeaturedProducts />
        </section>

        {/* Collectables Section */}
        <section className="animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="gaming-card p-6 text-center">
            <h2 className="font-display text-xl font-bold mb-2">Collectables Corner</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Rare figures, limited editions & gaming memorabilia
            </p>
            <a
              href="/category/collectables"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Explore Collection →
            </a>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="animate-fade-in" style={{ animationDelay: "500ms" }}>
          <a
            href="https://www.instagram.com/4.more.hour/"
            target="_blank"
            rel="noopener noreferrer"
            className="block gaming-card overflow-hidden group"
          >
            <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Follow us on Instagram</h3>
                  <p className="text-sm text-muted-foreground">@4.more.hour</p>
                </div>
                <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </a>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
