
import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  return <section id="home" className="min-h-screen relative flex flex-col justify-center items-center pt-20 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-100/30 to-transparent dark:from-ocean-900/20 dark:to-transparent" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-ocean-300/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-right">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-ocean-400 opacity-75 blur"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl h-64 w-64 mx-auto">
                <img src="/lovable-uploads/ac4d6b01-bcd9-466e-b93d-287e7f3328de.png" alt="Omar Vieyra" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left animate-fade-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">Omar</span> Vieyra
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-foreground/80 font-light">
              {t('heroTitle')}
            </h2>
            <p className="mt-3 text-lg text-foreground/80 font-light">
              {t('heroDescription1')}
            </p>
            <p className="mt-3 text-lg text-foreground/80 font-light">
              {t('heroDescription2')}
            </p>

            <p className="mt-6 text-muted-foreground">
              {t('location')}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="btn-gradient">
                <Mail className="w-4 h-4 mr-2" />
                {t('contact')}
              </Button>
              <Button variant="outline">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="ghost">
                <Phone className="w-4 h-4 mr-2" />
                +52 (417) 130-8050
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-md" aria-label="Scroll to about section">
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>;
};

export default Hero;
