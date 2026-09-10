import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stack = ["Python", "SQL", "Power BI", "Odoo ERP", "APIs / ETL", "OpenAI API", "Power Automate"];

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--accent))_0%,transparent_70%)]" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
              {t('location')}
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Omar Vieyra
            </h1>

            <h2 className="mt-5 text-xl md:text-2xl text-foreground/80 font-normal leading-snug max-w-2xl mx-auto lg:mx-0">
              {t('heroTitle')}
            </h2>

            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('heroDescription1')}
            </p>

            <div className="mt-7 flex flex-wrap gap-2 justify-center lg:justify-start">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button className="btn-gradient" onClick={() => scrollToSection("#contact")}>
                <Mail className="w-4 h-4 mr-2" />
                {t('contact')}
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/ovieyra" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="tel:+524171308050">
                  <Phone className="w-4 h-4 mr-2" />
                  +52 (417) 130-8050
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in">
            <div className="relative mx-auto h-56 w-56 md:h-72 md:w-72">
              <div className="absolute inset-0 rounded-2xl bg-primary/10 rotate-6" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-24px_rgba(10,61,98,0.45)]">
                <img
                  src="/lovable-uploads/ac4d6b01-bcd9-466e-b93d-287e7f3328de.png"
                  alt="Omar Vieyra, especialista en desarrollo tecnológico"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card p-3 text-primary shadow-sm transition-colors hover:bg-secondary"
        aria-label="Ir a la sección Sobre mí"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;
