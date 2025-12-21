import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import CODBanner from "@/components/CODBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LUXE - Premium Shopping Experience | Cash on Delivery in Bangladesh</title>
        <meta
          name="description"
          content="Discover premium products with cash on delivery across Bangladesh. Shop electronics, fashion, beauty & more. No advance payment required."
        />
        <meta name="keywords" content="online shopping bangladesh, cash on delivery, premium products, electronics, fashion, beauty" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <FeaturedProducts />
          <CategorySection />
          <CODBanner />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
