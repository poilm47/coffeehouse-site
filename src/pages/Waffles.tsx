
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Star, Cookie, Heart, Dessert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface WaffleItemProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  image: string;
  badge?: string;
  toppings: string[];
}

const WaffleItem = ({ title, description, price, icon, image, badge, toppings }: WaffleItemProps) => (
  <Card className="overflow-hidden group hover-scale">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      {badge && (
        <Badge className="absolute top-3 right-3 bg-primary/90 hover:bg-primary">
          {badge}
        </Badge>
      )}
    </div>
    <CardHeader className="pb-3">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <span className="font-bold text-lg">{price} ₽</span>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="pb-4">
      <h4 className="text-sm font-medium mb-2">Топпинги:</h4>
      <div className="flex flex-wrap gap-1">
        {toppings.map((topping, idx) => (
          <Badge key={idx} variant="outline" className="text-xs">
            {topping}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="pt-0">
      <Button className="w-full gap-2">
        <Cookie className="h-4 w-4" />
        Заказать
      </Button>
    </CardFooter>
  </Card>
);

const Waffles = () => {
  const waffles = [
    {
      title: "Классические с кленовым сиропом",
      description: "Хрустящие бельгийские вафли с натуральным кленовым сиропом и свежими ягодами",
      price: "290",
      icon: <Utensils className="h-5 w-5 text-amber-600" />,
      image: "https://images.unsplash.com/photo-1504387828636-abeb50778c0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      toppings: ["Кленовый сироп", "Свежие ягоды", "Сливочное масло", "Сахарная пудра"]
    },
    {
      title: "Шоколадные с мороженым",
      description: "Шоколадные вафли с ванильным мороженым, шоколадным соусом и орехами",
      price: "320",
      icon: <Dessert className="h-5 w-5 text-amber-800" />,
      image: "https://images.unsplash.com/photo-1512813498716-3e640fed3f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      badge: "ХИТ",
      toppings: ["Шоколадный соус", "Ванильное мороженое", "Грецкие орехи", "Взбитые сливки"]
    },
    {
      title: "Карамельные с бананом",
      description: "Пышные вафли с карамельным соусом, свежими бананами и хрустящим печеньем",
      price: "310",
      icon: <Cookie className="h-5 w-5 text-yellow-600" />,
      image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      toppings: ["Карамельный соус", "Бананы", "Крошка печенья", "Грецкие орехи"]
    },
    {
      title: "Ягодные со сливками",
      description: "Воздушные вафли с сезонными ягодами, взбитыми сливками и ягодным соусом",
      price: "340",
      icon: <Heart className="h-5 w-5 text-red-500" />,
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f35b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      badge: "НОВИНКА",
      toppings: ["Клубника", "Черника", "Малина", "Взбитые сливки", "Ягодный соус"]
    },
    {
      title: "Веганские с фруктами",
      description: "Вафли без продуктов животного происхождения с фруктами и кокосовыми сливками",
      price: "350",
      icon: <Star className="h-5 w-5 text-green-600" />,
      image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      badge: "ВЕГАН",
      toppings: ["Свежие фрукты", "Кокосовые сливки", "Агавовый сироп", "Кокосовая стружка"]
    },
    {
      title: "Савори вафли с авокадо",
      description: "Пикантные вафли с авокадо, яйцом пашот и зеленью",
      price: "370",
      icon: <Utensils className="h-5 w-5 text-green-700" />,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      toppings: ["Авокадо", "Яйцо пашот", "Руккола", "Соус песто", "Помидоры черри"]
    },
  ];

  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Наши вафли</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы готовим хрустящие бельгийские вафли по оригинальному рецепту. 
              Используем только натуральные ингредиенты и свежие топпинги.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {waffles.map((waffle, index) => (
              <WaffleItem key={index} {...waffle} />
            ))}
          </div>

          <div className="mt-16 bg-accent/30 rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="h-6 w-6 text-amber-500" />
              <h2 className="text-2xl font-bold">Дополнительные топпинги</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Добавьте к любым вафлям дополнительные топпинги по вашему вкусу:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Шоколадный соус", price: "50" },
                { name: "Карамельный соус", price: "50" },
                { name: "Взбитые сливки", price: "70" },
                { name: "Мороженое", price: "100" },
                { name: "Свежие ягоды", price: "120" },
                { name: "Фруктовый микс", price: "130" },
              ].map((topping, idx) => (
                <Card key={idx} className="bg-background">
                  <CardContent className="p-4 flex justify-between items-center">
                    <p className="font-medium">{topping.name}</p>
                    <Badge variant="secondary">{topping.price} ₽</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Waffles;
