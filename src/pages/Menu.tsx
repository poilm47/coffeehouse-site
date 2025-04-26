
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Snowflake, Droplet, Egg, Flame, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DrinkItemProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  image: string;
  badge?: string;
  ingredients: string[];
}

const DrinkItem = ({ title, description, price, icon, image, badge, ingredients }: DrinkItemProps) => (
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
      <h4 className="text-sm font-medium mb-2">Состав:</h4>
      <div className="flex flex-wrap gap-1">
        {ingredients.map((ingredient, idx) => (
          <Badge key={idx} variant="outline" className="text-xs">
            {ingredient}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="pt-0">
      <Button className="w-full gap-2">
        <Coffee className="h-4 w-4" />
        Заказать
      </Button>
    </CardFooter>
  </Card>
);

const Menu = () => {
  const drinks = [
    {
      title: "Капучино",
      description: "Классический итальянский напиток с нежной молочной пеной",
      price: "250",
      icon: <Coffee className="h-5 w-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      ingredients: ["Эспрессо", "Молоко", "Молочная пена"]
    },
    {
      title: "Латте",
      description: "Мягкий кофейный напиток с большим количеством взбитого молока",
      price: "270",
      icon: <Coffee className="h-5 w-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      ingredients: ["Эспрессо", "Молоко", "Молочная пена"]
    },
    {
      title: "Раф",
      description: "Авторский напиток российского происхождения с ванильным сахаром и сливками",
      price: "290",
      badge: "ХИТ",
      icon: <Coffee className="h-5 w-5 text-primary" />,
      image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc39?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      ingredients: ["Эспрессо", "Сливки", "Ванильный сахар"]
    },
    {
      title: "Горячий шоколад",
      description: "Густой и насыщенный шоколадный напиток с молоком",
      price: "230",
      icon: <Flame className="h-5 w-5 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      ingredients: ["Тёмный шоколад", "Молоко", "Сливки", "Какао"]
    },
    {
      title: "Какао",
      description: "Классический горячий напиток из какао-порошка с молоком",
      price: "210",
      icon: <Egg className="h-5 w-5 text-amber-700" />,
      image: "https://images.unsplash.com/photo-1635906690363-7e4ffe2ad19c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      ingredients: ["Какао-порошок", "Молоко", "Сахар"]
    },
    {
      title: "Ягодный лимонад",
      description: "Освежающий лимонад с малиной, клубникой и мятой",
      price: "190",
      icon: <Snowflake className="h-5 w-5 text-blue-400" />,
      badge: "НОВИНКА",
      image: "https://images.unsplash.com/photo-1558383817-b53a840cfbd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      ingredients: ["Ягоды", "Лимон", "Лайм", "Мята", "Сироп"]
    },
  ];

  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Меню напитков</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наши бариста готовят напитки из свежеобжаренного кофе высшего качества.
              Мы тщательно отбираем ингредиенты, чтобы каждый глоток дарил вам наслаждение.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {drinks.map((drink, index) => (
              <DrinkItem key={index} {...drink} />
            ))}
          </div>

          <div className="mt-16 bg-accent/30 rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold">Альтернативное молоко</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Мы предлагаем различные варианты растительного молока для ваших напитков без доплаты:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Кокосовое", "Миндальное", "Овсяное", "Соевое"].map((milk, idx) => (
                <Card key={idx} className="bg-background">
                  <CardContent className="p-4 text-center">
                    <Droplet className="h-8 w-8 mx-auto mb-2 text-primary/60" />
                    <p className="font-medium">{milk}</p>
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

export default Menu;
