import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Truck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Cash on Delivery Across Bangladesh
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-foreground">
              Discover
              <span className="block text-gradient-gold">Premium Quality</span>
              at Your Doorstep
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Curated collection of premium products delivered safely across Bangladesh. 
              No payment required until delivery – experience true convenience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="gold" size="xl" className="group">
                  Shop Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="xl">
                  Browse Categories
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over ৳2000</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">100% Authentic</p>
                <p className="text-xs text-muted-foreground">Verified products</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">3-5 business days</p>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="Premium Shopping Experience"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Pay on Delivery</p>
                    <p className="text-xs text-muted-foreground">No advance payment needed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 right-20 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
