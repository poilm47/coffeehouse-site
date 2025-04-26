
import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground pt-12 pb-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold tracking-tight">YourTime</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Ваше время. Ваш кофе.<br />
              Наслаждайтесь каждым моментом.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium mb-4">Статьи</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/articles/brewing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Способы заваривания
                </Link>
              </li>
              <li>
                <Link to="/articles/beans" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Виды кофейных зерен
                </Link>
              </li>
              <li>
                <Link to="/articles/recipes" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Рецепты напитков
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/coffee-guide" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  О кофе
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium mb-4">Контакты</h3>
            <address className="not-italic text-muted-foreground text-sm space-y-2">
              <p>ул. Кофейная, 15</p>
              <p>Москва, Россия</p>
              <p>Телефон: +7 (999) 123-45-67</p>
              <p>Email: info@yourtime.coffee</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} YourTime Coffee. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
