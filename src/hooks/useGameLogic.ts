
import { useState, useEffect, useCallback } from 'react';

interface BeanType {
  id: number;
  position: { x: number; y: number };
  isCaptured: boolean;
}

export function useGameLogic(gameTime = 30) {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(gameTime);
  const [coffeeBeans, setCoffeeBeans] = useState<BeanType[]>([]);
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

  const startGame = useCallback(() => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTimeLeft(gameTime);
    generateBeans();
  }, [gameTime, generateBeans]);

  const handleBeanClick = useCallback((id: number) => {
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
  }, [coffeeBeans, gameOver, gameStarted, generateBeans]);

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

  return {
    gameStarted,
    gameOver,
    score,
    timeLeft,
    coffeeBeans,
    highScore,
    startGame,
    handleBeanClick
  };
}
