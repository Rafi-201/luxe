import { Truck, Shield, Phone, RotateCcw } from "lucide-react";

const CODBanner = () => {
  const features = [
    {
      icon: Truck,
      title: "Cash on Delivery",
      description: "Pay only when you receive your order",
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "100% authentic products guaranteed",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "7-day hassle-free return policy",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Call us anytime for assistance",
    },
  ];

  return (
    <section className="py-16 bg-gradient-gold">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CODBanner;
