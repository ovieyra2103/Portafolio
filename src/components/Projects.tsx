
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Automatización de Exportaciones",
      description: "Sistema que optimizó la certificación y trazabilidad del producto en empaque de limón.",
      tags: ["GlobalGap", "Primus", "Automatización"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Implementación de Odoo como POS",
      description: "Creación de un plan de capacitación para su uso en Hielo Polar del Centro.",
      tags: ["Odoo", "Punto de Venta", "Capacitación"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Web App para Reparación de Celulares",
      description: "Sistema de gestión de reparaciones, inventario, marketplace y recargas telefónicas.",
      tags: ["Desarrollo", "Web App", "En progreso"],
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Optimización de Rutas de Reparto",
      description: "Reducción de costos de combustible y mejora en tiempos de entrega en Hielo Polar del Centro.",
      tags: ["Logística", "Optimización", "Análisis"],
      image: "https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Implementación de GastosdeViaje.Mx",
      description: "Automatización de la gestión de viáticos y facturación electrónica en empresas.",
      tags: ["Zoho", "Viáticos", "Facturación"],
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Proyectos Destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card animate-fade-in"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
