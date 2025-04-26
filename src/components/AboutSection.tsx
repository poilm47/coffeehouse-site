
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative order-2 md:order-1 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1619859293073-c43e1ad6ccf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Свежеобжаренный кофе" 
                  className="rounded-lg h-48 w-full object-cover animate-float"
                />
                <img 
                  src="https://images.unsplash.com/photo-1599639668273-ba43c0202a14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Процесс обжарки" 
                  className="rounded-lg h-32 w-full object-cover animate-float animation-delay-200"
                />
              </div>
              <div className="space-y-4 mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Бариста за работой" 
                  className="rounded-lg h-32 w-full object-cover animate-float animation-delay-100"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Кофейные зерна" 
                  className="rounded-lg h-48 w-full object-cover animate-float animation-delay-300"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2 animate-fade-in animate-delay-100">
            <h2 className="text-3xl md:text-4xl font-bold">О нашей кофейне</h2>
            <p className="text-muted-foreground">
              <span className="text-primary font-medium">YourTime</span> — это место, 
              где время замедляется, чтобы вы могли насладиться моментом и по-настоящему
              ощутить вкус кофе.
            </p>
            <p className="text-muted-foreground">
              Мы лично отбираем зерна у фермеров со всего мира и обжариваем их в нашей 
              собственной обжарочной, чтобы раскрыть все богатство вкусовых нот.
            </p>
            <p className="text-muted-foreground">
              Наши бариста — настоящие профессионалы своего дела, которые превращают
              приготовление кофе в искусство.
            </p>
            
            <div className="pt-4">
              <Button asChild className="group">
                <Link to="/articles/beans">
                  Узнать о наших зернах
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
