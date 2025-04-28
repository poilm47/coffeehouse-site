
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Coffee, ExternalLink, ThumbsUp, Sparkles, Globe, Clock } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CoffeeFact {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  liked: boolean;
}

const CoffeeFacts = () => {
  const [facts, setFacts] = useState<CoffeeFact[]>([
    {
      id: 1,
      title: "Второй после нефти",
      description: "Кофе является вторым по популярности товаром в мире после нефти. Ежедневно во всем мире выпивается более 2,25 миллиардов чашек кофе.",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-amber-50 border-amber-200",
      liked: false
    },
    {
      id: 2,
      title: "Рекордная цена",
      description: "Самый дорогой кофе в мире — Kopi Luwak — стоит до $700 за килограмм. Его производят из зерен, прошедших через пищеварительную систему мусанга.",
      icon: <Sparkles className="h-6 w-6" />,
      color: "bg-emerald-50 border-emerald-200",
      liked: false
    },
    {
      id: 3,
      title: "Открытие кофеина",
      description: "Кофеин был открыт немецким химиком Фридлибом Фердинандом Рунге в 1819 году по поручению Иоганна Вольфганга фон Гёте.",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-blue-50 border-blue-200",
      liked: false
    },
    {
      id: 4,
      title: "Бразильский рекорд",
      description: "Бразилия производит около 40% всего кофе в мире. Это больше, чем любая другая страна. Следующими крупнейшими производителями являются Вьетнам и Колумбия.",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-green-50 border-green-200",
      liked: false
    },
    {
      id: 5,
      title: "Кофейное дерево",
      description: "Кофейное дерево может жить до 100 лет, но обычно его продуктивный период составляет около 50 лет. Первый урожай кофейное дерево дает через 3-5 лет после посадки.",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-rose-50 border-rose-200",
      liked: false
    },
    {
      id: 6,
      title: "Происхождение эспрессо",
      description: "Эспрессо-машина была изобретена в Италии Луиджи Беццерой в 1901 году. Однако первую коммерчески успешную эспрессо-машину разработал Акилле Гаджиа в 1948 году.",
      icon: <Sparkles className="h-6 w-6" />,
      color: "bg-purple-50 border-purple-200",
      liked: false
    }
  ]);

  // Интерактивные кофейные зёрна на фоне
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [beansVisible, setBeansVisible] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !beansVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Установка размеров canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Создание кофейных зёрен
    type Bean = {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
    };

    const beans: Bean[] = [];
    const beanCount = Math.min(30, Math.floor(window.innerWidth * window.innerHeight / 50000));

    for (let i = 0; i < beanCount; i++) {
      beans.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 5 + Math.random() * 10,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    // Отрисовка кофейного зерна
    const drawBean = (bean: Bean) => {
      ctx.save();
      ctx.translate(bean.x, bean.y);
      ctx.rotate(bean.rotation);
      
      ctx.beginPath();
      ctx.ellipse(0, 0, bean.radius, bean.radius / 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(101, 67, 33, 0.1)';
      ctx.fill();
      
      // Линия посередине зерна
      ctx.beginPath();
      ctx.moveTo(-bean.radius * 0.8, 0);
      ctx.lineTo(bean.radius * 0.8, 0);
      ctx.strokeStyle = 'rgba(81, 47, 23, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.restore();
    };

    // Анимация
    const animate = () => {
      if (!ctx || !beansVisible) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      beans.forEach(bean => {
        // Обновление позиции
        bean.x += bean.speedX;
        bean.y += bean.speedY;
        bean.rotation += bean.rotationSpeed;
        
        // Проверка границ
        if (bean.x < -bean.radius) bean.x = canvas.width + bean.radius;
        if (bean.x > canvas.width + bean.radius) bean.x = -bean.radius;
        if (bean.y < -bean.radius) bean.y = canvas.height + bean.radius;
        if (bean.y > canvas.height + bean.radius) bean.y = -bean.radius;
        
        // Отрисовка
        drawBean(bean);
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [beansVisible]);

  // Обработчик для лайков фактов
  const toggleLike = (id: number) => {
    setFacts(facts.map(fact => 
      fact.id === id ? { ...fact, liked: !fact.liked } : fact
    ));
  };

  // Индикатор для отслеживания фактов, которые появились на экране
  const [visibleFacts, setVisibleFacts] = useState<number[]>([]);
  
  const factObserver = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    factObserver.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const factId = Number(entry.target.getAttribute('data-id'));
            if (!visibleFacts.includes(factId)) {
              setVisibleFacts(prev => [...prev, factId]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    
    return () => {
      if (factObserver.current) {
        factObserver.current.disconnect();
      }
    };
  }, [visibleFacts]);

  // Прикрепляем observer к каждой карточке фактов
  useEffect(() => {
    const cards = document.querySelectorAll('.coffee-fact-card');
    if (factObserver.current) {
      cards.forEach(card => factObserver.current?.observe(card));
    }
    
    return () => {
      if (factObserver.current) {
        cards.forEach(card => factObserver.current?.unobserve(card));
      }
    };
  }, [facts]);

  return (
    <>
      <NavBar />
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 -z-10"
      />
      <main className="container mx-auto px-4 py-16 mb-16 mt-10">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Интересные факты о кофе</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя мир кофе через удивительные факты, истории и традиции. От открытия кофейных зерен до современной кофейной культуры.
            </p>
          </motion.div>
          
          <div className="flex gap-4 mt-6">
            <Button 
              variant="outline" 
              onClick={() => setBeansVisible(!beansVisible)}
              className="mt-4"
            >
              {beansVisible ? "Скрыть анимацию" : "Показать анимацию"}
            </Button>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              className={`coffee-fact-card ${fact.color} rounded-lg p-6 border-2 transition-transform duration-300 hover:shadow-lg relative`}
              data-id={fact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={visibleFacts.includes(fact.id) ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * (index % 3),
                ease: "easeOut"
              }}
            >
              <div className="float-right">{fact.icon}</div>
              <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
              <p className="text-gray-700 mb-4">{fact.description}</p>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className={`absolute bottom-4 right-4 transition-all ${fact.liked ? 'text-red-500' : ''}`}
                onClick={() => toggleLike(fact.id)}
              >
                <ThumbsUp className={`h-4 w-4 mr-1 ${fact.liked ? 'fill-red-500' : ''}`} />
                {fact.liked ? 'Понравилось' : 'Нравится'}
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Хотите узнать больше о кофе?</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <Button className="group">
              <span>Узнать больше</span>
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
        
        <div className="mt-16 bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Coffee className="mr-2 h-5 w-5" /> 
            Знаете ли вы?
          </h2>
          <p className="text-muted-foreground">
            Слово "кофе" происходит от арабского "qahwah", которое изначально означало вино. 
            Позже оно стало "kahveh" в турецком языке, а затем "koffie" в голландском,
            откуда и пришло в большинство европейских языков.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CoffeeFacts;
