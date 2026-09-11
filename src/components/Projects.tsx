
import { useState } from "react";
import { ExternalLink, MapPin, FileText, BookOpen, ZoomIn, ZoomOut, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import pesajeImg from "@/assets/jbm-pesaje-neumatico.png.asset.json";
import lmxImg from "@/assets/jbm-lmx8-16-nvidia.png.asset.json";
import cerebroPdf from "@/assets/JBM_Cerebro_IA.pdf.asset.json";
import playbookPdf from "@/assets/Juliana_POS_Playbook.pdf.asset.json";
import routeVideo from "@/assets/route-optimization.mp4.asset.json";

const Projects = () => {
  const { t, language } = useLanguage();
  const es = language === "es";
  const [lightbox, setLightbox] = useState<{ url: string; title: string } | null>(null);
  const [zoom, setZoom] = useState(1);

  const openLightbox = (url: string, title: string) => {
    setZoom(1);
    setLightbox({ url, title });
  };

  const jbmProjects = [
    {
      image: lmxImg.url,
      title: es
        ? "JBM LMX8-16 - Corporación Industrial Uruapan (CIU) - Sistema Inteligente de Sorting con NVIDIA Jetson Orin Nano"
        : "JBM LMX8-16 - Corporación Industrial Uruapan (CIU) - Intelligent Sorting System with NVIDIA Jetson Orin Nano",
      description: es
        ? "Arquitectura completa de sistema de selección y empaque de limones LMX8-16. Integración de compuerta de corte existente en rampa (LMX8-16) con pistón, señal analógica de fuerza (8 salidas), caja de suma IP65 (báscula inferior), celdas de carga tipo barra, PLC de Control Siemens para datos de compuerta, Unidad de Procesamiento de Datos IA - NVIDIA Jetson Orin Nano, datos de peso individual a base de datos, indicador de estado de operador, zona de carga excéntrica y movimiento - datos de calibración. Matriz de decisión: báscula inferior vs báscula superior, tipo de empaque, sistema de pesaje, adaptador de LANAID, selección de llenado, selección modo automático. Esquema de red y control: PLC → NVIDIA Jetson → PC Supervisión → Base de Datos."
        : "Complete architecture of the LMX8-16 lime sorting and packing system. Integration of the existing ramp cutting gate (LMX8-16) with piston, analog force signal (8 outputs), IP65 summing box (lower scale), bar-type load cells, Siemens control PLC for gate data, AI Data Processing Unit - NVIDIA Jetson Orin Nano, individual weight data to database, operator status indicator, eccentric load and movement zone - calibration data. Decision matrix: lower scale vs upper scale, packaging type, weighing system, LANAID adapter, filling selection, automatic mode selection. Network and control scheme: PLC → NVIDIA Jetson → Supervision PC → Database.",
      achievement: es
        ? "Logro: Transformación digital de empaque de agroindustria con IA en el edge."
        : "Achievement: Digital transformation of agro-industrial packing with AI at the edge.",
      tags: es
        ? ["NVIDIA Jetson Orin Nano", "PLC Siemens", "IA Edge", "Industria 4.0", "Celdas de Carga", "Automatización"]
        : ["NVIDIA Jetson Orin Nano", "Siemens PLC", "Edge AI", "Industry 4.0", "Load Cells", "Automation"],
    },
    {
      image: pesajeImg.url,
      title: es
        ? "JBM - Sistema de Pesaje y Llenado Neumático Inteligente - Caja de Plástico"
        : "JBM - Intelligent Pneumatic Weighing and Filling System - Plastic Crate",
      description: es
        ? "Diseño e implementación de sistema de tolva de recepción y pesaje con célula de carga (sensor de peso), flujo de fruta (limones) desde cinta transportadora superior de 4 vías, compuerta pivotante con actuador neumático lineal, lógica neumática (pulsar botón → válvula neumática → pistón/cilindro), escala digital 18.5 kg, lógica de activación de gatillo (posición cerrada/botón no pulsado vs posición abierta/botón pulsado), cascada de limones a caja de plástico. Sistema de pesaje manual con botón de activación. Documentación técnica isométrica."
        : "Design and implementation of a receiving hopper and weighing system with load cell (weight sensor), lime flow from a 4-lane upper conveyor, pivoting gate with linear pneumatic actuator, pneumatic logic (press button → pneumatic valve → piston/cylinder), 18.5 kg digital scale, trigger activation logic (closed position/button not pressed vs open position/button pressed), lime cascade into a plastic crate. Manual weighing system with activation button. Isometric technical documentation.",
      tags: es
        ? ["Celdas de Carga", "Neumática", "Automatización Industrial", "Diseño Mecatrónico"]
        : ["Load Cells", "Pneumatics", "Industrial Automation", "Mechatronic Design"],
    },
  ];

  const projects = [
    {
      id: 3,
      title: t('project1Title'),
      description: t('project1Description'),
      detailedDescription: t('project1DetailedDescription'),
      tags: ["GlobalGap", "Primus", t('skills')[8] || "Automation"],
      image: "./Lovable/uploads/empaque.jpg?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: t('project2Title'),
      description: t('project2Description'),
      detailedDescription: t('project2DetailedDescription'),
      tags: ["Odoo", "POS", "Training"],
      image: "./lovable-uploads/Odoo-POS.gif"
    },
    {
      id: 5,
      title: t('project3Title'),
      description: t('project3Description'),
      detailedDescription: t('project3DetailedDescription'),
      tags: ["Development", "Web App", "In Progress"],
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 6,
      title: t('project4Title'),
      description: t('project4Description'),
      detailedDescription: t('project4DetailedDescription'),
      tags: ["Logistics", "Optimization", "Analysis"],
      image: "./Lovable-uploads/route-optimization.jpg"
    },
    {
      id: 7,
      title: t('project5Title'),
      description: t('project5Description'),
      detailedDescription: t('project5DetailedDescription'),
      tags: ["Zoho", "Expenses", "Invoicing"],
      image: "./lovable-uploads/gastosdeviajemx.gif?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 8,
      title: t('project6Title'),
      description: t('project6Description'),
      detailedDescription: t('project6DetailedDescription'),
      tags: ["Web App", "Development", "Inventory"],
      image: "./lovable-uploads/control-produccion.gif?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30 dark:bg-slate-900/30 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-ocean-400/10 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-wave" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title animate-fade-in">{t('projectsTitle')}</h2>

        <div className="flex flex-wrap items-center gap-3 mt-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
            <Lock className="h-4 w-4" />
            {es
              ? "Proyecto Confidencial - Corporación Industrial Uruapan"
              : "Confidential Project - Corporación Industrial Uruapan"}
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Uruapan, Michoacán
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {jbmProjects.map((p, i) => (
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div 
                  className="project-card animate-fade-in cursor-pointer group hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    {project.id === 6 ? (
                      <video
                        src={routeVideo.url}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                      />
                    )}
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-2 py-1 bg-secondary dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-overlay">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4 opacity-90">{project.description}</p>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                      {t('moreDetails')} <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">{project.title}</DialogTitle>
                  <DialogDescription className="text-md mt-2">{project.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <Card>
                    <CardHeader className="p-0">
                      <div className="h-48 overflow-hidden rounded-t-lg">
                        {project.id === 6 ? (
                          <video
                            src={routeVideo.url}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-semibold mb-3">{t('projectDescription')}</h4>
                      <p>{project.detailedDescription}</p>

                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-3">{t('technologies')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} className="skill-badge">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="justify-end">
                      <Button variant="default" className="btn-gradient group">
                        {t('contactForMore')} <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </DialogContent>
            </Dialog>
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

export default Projects;
