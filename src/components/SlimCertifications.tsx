import { GraduationCap, QrCode, ExternalLink, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const VERIFY_URL = "https://capacitateparaelempleo.org/verifica_diplomado/";

const SlimCertifications = () => {
  const { language } = useLanguage();
  const es = language === "es";

  const certs = [
    {
      title: es
        ? "Diplomado en Desarrollo de Sitios Web y Aplicaciones Móviles"
        : "Diploma in Web Sites and Mobile Applications Development",
      hours: "726 " + (es ? "horas" : "hours"),
      folio: "TOQBZ7880",
      date: es ? "10 de enero de 2022" : "January 10, 2022",
      place: es ? "Ciudad de México" : "Mexico City",
      signer: "Dr. Javier Elguea Solís",
    },
    {
      title: es ? "Desarrollador Back-end" : "Back-end Developer",
      folio: "54bnsyJA",
      date: es ? "15 de agosto de 2021" : "August 15, 2021",
    },
    {
      title: es ? "Desarrollador Front-end" : "Front-end Developer",
      date: es ? "15 de agosto de 2021" : "August 15, 2021",
    },
    {
      title: es ? "Desarrollador de Aplicaciones Móviles" : "Mobile Applications Developer",
      folio: "d8us8bBh",
      date: es ? "14 de agosto de 2021" : "August 14, 2021",
    },
    {
      title: es ? "Programador Orientado a Objetos" : "Object-Oriented Programmer",
    },
  ];

  return (
    <section id="slim-certifications" className="py-20 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title animate-fade-in">
          {es
            ? "Certificaciones Full Stack - Fundación Carlos Slim"
            : "Full Stack Certifications - Carlos Slim Foundation"}
        </h2>
        <p className="text-muted-foreground mt-4 max-w-3xl">
          {es
            ? "Capacítate para el Empleo · Más de 1,000 horas de formación técnica verificable por QR."
            : "Capacítate para el Empleo · Over 1,000 hours of technical training, QR verifiable."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {certs.map((cert, i) => (
            <Card
              key={i}
              className="glass-card border-l-4 border-l-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base leading-snug">{cert.title}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Fundación Carlos Slim · Capacítate para el Empleo
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {cert.hours && (
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {cert.hours}
                  </p>
                )}
                {cert.folio && (
                  <p className="flex items-center gap-2">
                    <QrCode className="h-4 w-4 text-primary" />
                    {es ? "Folio" : "ID"}: <span className="font-medium text-foreground">{cert.folio}</span>
                  </p>
                )}
                {cert.date && <p>{cert.date}</p>}
                {cert.place && <p>{cert.place}</p>}
                {cert.signer && <p className="italic">{cert.signer}</p>}
                <Badge variant="secondary" className="mt-2">
                  {es ? "Verificable con QR" : "QR verifiable"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild className="btn-gradient group">
            <a href={VERIFY_URL} target="_blank" rel="noopener noreferrer">
              {es ? "Verificación oficial" : "Official verification"}
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SlimCertifications;
