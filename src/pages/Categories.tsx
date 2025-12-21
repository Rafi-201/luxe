import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, getProductsByCategory } from "@/data/products";

const Categories = () => {
  return (
    <>
      <Helmet>
        <title>Shop by Category | LUXE - Premium Shopping Bangladesh</title>
        <meta
          name="description"
          content="Browse our curated categories - Electronics, Fashion, Home & Living, Beauty. Premium products with cash on delivery across Bangladesh."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          {/* Header */}
          <section className="py-12 bg-card border-b border-border">
            <div className="container mx-auto px-4 lg:px-8">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                Shop by Category
              </h1>
              <p className="text-muted-foreground">
                Explore our curated collections across different categories
              </p>
            </div>
          </section>

          {/* Categories Grid */}
          <section className="container mx-auto px-4 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => {
                const productCount = getProductsByCategory(category.id).length;
                return (
                  <Link
                    key={category.id}
                    to={`/products?category=${category.id}`}
                    className="group block animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden hover-lift">
                      {/* Image */}
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                          {category.name}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {productCount} product{productCount !== 1 ? "s" : ""}
                          </span>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <span>Explore</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Categories;
