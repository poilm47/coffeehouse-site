
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedCoffees from "@/components/FeaturedCoffees";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full">
      <NavBar />
      <main className="min-h-screen w-full">
        <Hero />
        <FeaturedCoffees />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
