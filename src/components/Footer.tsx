import { Mail, MapPin, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-semibold text-primary">
              Omar<span className="text-foreground">Vieyra</span>
            </span>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              {t('heroTitle')}
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a href="mailto:omarvieyra@hotmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> omarvieyra@hotmail.com
            </a>
            <a href="https://www.linkedin.com/in/ovieyra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" /> linkedin.com/in/ovieyra
            </a>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Acámbaro, Guanajuato, México
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          &copy; {currentYear} Omar Vieyra. {t('allRightsReserved')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
