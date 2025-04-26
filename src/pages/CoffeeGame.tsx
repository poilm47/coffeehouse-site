
import { useState, useEffect, useCallback } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, ChevronRight, Star, Award, RefreshCw } from "lucide-react";

interface CoffeeBeanProps {
  id: number;
  position: { x: number; y: number };
  isCaptured: boolean;
  onClick: (id: number) => void;
}

const CoffeeBean = ({ id, position, isCaptured, onClick }: CoffeeBeanProps) => (
  <div
    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
      isCaptured ? "opacity-0 scale-0" : "hover:scale-110"
    }`}
    style={{ left: `${position.x}%`, top: `${position.y}%` }}
    onClick={() => onClick(id)}
  >
    <Coffee className="h-10 w-10 text-primary" />
  </div>
);

const CoffeeGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [coffeeBeans, setCoffeeBeans] = useState<Array<{ id: number; position: { x: number; y: number }; isCaptured: boolean }>>([]);
  const [highScore, setHighScore] = useState<number>(() => {
    const saved = localStorage.getItem("coffeeGameHighScore");
    return saved ? parseInt(saved, 10) : 0;
  });

  const generateBeans = useCallback(() => {
    const newBeans = [];
    for (let i = 0; i < 10; i++) {
      newBeans.push({
        id: i,
        position: {
          x: Math.random() * 80 + 10, // 10-90% to keep within bounds
          y: Math.random() * 70 + 15, // 15-85% to keep within bounds
        },
        isCaptured: false,
      });
    }
    setCoffeeBeans(newBeans);
  }, []);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTimeLeft(30);
    generateBeans();
  };

  const handleBeanClick = (id: number) => {
    if (!gameStarted || gameOver) return;

    setCoffeeBeans((prevBeans) =>
      prevBeans.map((bean) =>
        bean.id === id ? { ...bean, isCaptured: true } : bean
      )
    );
    setScore((prevScore) => prevScore + 10);

    // When all beans are captured, generate new ones
    const remainingBeans = coffeeBeans.filter((bean) => !bean.isCaptured && bean.id !== id);
    if (remainingBeans.length === 0) {
      generateBeans();
    }
  };

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setGameOver(true);
            if (score > highScore) {
              setHighScore(score);
              localStorage.setItem("coffeeGameHighScore", score.toString());
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameStarted, gameOver, score, highScore]);

  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center animate-fade-in">
            Кофейная мини-игра
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Собери как можно больше кофейных зерен за 30 секунд!
          </p>

          <Card className="overflow-hidden mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-0">
              <div className="bg-muted p-4 flex justify-between items-center">
                <div className="font-medium">Счет: {score}</div>
                <div className="font-medium">Рекорд: {highScore}</div>
                <div className="font-medium">Время: {timeLeft}с</div>
              </div>
              <div className="relative h-96 bg-gradient-to-b from-background to-accent overflow-hidden">
                {!gameStarted && !gameOver && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-4">Готовы собирать кофейные зерна?</h2>
                    <Button onClick={startGame} className="px-8">
                      Начать игру <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {gameOver && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="bg-card p-8 rounded-lg shadow-xl text-center max-w-md">
                      <h2 className="text-2xl font-bold mb-2">Игра окончена!</h2>
                      <p className="mb-4">Твой счет: <span className="font-bold text-primary">{score}</span></p>
                      
                      {score === highScore && score > 0 && (
                        <div className="flex items-center justify-center mb-4 text-yellow-500">
                          <Award className="mr-2 h-6 w-6" />
                          <span className="font-bold">Новый рекорд!</span>
                        </div>
                      )}
                      
                      <Button onClick={startGame} className="w-full">
                        <RefreshCw className="mr-2 h-4 w-4" /> Играть снова
                      </Button>
                    </div>
                  </div>
                )}

                {gameStarted && !gameOver && (
                  <>
                    <div className="absolute top-4 left-4 right-4">
                      <Progress value={(timeLeft / 30) * 100} className="h-2" />
                    </div>

                    {coffeeBeans.map((bean) => (
                      <CoffeeBean
                        key={bean.id}
                        id={bean.id}
                        position={bean.position}
                        isCaptured={bean.isCaptured}
                        onClick={handleBeanClick}
                      />
                    ))}
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="bg-gradient-to-br from-background to-accent/20">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <h3 className="font-bold text-lg mb-1">Правила игры</h3>
                <p className="text-sm text-muted-foreground">
                  Кликай по кофейным зернам, чтобы собрать их. Каждое зерно приносит 10 очков.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-background to-accent/20">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <h3 className="font-bold text-lg mb-1">Уровень сложности</h3>
                <p className="text-sm text-muted-foreground">
                  У тебя всего 30 секунд. Старайся собрать как можно больше зерен за это время.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-background to-accent/20">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <h3 className="font-bold text-lg mb-1">Рекорд</h3>
                <p className="text-sm text-muted-foreground">
                  Твой текущий рекорд: <span className="font-bold">{highScore}</span>. Сможешь его побить?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CoffeeGame;
