
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { generateInteractivePDF, getCVData } from "./CVGenerator";

const About = () => {
  const skills = ["Zoho Inventory", "Zoho Books", "Zoho Expenses", "Google Colab", "Power BI", "Microsoft Fabric", "GlobalGap", "Primus", "Automatización", "Optimización de Rutas", "Gestión de Viáticos", "Marketing con IA", "Consultoría"];
  
  const services = [
    {
      icon: "🔍",
      title: "Optimización Financiera y de Procesos",
      description: "Análisis de costos, control de gastos, automatización contable y estrategias para mejorar la rentabilidad del negocio."
    },
    {
      icon: "📈",
      title: "Marketing Estratégico y Digital",
      description: "Diseño de campañas inteligentes, posicionamiento de marca y uso de herramientas de IA para generar contenido y captar clientes."
    },
    {
      icon: "🤖",
      title: "Transformación Digital con IA",
      description: "Implementación de soluciones tecnológicas personalizadas para automatizar tareas repetitivas, mejorar flujos de trabajo y escalar operaciones."
    }
  ];
  
  const handleDownloadCV = async () => {
    try {
      toast({
        title: "Generando CV...",
        description: "Por favor espera mientras se genera tu CV interactivo",
      });
      
      const cvData = getCVData();
      await generateInteractivePDF(cvData);
      
      toast({
        title: "¡CV descargado exitosamente!",
        description: "Tu CV interactivo en PDF se ha generado con códigos QR y enlaces clickeables",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error al generar CV",
        description: "Hubo un problema generando el PDF. Intenta nuevamente.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse-light" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-ocean-300/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 animate-fade-right">
            <div className="glass-card rounded-xl p-6 h-full">
              <p className="text-lg mb-4">
                Soy un profesional con sólida experiencia en análisis financiero, desarrollo de negocios y marketing digital, especializado en la implementación de herramientas basadas en inteligencia artificial para mejorar la eficiencia operativa.
              </p>
              
              <p className="text-lg mb-4">
                Mi objetivo es ayudar a empresas a crecer de manera estratégica, automatizando procesos clave y aprovechando al máximo los datos para tomar decisiones más inteligentes.
              </p>
              
              <p className="text-lg mb-6">
                He liderado proyectos en industrias como alimentos, logística, tecnología y retail, creando soluciones que reducen costos, aumentan la productividad y fortalecen la presencia de marca.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Experiencia Profesional</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4 py-1">
                  <h4 className="font-medium text-primary">Hielo Polar del Centro</h4>
                  <p className="text-sm text-muted-foreground">Especialista en Inteligencia Financiera, Desarrollo de Negocios e Innovación Operativa con IA</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-1">
                  <h4 className="font-medium text-primary">Focaltec (GastosdeViaje.Mx)</h4>
                  <p className="text-sm text-muted-foreground">Consultoría en herramientas tecnológicas</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-1">
                  <h4 className="font-medium text-primary">Empaque de Limón</h4>
                  <p className="text-sm text-muted-foreground">Automatización de exportaciones y certificaciones GlobalGap y Primus</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="btn-gradient" onClick={handleDownloadCV}>
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CV Interactivo (PDF)
                </Button>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-left">
            <div className="glass-card rounded-xl p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Habilidades</h3>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} className="skill-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-6">Servicios</h3>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{service.icon}</span>
                      <h4 className="font-medium text-primary">{service.title}</h4>
                    </div>
                    <p className="text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Proyecto en Desarrollo</h3>
              <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-lg">
                <h4 className="font-medium text-primary">AI Nexus</h4>
                <p className="text-sm">Soluciones Tecnológicas y Marketing Inteligente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-2xl font-bold text-center mb-10">Mis Servicios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-none shadow-md">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-primary">{service.title}</h3>
              <p className="text-center text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
