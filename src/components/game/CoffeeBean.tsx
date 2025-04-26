
import { Coffee } from "lucide-react";

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

export default CoffeeBean;
