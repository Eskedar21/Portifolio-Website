import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, MouseEvent } from "react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", href: "/#about", type: "anchor" },
    { name: "Projects", href: "/#projects", type: "anchor" },
    { name: "Services", href: "/#services", type: "anchor" },
    { name: "Contact", href: "/#contact", type: "anchor" },
  ];

  const isHome = location.pathname === "/";
  const isProjectDetail = location.pathname.startsWith("/project/");

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) {
      // If not on home, let the default anchor behavior (or navigation) happen
      // In HashRouter, /#about will take us to the root path with a hash.
      return;
    }
    
    // If on home, we might want smooth scroll
    e.preventDefault();
    const id = href.replace("/#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-foreground font-bold text-xl tracking-tighter">ESKEDAR.T</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {!isProjectDetail && (
              <div className="flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  link.type === "route" ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === link.href 
                          ? "text-blue-600 dark:text-blue-400" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  )
                ))}
              </div>
            )}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {!isProjectDetail && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.type === "route" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.href 
                      ? "text-blue-600 dark:text-blue-400 bg-blue-600/5" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleAnchorClick(e, link.href);
                  }}
                  className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
