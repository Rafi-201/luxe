import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Filter, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const selectedCategory = searchParams.get("category") || "";

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === selectedCategory) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryId);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <>
      <Helmet>
        <title>Shop All Products | LUXE - Premium Shopping Bangladesh</title>
        <meta
          name="description"
          content="Browse our complete collection of premium products. Electronics, fashion, beauty & home essentials with cash on delivery across Bangladesh."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          {/* Header */}
          <section className="py-12 bg-card border-b border-border">
            <div className="container mx-auto px-4 lg:px-8">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                {selectedCategory
                  ? categories.find((c) => c.id === selectedCategory)?.name || "Products"
                  : "All Products"}
              </h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} products available • Cash on Delivery
              </p>
            </div>
          </section>

          {/* Main Content */}
          <div className="container mx-auto px-4 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full justify-center"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>

              {/* Sidebar Filters */}
              <aside
                className={`lg:w-64 flex-shrink-0 ${
                  showFilters ? "block" : "hidden lg:block"
                }`}
              >
                <div className="sticky top-24 space-y-6">
                  {/* Categories */}
                  <div className="bg-card rounded-lg border border-border p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">Categories</h3>
                      {selectedCategory && (
                        <button
                          onClick={clearFilters}
                          className="text-xs text-primary hover:underline"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleCategoryChange(category.id)}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            selectedCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {/* Active Filters */}
                {selectedCategory && (
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-sm text-muted-foreground">Active filters:</span>
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {categories.find((c) => c.id === selectedCategory)?.name}
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}

                {/* Products */}
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <div
                        key={product.id}
                        className="animate-fade-up"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground">No products found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;
