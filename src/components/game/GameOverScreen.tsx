
import { Award, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GameOverScreenProps {
  score: number;
  highScore: number;
  onRestart: () => void;
}

const GameOverScreen = ({ score, highScore, onRestart }: GameOverScreenProps) => {
  return (
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
        
        <Button onClick={onRestart} className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" /> Играть снова
        </Button>
      </div>
    </div>
  );
};

export default GameOverScreen;
