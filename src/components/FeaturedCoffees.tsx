
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type CoffeeItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  price: string;
};

const coffeeItems: CoffeeItem[] = [
  {
    id: 1,
    name: "Эспрессо",
    description: "Концентрированный кофейный напиток, приготовленный путем пропускания горячей воды под давлением через молотый кофе.",
    image: "https://images.unsplash.com/photo-1596952954288-16862d37405f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Классика", "Крепкий"],
    price: "180 ₽"
  },
  {
    id: 2,
    name: "Капучино",
    description: "Кофейный напиток на основе эспрессо с добавлением молочной пены, создающей бархатистую текстуру.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Молочный", "Популярный"],
    price: "260 ₽"
  },
  {
    id: 3,
    name: "Фильтр-кофе YourTime",
    description: "Наш особый способ заваривания раскрывает богатый вкусовой профиль редких сортов зерен.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Фирменный", "Мягкий"],
    price: "220 ₽"
  }
];

const FeaturedCoffees = () => {
  return (
    <section id="featured-coffees" className="py-16 bg-accent/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные напитки</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наши бариста готовят кофейные напитки из отборных зерен, обжаренных с особой заботой для достижения неповторимого вкуса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coffeeItems.map((coffee, index) => (
            <Card key={coffee.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg coffee-hover animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{coffee.name}</CardTitle>
                  <span className="font-medium text-primary">{coffee.price}</span>
                </div>
                <div className="flex gap-2 flex-wrap mt-2">
                  {coffee.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {coffee.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoffees;
