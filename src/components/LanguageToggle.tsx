
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        variant={language === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('es')}
        className="text-xs"
      >
        ES
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;
