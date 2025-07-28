
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { generateInteractivePDF, getCVData } from "./CVGenerator";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, tArray } = useLanguage();
  
  const skills = tArray('skills');
  
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
        title: t('generatingCV'),
        description: t('waitingCV'),
      });
      
      const cvData = getCVData();
      await generateInteractivePDF(cvData);
      
      toast({
        title: t('cvDownloaded'),
        description: t('cvDownloadedDesc'),
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: t('errorGeneratingCV'),
        description: t('errorGeneratingCVDesc'),
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
                    <h4 className="font-medium text-primary">{t('commercialOperationsCoordinator')}</h4>
                    <span className="text-xs text-muted-foreground">Feb 2024 - {t('presentTime')}</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{t('hieloPolarStage2')}</p>
                  <p className="text-sm text-muted-foreground">{t('hieloPolarStage2Description')}</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">{t('digitalTransformationConsultant')}</h4>
                    <span className="text-xs text-muted-foreground">Nov 2022 - Oct 2023</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{t('jbmLimones')}</p>
                  <p className="text-sm text-muted-foreground">{t('jbmLimonesDescription')}</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">{t('marketingDataAnalyst')}</h4>
                    <span className="text-xs text-muted-foreground">Feb 2022 - Nov 2022</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{t('operadoraPurepecha')}</p>
                  <p className="text-sm text-muted-foreground">{t('operadoraPurepechaDescription')}</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">{t('businessDevelopmentManager')}</h4>
                    <span className="text-xs text-muted-foreground">Apr 2019 - Apr 2021</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{t('focaltecSapi')}</p>
                  <p className="text-sm text-muted-foreground">{t('focaltecManagerDescription')}</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">{t('supportSpecialist')}</h4>
                    <span className="text-xs text-muted-foreground">Jun 2017 - Apr 2019</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{t('focaltecSapi')}</p>
                  <p className="text-sm text-muted-foreground">{t('focaltecSupportDescription')}</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">{t('supervisor')}</h4>
                    <span className="text-xs text-muted-foreground">Jun 2016 - Aug 2016</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{t('oportun')}</p>
                  <p className="text-sm text-muted-foreground">{t('oportunDescription')}</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">{t('expansionStrategyDeveloper')}</h4>
                    <span className="text-xs text-muted-foreground">Apr 2015 - Aug 2015</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{t('hieloPolarExpansion')}</p>
                  <p className="text-sm text-muted-foreground">{t('expansionDescription')}</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">{t('purchasingManager')}</h4>
                    <span className="text-xs text-muted-foreground">Jun 2010 - Mar 2015</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{t('importadoraCableCell')}</p>
                  <p className="text-sm text-muted-foreground">{t('purchasingDescription')}</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">{t('mainTeller')}</h4>
                    <span className="text-xs text-muted-foreground">Sep 2008 - Apr 2010</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{t('scotiaBank')}</p>
                  <p className="text-sm text-muted-foreground">{t('bankTellerDescription')}</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-primary">{t('electricalAssemblyCoach')}</h4>
                    <span className="text-xs text-muted-foreground">Jun 2007 - Feb 2008</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{t('bombardier')}</p>
                  <p className="text-sm text-muted-foreground">{t('bombardierDescription')}</p>
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
              
              <h3 className="text-xl font-semibold mt-8 mb-4">{t('projectInDevelopment')}</h3>
              <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-lg">
                <h4 className="font-medium text-primary">{t('aiNexus')}</h4>
                <p className="text-sm">{t('exp2Description')}</p>
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
