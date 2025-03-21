
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Certificates", href: "/certificates" },
    { name: "About", href: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b" 
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between h-16">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-display font-medium text-lg"
        >
          <Calendar className="h-5 w-5" />
          <span className="animate-fade-in">Eventive</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "relative py-2 font-medium text-sm transition-all hover-lift",
                  isActive(link.href) 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <Button asChild variant="ghost" size="sm" className="gap-1">
              <Link to="/login">
                <LogIn className="h-4 w-4 mr-1" />
                Log In
              </Link>
            </Button>
            <Button asChild size="sm" className="gap-1">
              <Link to="/register">
                <User className="h-4 w-4 mr-1" />
                Register
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-md focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass animate-fade-in">
          <Container className="pt-2 pb-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "py-3 px-2 rounded-md font-medium text-sm transition-all",
                    isActive(link.href) 
                      ? "bg-accent text-primary" 
                      : "text-muted-foreground hover:bg-accent hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-3 border-t">
              <Button asChild variant="outline" size="sm" className="w-full justify-start">
                <Link to="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Log In
                </Link>
              </Button>
              <Button asChild size="sm" className="w-full justify-start">
                <Link to="/register">
                  <User className="h-4 w-4 mr-2" />
                  Register
                </Link>
              </Button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};
