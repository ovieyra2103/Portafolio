
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { generateInteractivePDF, getCVData } from "./CVGenerator";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const skills = ["Zoho Inventory", "Zoho Books", "Zoho Expenses", "Google Colab", "Power BI", "Microsoft Fabric", "GlobalGap", "Primus", "Automatización", "Optimización de Rutas", "Gestión de Viáticos", "Marketing con IA", "Consultoría"];
  
  const services = [
    {
      icon: "🔍",
      title: t('service1Title'),
      description: t('service1Description')
    },
    {
      icon: "📈",
      title: t('service2Title'),
      description: t('service2Description')
    },
    {
      icon: "🤖",
      title: t('service3Title'),
      description: t('service3Description')
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
        <h2 className="section-title">{t('aboutTitle')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 animate-fade-right">
            <div className="glass-card rounded-xl p-6 h-full">
              <p className="text-lg mb-4">
                {t('aboutText1')}
              </p>
              
              <p className="text-lg mb-4">
                {t('aboutText2')}
              </p>
              
              <p className="text-lg mb-6">
                {t('aboutText3')}
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">{t('experienceTitle')}</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">Especialista en Desarrollo de Negocios</h4>
                    <span className="text-xs text-muted-foreground">2023 - Presente</span>
                  </div>
                  <p className="text-sm font-medium mb-1">Hielo Polar del Centro</p>
                  <p className="text-sm text-muted-foreground">Liderando iniciativas de transformación digital e implementación de sistemas para optimizar operaciones. Desarrollo de estrategias de marketing y automatización de procesos administrativos.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">Fundador y Consultor Principal</h4>
                    <span className="text-xs text-muted-foreground">2024 - Presente</span>
                  </div>
                  <p className="text-sm font-medium mb-1">AI Nexus</p>
                  <p className="text-sm text-muted-foreground">Ofreciendo servicios de consultoría en tecnología, automatización y marketing inteligente para pequeñas y medianas empresas. Implementación de soluciones basadas en IA.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">Coordinador de procesos y exportaciones</h4>
                    <span className="text-xs text-muted-foreground">2022 - 2023</span>
                  </div>
                  <p className="text-sm font-medium mb-1">Empaque de limón</p>
                  <p className="text-sm text-muted-foreground">Gestión y optimización de procesos logísticos y de exportación. Implementación de sistemas de seguimiento y control de calidad.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">Business Development & Functional Consultant</h4>
                    <span className="text-xs text-muted-foreground">2020 - 2022</span>
                  </div>
                  <p className="text-sm font-medium mb-1">Focaltec - GastosdeViaje.Mx / PortalDeProveedores.Mx</p>
                  <p className="text-sm text-muted-foreground mb-2">📍 Mexico City (Remote and On-site)</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Presented product demos and onboarding sessions for clients in finance and procurement roles</li>
                    <li>Conducted requirement analysis to adapt solutions to clients' workflows</li>
                    <li>Managed post-implementation support and client satisfaction follow-ups</li>
                    <li>Collaborated with technical teams to automate accounting operations and integrate ERP systems</li>
                    <li>Supported digital invoicing (CFDI), tax compliance, and electronic payment modules</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">User Support Specialist</h4>
                    <span className="text-xs text-muted-foreground">2017 - 2019</span>
                  </div>
                  <p className="text-sm font-medium mb-1">Focaltec - GastosdeViaje.Mx / PortalDeProveedores.Mx</p>
                  <p className="text-sm text-muted-foreground mb-2">📍 Mexico City (Remote and On-site)</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Provided first- and second-level technical support for expense and accounting platforms</li>
                    <li>Assisted clients through tickets, phone calls, and live screen-sharing sessions</li>
                    <li>Diagnosed functional issues and offered clear solutions, escalating technical bugs as necessary</li>
                    <li>Created internal documentation: user guides, FAQs, help articles</li>
                    <li>Delivered personalized training to new users, focusing on accounting features and use cases</li>
                    <li>Explained financial processes and tax compliance logic to non-accountant users</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="btn-gradient" onClick={handleDownloadCV}>
                  <Download className="w-4 h-4 mr-2" />
                  {t('downloadCV')}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-left">
            <div className="glass-card rounded-xl p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">{t('skillsTitle')}</h3>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} className="skill-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-6">{t('servicesTitle')}</h3>
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
        <h2 className="text-2xl font-bold text-center mb-10">{t('servicesTitle')}</h2>
        
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
