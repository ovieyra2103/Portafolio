import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
const About = () => {
  const skills = ["Zoho Inventory", "Zoho Books", "Zoho Expenses", "Google Colab", "Power BI", "Microsoft Fabric", "GlobalGap", "Primus", "Automatización", "Optimización de Rutas", "Gestión de Viáticos", "Marketing con IA", "Consultoría"];
  return <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse-light" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-ocean-300/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 animate-fade-right">
            <div className="glass-card rounded-xl p-6 h-full">
              <p className="text-lg">
                Soy un ingeniero en desarrollo e innovación empresarial con experiencia en automatización 
                de procesos, implementación de herramientas tecnológicas y optimización de negocios.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Experiencia Profesional</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4 py-1">
                  <h4 className="font-medium text-primary">Hielo Polar del Centro</h4>
                  <p className="text-sm text-muted-foreground">Especialista en Inteligencia Financiera, Desarrollo de Negocios e Innovación Operativa con IA
                </p>
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
                <Button className="btn-gradient">
                  <FileText className="w-4 h-4 mr-2" />
                  Descargar CV
                </Button>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-left">
            <div className="glass-card rounded-xl p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Habilidades</h3>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => <Badge key={index} className="skill-badge">
                    {skill}
                  </Badge>)}
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
    </section>;
};
export default About;