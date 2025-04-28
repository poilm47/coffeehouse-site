
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CoffeeIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20 w-full">
      <div className="container px-4 mx-auto w-full max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-primary">YourTime</span>
              <span className="block">кофейня твоего времени</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in animate-delay-100">
              Мы создаем особенную атмосферу, где каждая чашка кофе — это время, 
              которое вы дарите себе. Откройте мир изысканных вкусов и ароматов.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in animate-delay-200">
              <Button asChild size="lg" className="group">
                <Link to="/coffee-guide">
                  Открыть мир кофе
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#featured-coffees">Популярные напитки</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative animate-fade-in animate-delay-300">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Кофейня YourTime" 
                className="w-full h-[400px] md:h-[500px] object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 animate-pulse-slow">
                <div className="flex items-center justify-start">
                  <CoffeeIcon className="h-8 w-8 text-primary mr-3" />
                  <p className="text-white text-xl font-medium">Время для себя</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full animate-float opacity-80 -z-10" />
            <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-primary/20 rounded-full animate-float opacity-70 animation-delay-100 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
