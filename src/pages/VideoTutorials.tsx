
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";

type VideoTutorial = {
  id: string;
  title: string;
  description: string;
  embedId: string; // YouTube video ID
  duration: string;
  level: "Начинающий" | "Средний" | "Продвинутый";
};

const tutorials: VideoTutorial[] = [
  {
    id: "espresso",
    title: "Как приготовить идеальный эспрессо",
    description: "Основы приготовления эспрессо на профессиональной кофемашине. Узнайте о правильном помоле, темпинге и температуре воды.",
    embedId: "dQw4w9WgXcQ", // Заменить на реальное видео
    duration: "5:32",
    level: "Начинающий"
  },
  {
    id: "pourover",
    title: "Пуровер: пошаговая инструкция",
    description: "Техника заваривания кофе методом пуровер для получения чистого, яркого вкуса. Рассказываем о выборе фильтра и правильных пропорциях.",
    embedId: "dQw4w9WgXcQ", // Заменить на реальное видео
    duration: "8:15",
    level: "Средний"
  },
  {
    id: "aeropress",
    title: "Аэропресс: быстро и вкусно",
    description: "Полное руководство по приготовлению кофе в аэропрессе. Демонстрация классического и инвертированного методов.",
    embedId: "dQw4w9WgXcQ", // Заменить на реальное видео
    duration: "6:47",
    level: "Начинающий"
  },
  {
    id: "coldbrew",
    title: "Холодное заваривание (колд брю)",
    description: "Секреты приготовления идеального колд брю в домашних условиях. Особенности выбора зерен и времени заваривания.",
    embedId: "dQw4w9WgXcQ", // Заменить на реальное видео
    duration: "7:22",
    level: "Средний"
  },
  {
    id: "latte-art",
    title: "Основы латте-арт",
    description: "Научитесь создавать красивые узоры на кофе. Техника вливания молока и базовые паттерны для начинающих бариста.",
    embedId: "dQw4w9WgXcQ", // Заменить на реальное видео
    duration: "10:08",
    level: "Продвинутый"
  }
];

const VideoTutorials = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial>(tutorials[0]);
  
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center animate-fade-in">Видеоуроки по приготовлению кофе</h1>
          <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Изучите искусство приготовления кофе с нашими профессиональными бариста
          </p>
          
          <div className="mb-12 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                className="absolute w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.embedId}`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">{selectedVideo.title}</h2>
              <div className="flex items-center mt-2 space-x-4">
                <span className="inline-flex items-center text-sm bg-accent px-3 py-1 rounded-full">
                  <PlayCircle className="w-4 h-4 mr-1" /> {selectedVideo.duration}
                </span>
                <span className="inline-flex items-center text-sm bg-accent px-3 py-1 rounded-full">
                  Уровень: {selectedVideo.level}
                </span>
              </div>
              <p className="mt-3 text-muted-foreground">{selectedVideo.description}</p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: "0.4s"}}>
            <h3 className="text-xl font-semibold mb-4">Все уроки</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tutorials.map((tutorial) => (
                <Card 
                  key={tutorial.id}
                  className={`cursor-pointer hover-scale ${tutorial.id === selectedVideo.id ? 'border-primary' : ''}`}
                  onClick={() => setSelectedVideo(tutorial)}
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{tutorial.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{tutorial.duration}</span>
                    <span className="text-sm bg-accent px-2 py-1 rounded-full">{tutorial.level}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VideoTutorials;
