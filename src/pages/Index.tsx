
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedCoffees from "@/components/FeaturedCoffees";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <Hero />
        <FeaturedCoffees />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
