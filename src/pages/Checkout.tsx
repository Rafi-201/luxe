import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, Truck, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface OrderFormData {
  fullName: string;
  phone: string;
  area: string;
  city: string;
  district: string;
  notes: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: "",
    phone: "",
    area: "",
    city: "",
    district: "",
    notes: "",
  });

  const subtotal = getCartTotal();
  const shipping = subtotal >= 2000 ? 0 : 100;
  const total = subtotal + shipping;

  if (items.length === 0 && !orderPlaced) {
    navigate("/cart");
    return null;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone: string) => {
    const bdPhoneRegex = /^(?:\+880|880|0)?1[3-9]\d{8}$/;
    return bdPhoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid Bangladeshi phone number");
      return;
    }

    if (!formData.area.trim() || !formData.city.trim() || !formData.district.trim()) {
      toast.error("Please complete your delivery address");
      return;
    }

    setIsSubmitting(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    clearCart();
    setOrderPlaced(true);
    setIsSubmitting(false);
  };

  if (orderPlaced) {
    return (
      <>
        <Helmet>
          <title>Order Confirmed | LUXE</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-20 flex items-center justify-center min-h-[70vh]">
            <div className="text-center space-y-6 px-4 max-w-md animate-scale-in">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h1 className="font-display text-3xl font-semibold text-foreground">
                  Order Confirmed!
                </h1>
                <p className="text-muted-foreground">
                  Thank you for your order, {formData.fullName}!
                </p>
              </div>
              <div className="bg-card rounded-lg border border-border p-6 text-left space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Cash on Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Pay ৳{total.toLocaleString()} when you receive your order
                    </p>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    We'll call you at <span className="text-foreground font-medium">{formData.phone}</span> to confirm your order.
                  </p>
                </div>
              </div>
              <Link to="/products">
                <Button variant="gold" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Checkout | LUXE</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          {/* Header */}
          <section className="py-6 bg-card border-b border-border">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                to="/cart"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-4"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Cart
              </Link>
              <h1 className="font-display text-3xl font-semibold text-foreground">
                Checkout
              </h1>
            </div>
          </section>

          <section className="container mx-auto px-4 lg:px-8 py-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="space-y-6">
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                    Delivery Information
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01XXXXXXXXX"
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        We'll contact you via this number
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="area">Area / Street Address *</Label>
                      <Input
                        id="area"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="House, Road, Area"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Dhaka"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="district">District *</Label>
                        <Input
                          id="district"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          placeholder="Dhaka"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Any special instructions for delivery..."
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Placing Order..." : "Place Order"}
                    </Button>
                  </form>
                </div>

                {/* COD Notice */}
                <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                  <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Cash on Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      No advance payment required. Pay the delivery person when you receive your order.
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-24 self-start">
                <div className="bg-card rounded-lg border border-border p-6 space-y-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Order Summary
                  </h2>

                  <div className="space-y-4 max-h-[300px] overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground line-clamp-2">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          ৳{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">
                        ৳{subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">
                        {shipping === 0 ? "Free" : `৳${shipping}`}
                      </span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-border">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-bold text-xl text-foreground">
                        ৳{total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    By placing this order, you agree to pay the total amount upon delivery.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
