
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
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-100/30 to-transparent dark:from-ocean-900/20 dark:to-transparent animate-pulse-light" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-ocean-300/10 rounded-full filter blur-3xl animate-wave" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-ocean-400/5 rounded-full filter blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-right">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-ocean-400 to-primary opacity-75 blur animate-scale-pulse"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-ocean-300 to-primary opacity-30 blur-xl animate-spin-slow"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl h-64 w-64 mx-auto transition-all duration-500 group-hover:scale-105 group-hover:shadow-primary/50 shimmer">
                <img src="/lovable-uploads/ac4d6b01-bcd9-466e-b93d-287e7f3328de.png" alt="Omar Vieyra" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left animate-fade-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative">
              <span className="text-primary animate-scale-pulse inline-block">Omar</span>{" "}
              <span className="relative inline-block">
                Vieyra
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-ocean-400 animate-shimmer"></span>
              </span>
            </h1>
            <h2 className="mt-6 text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
              {t('heroTitle')}
            </h2>
            <p className="mt-4 text-lg text-foreground/70 font-light leading-relaxed">
              {t('heroDescription1')}
            </p>
            <p className="mt-3 text-lg text-foreground/70 font-light leading-relaxed">
              {t('heroDescription2')}
            </p>

            <p className="mt-6 text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {t('location')}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="btn-gradient group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Mail className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                  {t('contact')}
                </span>
              </Button>
              <Button variant="outline" asChild className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <a href="https://www.linkedin.com/in/ovieyra" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" className="group hover:bg-primary/10 transition-all duration-300">
                <Phone className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                +52 (417) 130-8050
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <button 
            onClick={scrollToAbout} 
            className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 glow group" 
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 text-primary group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </section>;
};

export default Hero;
