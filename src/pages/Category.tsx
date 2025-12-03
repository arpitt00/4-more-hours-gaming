import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import CategoryGrid from "@/components/CategoryGrid";

const Category = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />
      
      <main className="container py-6 space-y-6">
        <div className="text-center mb-8">
          <h1 className="font-display text-2xl font-bold mb-2">All Categories</h1>
          <p className="text-muted-foreground">
            Browse our complete collection of gaming products
          </p>
        </div>

        <CategoryGrid />

        {/* Special Categories */}
        <div className="space-y-4 mt-8">
          <h2 className="font-display text-lg font-semibold">Special Sections</h2>
          
          <div className="grid gap-4">
            <a
              href="/category/buy-sell"
              className="gaming-card p-5 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-primary/10">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Buy & Sell</h3>
                <p className="text-sm text-muted-foreground">Trade your gaming gear</p>
              </div>
              <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="/category/controllers"
              className="gaming-card p-5 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-accent/10">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Controller Accessories</h3>
                <p className="text-sm text-muted-foreground">Covers, caps, cases & more</p>
              </div>
              <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="/category/mobile-gaming"
              className="gaming-card p-5 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-gaming-blue/10">
                <svg className="w-6 h-6 text-gaming-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Mobile Gaming</h3>
                <p className="text-sm text-muted-foreground">Triggers, coolers & accessories</p>
              </div>
              <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Category;
