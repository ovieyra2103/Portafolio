
import { ExternalLink } from "lucide-react";
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
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Automatización de Exportaciones",
      description: "Sistema que optimizó la certificación y trazabilidad del producto en empaque de limón.",
      detailedDescription: "Desarrollo e implementación de un sistema para la automatización de los procesos de certificación GlobalGap y Primus, mejorando la trazabilidad del producto y reduciendo el tiempo de procesamiento en un 40%.",
      tags: ["GlobalGap", "Primus", "Automatización"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Implementación de Odoo como POS",
      description: "Creación de un plan de capacitación para su uso en Hielo Polar del Centro.",
      detailedDescription: "Planificación e implementación de Odoo como sistema de punto de venta, incluyendo la creación de materiales de capacitación y entrenamiento al personal para optimizar las operaciones comerciales.",
      tags: ["Odoo", "Punto de Venta", "Capacitación"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Web App para Reparación de Celulares",
      description: "Sistema de gestión de reparaciones, inventario, marketplace y recargas telefónicas.",
      detailedDescription: "Desarrollo de una aplicación web integral para la gestión de reparaciones de celulares, control de inventario, marketplace de productos y servicio de recargas telefónicas, mejorando la eficiencia operativa y la experiencia del cliente.",
      tags: ["Desarrollo", "Web App", "En progreso"],
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Optimización de Rutas de Reparto",
      description: "Reducción de costos de combustible y mejora en tiempos de entrega en Hielo Polar del Centro.",
      detailedDescription: "Implementación de un sistema de optimización de rutas de reparto que permitió reducir los costos de combustible en un 25% y mejorar los tiempos de entrega en un 30%, aumentando la satisfacción del cliente y la eficiencia operativa.",
      tags: ["Logística", "Optimización", "Análisis"],
      image: "https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Implementación de GastosdeViaje.Mx",
      description: "Automatización de la gestión de viáticos y facturación electrónica en empresas.",
      detailedDescription: "Consultoría e implementación de la plataforma GastosdeViaje.Mx para la automatización de la gestión de viáticos y facturación electrónica, mejorando la eficiencia administrativa y reduciendo errores en el proceso de reembolso.",
      tags: ["Zoho", "Viáticos", "Facturación"],
      image: "./lovable-uploads/gastosdeviajemx.gif?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Desarrollo a medida para el control de producción",
      description: "Desarrollo e implementación de sistema para la gestión de producción.",
      detailedDescription: "Implementación de una web app que permite gestionar de forma ágil y precisa la producción y distribución interna en una fabrica de hielo, automatizando el flujo actual, generando datos en tiempo real.",
      tags: ["Web App", "Desarrollo", "Inventarios"],
      image: "./lovable-uploads/Produccion-Hielo.png?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Proyectos Destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div 
                  className="project-card animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-2 py-1 bg-secondary dark:bg-slate-800 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-overlay">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4 opacity-90">{project.description}</p>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                      Más detalles <ExternalLink className="ml-2 h-4 w-4" />
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
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-semibold mb-3">Descripción del Proyecto</h4>
                      <p>{project.detailedDescription}</p>

                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-3">Tecnologías</h4>
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
                      <Button variant="default" className="btn-gradient">
                        Contactar para más información <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
