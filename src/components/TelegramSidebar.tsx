
import { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "./NavBar";

interface TelegramSidebarProps {
  children: ReactNode;
  isMobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
}

const TelegramSidebar = ({ 
  children, 
  isMobileSidebarOpen, 
  setMobileSidebarOpen 
}: TelegramSidebarProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Боковая панель для мобильных устройств */}
      <div 
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileSidebarOpen(false)}
      />
      
      {/* Кнопка для открытия бокового меню (мобильные) */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg lg:hidden"
        onClick={() => setMobileSidebarOpen(true)}
      >
        <Menu />
      </Button>
      
      {/* Боковая панель */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-card border-r border-border shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          <h2 className="text-lg font-semibold">YourTime Кофейня</h2>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex flex-col h-[calc(100%-3.5rem)] p-4 overflow-y-auto">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground mb-4">
              🌟 Подписывайтесь на наш канал в Телеграм:
              <a 
                href="https://t.me/+QgiLIa1gFRY4Y2Iy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary hover:underline mt-2"
              >
                @YourTimeCoffee
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Основной контент */}
      <div className="flex flex-col flex-1 w-full lg:pl-72">
        <NavBar />
        <main className="flex-1 pt-16 px-4 md:px-8 pb-12">
          {children}
        </main>
        
        <footer className="border-t py-4 px-8 text-sm text-center text-muted-foreground">
          <p>© 2025 YourTime Coffee. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default TelegramSidebar;
