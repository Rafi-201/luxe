import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal >= 2000 ? 0 : 100;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart | LUXE</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-20 flex items-center justify-center min-h-[60vh]">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <div>
                <h1 className="font-display text-2xl text-foreground mb-2">
                  Your cart is empty
                </h1>
                <p className="text-muted-foreground">
                  Discover our premium collection and find something you love
                </p>
              </div>
              <Link to="/products">
                <Button variant="gold" size="lg">
                  Start Shopping
                  <ArrowRight className="h-4 w-4 ml-2" />
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
        <title>{`Shopping Cart (${items.length}) | LUXE`}</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          {/* Header */}
          <section className="py-8 bg-card border-b border-border">
            <div className="container mx-auto px-4 lg:px-8">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Shopping Cart
              </h1>
              <p className="text-muted-foreground mt-1">
                {items.length} item{items.length > 1 ? "s" : ""} in your cart
              </p>
            </div>
          </section>

          <section className="container mx-auto px-4 lg:px-8 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-4 bg-card rounded-lg border border-border"
                  >
                    {/* Image */}
                    <Link
                      to={`/product/${item.product.id}`}
                      className="flex-shrink-0"
                    >
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        ৳{item.product.price.toLocaleString()} each
                      </p>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-10 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Price & Remove */}
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-foreground">
                            ৳{(item.product.price * item.quantity).toLocaleString()}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-lg border border-border p-6 space-y-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Order Summary
                  </h2>

                  <div className="space-y-3">
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
                    {subtotal < 2000 && (
                      <p className="text-xs text-primary">
                        Add ৳{(2000 - subtotal).toLocaleString()} more for free shipping
                      </p>
                    )}
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold text-foreground">Total</span>
                        <span className="font-bold text-lg text-foreground">
                          ৳{total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link to="/checkout">
                      <Button variant="gold" size="lg" className="w-full">
                        Proceed to Checkout
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/products">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    💳 Cash on Delivery • Pay when you receive
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

export default Cart;
