
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { name: t('home'), href: "#home" },
    { name: t('about'), href: "#about" },
    { name: t('projects'), href: "#projects" },
    { name: t('certifications'), href: "#certifications" },
    { name: t('contact'), href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled 
          ? "py-2 bg-white/95 dark:bg-slate-900/95 shadow-lg backdrop-blur-xl border-b border-primary/10" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center group">
            <img 
              src="/lovable-uploads/12d6bab4-a3a4-4cfe-a107-50f628de8a0c.png" 
              alt="Omar Vieyra Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => scrollToSection(section.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {section.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-t border-primary/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {sections.map((section, index) => (
                <button
                  key={section.name}
                  onClick={() => scrollToSection(section.href)}
                  className="py-2 text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
