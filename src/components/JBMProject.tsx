import { useState } from "react";
import { MapPin, FileText, BookOpen, ZoomIn, ZoomOut, Lock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import pesajeImg from "@/assets/jbm-pesaje-neumatico.png.asset.json";
import lmxImg from "@/assets/jbm-lmx8-16-nvidia.png.asset.json";
import cerebroPdf from "@/assets/JBM_Cerebro_IA.pdf.asset.json";
import playbookPdf from "@/assets/Juliana_POS_Playbook.pdf.asset.json";

const JBMProject = () => {
  const { language } = useLanguage();
  const es = language === "es";
  const [lightbox, setLightbox] = useState<{ url: string; title: string } | null>(null);
  const [zoom, setZoom] = useState(1);

  const openLightbox = (url: string, title: string) => {
    setZoom(1);
    setLightbox({ url, title });
  };

  const projects = [
    {
      image: pesajeImg.url,
      title: es
        ? "Sistema de Pesaje y Llenado Neumático"
        : "Pneumatic Weighing and Filling System",
      description: es
        ? "Reto: Llenado manual de cajas sin precisión en peso.\nSolución: Sistema automático de tolva, pesaje (18.5 kg) y descarga neumática.\nResultado: +30% velocidad, variación <50g, 0 rechazos por peso."
        : "Challenge: Manual box filling without weight precision.\nSolution: Automated hopper system with load cell, 18.5 kg scale, and pneumatic gate.\nResult: +30% speed, <50g variance, zero weight-related rejects.",
      tags: es
        ? ["Celdas de Carga", "Neumática", "Automatización", "Diseño Mecatrónico"]
        : ["Load Cells", "Pneumatics", "Automation", "Mechatronic Design"],
    },
    {
      image: lmxImg.url,
      title: es
        ? "LMX8-16: Selección de Limones con IA en el Edge"
        : "LMX8-16: AI-Powered Lemon Sorting at the Edge",
      description: es
        ? "Reto: Clasificación manual de limones generaba inconsistencias y cuello de botella.\nSolución: NVIDIA Jetson Orin Nano + PLC Siemens + celdas de carga para integración de IA en tiempo real.\nResultado: +40% precisión, -50% rechazos, 8 salidas automáticas, arquitectura Industry 4.0."
        : "Challenge: Manual lemon sorting created inconsistencies and processing bottleneck.\nSolution: NVIDIA Jetson Orin Nano + Siemens PLC + load cells for real-time AI integration.\nResult: +40% accuracy, -50% rejects, 8 automated outputs, Industry 4.0 architecture.",
      tags: es
        ? ["NVIDIA Jetson Orin Nano", "PLC Siemens", "IA Edge", "Industry 4.0", "Celdas de Carga"]
        : ["NVIDIA Jetson Orin Nano", "Siemens PLC", "Edge AI", "Industry 4.0", "Load Cells"],
    },
  ];

  return (
    <section id="jbm" className="py-20 bg-secondary/30 dark:bg-slate-900/30 relative overflow-hidden">
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-wave" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title animate-fade-in">
          {es
            ? "Proyecto Destacado - JBM · Corporación Industrial Uruapan (CIU)"
            : "Featured Project - JBM · Corporación Industrial Uruapan (CIU)"}
        </h2>
        <p className="text-muted-foreground mt-4 max-w-3xl">
          {es
            ? "Transformación Digital Industrial con Inteligencia Artificial."
            : "Industrial Digital Transformation with Artificial Intelligence."}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
            <Lock className="h-4 w-4" />
            {es
              ? "Corporación Industrial Uruapan (CIU) - JBM"
              : "Corporación Industrial Uruapan (CIU) - JBM"}
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Uruapan, Michoacán
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {projects.map((p, i) => (
            <Card
              key={i}
              className="glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <button
                type="button"
                onClick={() => openLightbox(p.image, p.title)}
                className="group relative block w-full h-64 overflow-hidden bg-muted"
                aria-label={es ? "Ampliar imagen" : "Zoom image"}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-primary-foreground">
                  <ZoomIn className="h-8 w-8" />
                </span>
              </button>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                {p.achievement && (
                  <p className="mt-3 text-sm font-medium text-primary">{p.achievement}</p>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag) => (
                    <Badge key={tag} className="skill-badge">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Button asChild variant="default" className="btn-gradient">
                    <a href={cerebroPdf.url} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      {es ? "Ver Documentación Técnica" : "View Technical Documentation"}
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={playbookPdf.url} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" />
                      {es ? "Ver Playbook" : "View Playbook"}
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>

                <p className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Uruapan, Michoacán
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
        <DialogContent className="max-w-6xl h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-6 pb-3">
            <DialogTitle className="text-base pr-8">{lightbox?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2 px-6 pb-3">
            <Button variant="outline" size="sm" onClick={() => setZoom((z) => Math.max(1, z - 0.5))} disabled={zoom <= 1}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground w-14 text-center">{Math.round(zoom * 100)}%</span>
            <Button variant="outline" size="sm" onClick={() => setZoom((z) => Math.min(4, z + 0.5))} disabled={zoom >= 4}>
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-6 pt-0">
            {lightbox && (
              <img
                src={lightbox.url}
                alt={lightbox.title}
                style={{ width: `${zoom * 100}%` }}
                className="max-w-none mx-auto transition-[width] duration-200"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default JBMProject;
