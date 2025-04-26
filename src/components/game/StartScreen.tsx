
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Готовы собирать кофейные зерна?</h2>
      <Button onClick={onStart} className="px-8">
        Начать игру <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default StartScreen;
