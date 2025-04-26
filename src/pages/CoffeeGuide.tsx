
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CoffeeGuide = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Путеводитель по кофе</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Погрузитесь в мир кофе: от выращивания зерен до идеальной чашки напитка
            </p>
          </div>

          <Tabs defaultValue="basics" className="w-full animate-fade-in animate-delay-100">
            <TabsList className="w-full justify-start mb-8 overflow-auto">
              <TabsTrigger value="basics">Основы кофе</TabsTrigger>
              <TabsTrigger value="beans">Виды зерен</TabsTrigger>
              <TabsTrigger value="brewing">Способы заваривания</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basics" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="animate-fade-in animate-delay-200">
                  <CardHeader>
                    <CardTitle>История кофе</CardTitle>
                    <CardDescription>
                      От эфиопских легенд до мировой культуры
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      История кофе насчитывает более тысячи лет. Согласно легенде, 
                      эфиопский пастух Калди заметил необычное поведение коз, 
                      поедавших ягоды кофейного дерева.
                    </p>
                    <p>
                      Из Эфиопии кофе распространился в арабский мир, а затем 
                      в Европу и далее по всему миру, став одним из самых 
                      популярных напитков.
                    </p>
                    <Link to="/articles/history" className="inline-flex items-center text-primary hover:underline mt-2">
                      Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="animate-fade-in animate-delay-300">
                  <CardHeader>
                    <CardTitle>Путь от зерна до чашки</CardTitle>
                    <CardDescription>
                      Процесс создания идеального кофе
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Выращивание кофейных деревьев занимает годы. После сбора ягод 
                      начинается процесс обработки, сушки и сортировки зеленых зерен.
                    </p>
                    <p>
                      Обжарка — критический этап, определяющий вкусовой профиль. 
                      Последний шаг — правильное заваривание, раскрывающее все 
                      оттенки вкуса.
                    </p>
                    <Link to="/articles/bean-to-cup" className="inline-flex items-center text-primary hover:underline mt-2">
                      Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="beans" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BeanCard 
                  name="Арабика" 
                  latinName="Coffea Arabica" 
                  description="Высококачественные зерна с богатым вкусовым профилем, множеством оттенков и более низким содержанием кофеина."
                  image="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  regions={["Эфиопия", "Колумбия", "Бразилия", "Гватемала"]}
                  index={0}
                />
                <BeanCard 
                  name="Робуста" 
                  latinName="Coffea Canephora" 
                  description="Зерна с высоким содержанием кофеина, более крепким вкусом и характерной горчинкой."
                  image="https://images.unsplash.com/photo-1565019011521-b0575cbb57c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  regions={["Вьетнам", "Индонезия", "Уганда", "Индия"]}
                  index={1}
                />
                <BeanCard 
                  name="Либерика" 
                  latinName="Coffea Liberica" 
                  description="Редкий вид с крупными зернами и необычным древесно-цветочным ароматом."
                  image="https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  regions={["Малайзия", "Филиппины", "Либерия"]}
                  index={2}
                />
              </div>
              <div className="text-center mt-4">
                <Link to="/articles/beans" className="inline-flex items-center text-primary hover:underline">
                  Узнать больше о сортах и обжарке <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="brewing" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6 animate-fade-in animate-delay-200">
                  <h3 className="text-2xl font-bold">Эспрессо-методы</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <h4 className="font-medium">Эспрессо</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Классический метод с использованием высокого давления для получения концентрированного напитка с крема.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <h4 className="font-medium">Моко/Гейзерная кофеварка</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Итальянская технология, создающая крепкий насыщенный напиток, близкий к эспрессо.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 animate-fade-in animate-delay-300">
                  <h3 className="text-2xl font-bold">Фильтр-методы</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <h4 className="font-medium">Пуровер</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Ручной метод, позволяющий раскрыть тонкие нюансы вкуса через медленное проливание воды.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <h4 className="font-medium">Кемекс</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Классический американский метод с особым фильтром, дающий чистый и прозрачный напиток.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <h4 className="font-medium">Френч-пресс</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Метод полного погружения, создающий насыщенный и маслянистый напиток.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link to="/articles/brewing" className="inline-flex items-center text-primary hover:underline">
                  Подробные инструкции по завариванию <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

type BeanCardProps = {
  name: string;
  latinName: string;
  description: string;
  image: string;
  regions: string[];
  index: number;
};

const BeanCard = ({ name, latinName, description, image, regions, index }: BeanCardProps) => {
  return (
    <Card className="overflow-hidden animate-fade-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="italic">{latinName}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm">{description}</p>
        <div>
          <p className="text-sm font-medium mb-1">Основные регионы:</p>
          <ul className="text-sm text-muted-foreground list-disc pl-5">
            {regions.map((region) => (
              <li key={region}>{region}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoffeeGuide;
