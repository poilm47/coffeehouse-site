
import { Link } from "react-router-dom";
import { Coffee, Home, BookOpen, ChevronDown, Menu, X, Video, GamepadIcon, UtensilsCrossed, Cookie, InfoIcon, HeadphonesIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 coffee-hover">
          <Coffee className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">YourTime</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" icon={<Home className="h-4 w-4" />} label="Главная" />
          <NavLink to="/coffee-guide" icon={<BookOpen className="h-4 w-4" />} label="О кофе" />
          <NavLink to="/video-tutorials" icon={<Video className="h-4 w-4" />} label="Видеоуроки" />
          <NavLink to="/menu" icon={<UtensilsCrossed className="h-4 w-4" />} label="Напитки" />
          <NavLink to="/waffles" icon={<Cookie className="h-4 w-4" />} label="Вафли" />
          <NavLink to="/coffee-facts" icon={<InfoIcon className="h-4 w-4" />} label="Факты о кофе" />
          <NavLink to="/coffee-game" icon={<GamepadIcon className="h-4 w-4" />} label="Мини-игра" />
          <NavLink to="/support" icon={<HeadphonesIcon className="h-4 w-4" />} label="Поддержка" />
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors">
              <span>Статьи</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-card shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
              <div className="py-1 px-2">
                <Link to="/articles/brewing" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                  Способы заваривания
                </Link>
                <Link to="/articles/beans" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                  Виды кофейных зерен
                </Link>
                <Link to="/articles/recipes" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
                  Рецепты кофейных напитков
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-background border-b border-border pb-4 px-4 shadow-lg transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <nav className="flex flex-col space-y-4 pt-2">
          <MobileNavLink to="/" label="Главная" />
          <MobileNavLink to="/coffee-guide" label="О кофе" />
          <MobileNavLink to="/video-tutorials" label="Видеоуроки" />
          <MobileNavLink to="/menu" label="Напитки" />
          <MobileNavLink to="/waffles" label="Вафли" />
          <MobileNavLink to="/coffee-facts" label="Факты о кофе" />
          <MobileNavLink to="/coffee-game" label="Мини-игра" />
          <MobileNavLink to="/support" label="Поддержка" />
          <MobileNavLink to="/articles/brewing" label="Способы заваривания" />
          <MobileNavLink to="/articles/beans" label="Виды кофейных зерен" />
          <MobileNavLink to="/articles/recipes" label="Рецепты кофейных напитков" />
        </nav>
      </div>
    </header>
  );
};

type NavLinkProps = {
  to: string;
  icon?: React.ReactNode;
  label: string;
};

const NavLink = ({ to, icon, label }: NavLinkProps) => (
  <Link 
    to={to} 
    className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors"
  >
    {icon && icon}
    <span>{label}</span>
  </Link>
);

const MobileNavLink = ({ to, label }: Omit<NavLinkProps, 'icon'>) => (
  <Link 
    to={to} 
    className="block px-2 py-2 text-foreground hover:text-primary transition-colors"
    onClick={() => document.body.click()} // Close menu on navigate
  >
    {label}
  </Link>
);

export default NavBar;
