
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary">
              Omar<span className="text-foreground">Vieyra</span>
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Omar Vieyra. {t('allRightsReserved')}
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-end">
              {t('madeWith')} <Heart className="h-3 w-3 mx-1 text-red-500 fill-red-500" /> {t('in')} Acámbaro, Guanajuato.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
