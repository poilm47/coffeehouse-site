
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GameRules = ({ highScore }: { highScore: number }) => {
  return (
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
  );
};

export default GameRules;
