import { Link } from "react-router-dom";
import { Phone, MapPin, Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="font-display text-2xl font-semibold tracking-tight text-foreground"
            >
              LUXE
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium shopping experience with curated collections for the modern lifestyle.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Truck className="h-4 w-4" />
              <span className="text-sm font-medium">Cash on Delivery Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/products"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Shop All
              </Link>
              <Link
                to="/categories"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Categories
              </Link>
              <Link
                to="/cart"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Cart
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Policies
            </h4>
            <nav className="flex flex-col gap-2">
              <span className="text-muted-foreground text-sm">
                Delivery: 3-5 Business Days
              </span>
              <span className="text-muted-foreground text-sm">
                Easy Returns within 7 Days
              </span>
              <span className="text-muted-foreground text-sm">
                100% Authentic Products
              </span>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 LUXE. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <span className="inline-block w-4 h-3 bg-gradient-gold rounded-sm"></span>
              Payment: Cash on Delivery Only
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
