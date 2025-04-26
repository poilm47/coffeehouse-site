
import { Progress } from "@/components/ui/progress";
import CoffeeBean from "./CoffeeBean";

interface BeanType {
  id: number;
  position: { x: number; y: number };
  isCaptured: boolean;
}

interface GamePlayAreaProps {
  timeLeft: number;
  totalTime: number;
  coffeeBeans: BeanType[];
  onBeanClick: (id: number) => void;
}

const GamePlayArea = ({ timeLeft, totalTime, coffeeBeans, onBeanClick }: GamePlayAreaProps) => {
  return (
    <>
      <div className="absolute top-4 left-4 right-4">
        <Progress value={(timeLeft / totalTime) * 100} className="h-2" />
      </div>

      {coffeeBeans.map((bean) => (
        <CoffeeBean
          key={bean.id}
          id={bean.id}
          position={bean.position}
          isCaptured={bean.isCaptured}
          onClick={onBeanClick}
        />
      ))}
    </>
  );
};

export default GamePlayArea;
