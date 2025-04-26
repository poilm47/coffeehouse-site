
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import StartScreen from "@/components/game/StartScreen";
import GameOverScreen from "@/components/game/GameOverScreen";
import GamePlayArea from "@/components/game/GamePlayArea";
import GameRules from "@/components/game/GameRules";
import { useGameLogic } from "@/hooks/useGameLogic";

const CoffeeGame = () => {
  const GAME_TIME = 30;
  const {
    gameStarted,
    gameOver,
    score,
    timeLeft,
    coffeeBeans,
    highScore,
    startGame,
    handleBeanClick
  } = useGameLogic(GAME_TIME);

  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center animate-fade-in">
            Кофейная мини-игра
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Собери как можно больше кофейных зерен за {GAME_TIME} секунд!
          </p>

          <Card className="overflow-hidden mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-0">
              <div className="bg-muted p-4 flex justify-between items-center">
                <div className="font-medium">Счет: {score}</div>
                <div className="font-medium">Рекорд: {highScore}</div>
                <div className="font-medium">Время: {timeLeft}с</div>
              </div>
              <div className="relative h-96 bg-gradient-to-b from-background to-accent overflow-hidden">
                {!gameStarted && !gameOver && <StartScreen onStart={startGame} />}
                {gameOver && <GameOverScreen score={score} highScore={highScore} onRestart={startGame} />}
                {gameStarted && !gameOver && (
                  <GamePlayArea 
                    timeLeft={timeLeft} 
                    totalTime={GAME_TIME} 
                    coffeeBeans={coffeeBeans} 
                    onBeanClick={handleBeanClick} 
                  />
                )}
              </div>
            </CardContent>
          </Card>

          <GameRules highScore={highScore} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CoffeeGame;
