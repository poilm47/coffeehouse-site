
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Sparkles, Coins, Gift } from "lucide-react";

interface Prize {
  id: number;
  name: string;
  color: string;
  probability: number;
  image?: string;
}

const prizes: Prize[] = [
  { id: 1, name: "iPhone 15 Pro", color: "#FFD700", probability: 1, image: "https://images.unsplash.com/photo-1695048133142-1a20484bce71?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, name: "Скидка 50%", color: "#FF5733", probability: 10 },
  { id: 3, name: "1000 монет", color: "#FFC300", probability: 15 },
  { id: 4, name: "Попробуй снова", color: "#C70039", probability: 30 },
  { id: 5, name: "Кофе бесплатно", color: "#900C3F", probability: 20 },
  { id: 6, name: "500 монет", color: "#581845", probability: 15 },
  { id: 7, name: "Скидка 10%", color: "#2874A6", probability: 25 },
  { id: 8, name: "Десерт в подарок", color: "#1E8449", probability: 20 }
];

const FortuneWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [userCoins, setUserCoins] = useState(500); // Начальное количество монет
  const [lastPrize, setLastPrize] = useState<Prize | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  
  const spinWheel = () => {
    if (isSpinning) return;
    
    if (userCoins < 100) {
      toast({
        title: "Недостаточно монет",
        description: "У вас недостаточно монет для вращения колеса",
        variant: "destructive",
      });
      return;
    }
    
    setUserCoins(prev => prev - 100);
    setIsSpinning(true);
    
    // Определение случайного приза на основе вероятности
    const weightedPrizes: Prize[] = [];
    prizes.forEach(prize => {
      for (let i = 0; i < prize.probability; i++) {
        weightedPrizes.push(prize);
      }
    });
    
    const randomPrize = weightedPrizes[Math.floor(Math.random() * weightedPrizes.length)];
    const prizeIndex = prizes.findIndex(p => p.id === randomPrize.id);
    
    // Расчёт угла вращения (дополнительные обороты + позиция приза)
    const additionalRotation = 360 * 5; // 5 полных оборотов для эффекта
    const prizeRotation = (360 / prizes.length) * prizeIndex;
    const targetRotation = rotation + additionalRotation + (360 - prizeRotation);
    
    setRotation(targetRotation);
    
    // Показать результат после остановки колеса
    setTimeout(() => {
      setIsSpinning(false);
      setLastPrize(randomPrize);
      
      toast({
        title: "Поздравляем!",
        description: `Вы выиграли: ${randomPrize.name}`,
        variant: "default",
      });
      
      // Добавляем монеты, если выиграл монеты
      if (randomPrize.name.includes("монет")) {
        const wonCoins = parseInt(randomPrize.name.split(" ")[0]);
        setUserCoins(prev => prev + wonCoins);
      }
    }, 5000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Колесо Фортуны</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Coins className="mr-2 h-6 w-6" /> Ваши монеты
            </CardTitle>
            <CardDescription>
              Стоимость одного вращения: 100 монет
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{userCoins}</div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={spinWheel} 
              disabled={isSpinning || userCoins < 100}
              className="w-full"
            >
              {isSpinning ? "Вращается..." : "Вращать колесо (100 монет)"}
            </Button>
          </CardFooter>
        </Card>
        
        <div className="col-span-1 lg:col-span-2 flex justify-center items-center flex-col">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mb-8">
            {/* Центральная точка колеса */}
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary"></div>
            
            {/* Указатель */}
            <div className="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[30px] border-l-transparent border-r-transparent border-b-primary"></div>
            
            {/* Колесо фортуны */}
            <div 
              ref={wheelRef}
              className="absolute w-full h-full rounded-full overflow-hidden border-8 border-primary/80 shadow-xl transition-transform duration-5000 ease-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {prizes.map((prize, index) => {
                const angle = (360 / prizes.length) * index;
                const rotate = `rotate(${angle}deg)`;
                const skew = `skew(${90 - (360 / prizes.length)}deg)`;
                
                return (
                  <div 
                    key={prize.id}
                    className="absolute top-0 right-0 w-1/2 h-1/2 origin-bottom-left text-white font-bold flex justify-center"
                    style={{ 
                      transform: `${rotate} ${skew}`,
                      background: prize.color,
                    }}
                  >
                    <span 
                      className="absolute whitespace-nowrap text-xs md:text-sm mt-5 md:mt-8 transform -rotate-[20deg] skew-y-[20deg]"
                      style={{ transform: `rotate(-${angle + (360 / prizes.length) / 2}deg) skew(${90 - (360 / prizes.length)}deg)` }}
                    >
                      {prize.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {lastPrize && (
            <Card className="w-full max-w-md animate-fade-in">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="flex items-center justify-center">
                  <Gift className="mr-2 h-6 w-6" /> Ваш последний выигрыш
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center">
                  {lastPrize.id === 1 && (
                    <div className="mb-4">
                      <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse mx-auto" />
                      <div className="mt-2 text-sm font-medium text-amber-600">Главный приз!</div>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{lastPrize.name}</h3>
                {lastPrize.image && (
                  <img 
                    src={lastPrize.image} 
                    alt={lastPrize.name} 
                    className="w-40 h-40 object-contain mx-auto my-4 rounded-md" 
                  />
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Возможные призы</CardTitle>
          <CardDescription>Испытайте свою удачу и выиграйте ценные призы</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {prizes.map(prize => (
              <div 
                key={prize.id} 
                className="p-4 rounded-lg text-center"
                style={{ backgroundColor: `${prize.color}20` }}
              >
                <div 
                  className="w-6 h-6 rounded-full mx-auto mb-2" 
                  style={{ backgroundColor: prize.color }}
                ></div>
                <p className="text-sm font-medium">{prize.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FortuneWheel;
