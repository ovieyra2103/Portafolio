
import { Award, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Certifications = () => {
  const { t, tArray } = useLanguage();
  
  const certificationCategories = [
    {
      category: t('certCategoryDigitalTransformation'),
      certs: tArray('certDigitalTransformation')
    },
    {
      category: t('certCategoryMarketing'),
      certs: tArray('certMarketing')
    },
    {
      category: t('certCategoryDevelopment'),
      certs: tArray('certDevelopment')
    },
    {
      category: t('certCategoryAnalytics'),
      certs: tArray('certAnalytics')
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 w-80 h-80 bg-ocean-200/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('certificationsTitle')}</h2>
        
        <div className="space-y-12 mt-12">
          {certificationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.15}s` }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.certs.map((cert, certIndex) => (
                  <Card 
                    key={certIndex}
                    className="glass-card hover:shadow-md hover:shadow-primary/10 transition-all duration-300 border-l-4 border-l-primary/50"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base leading-snug">{cert}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="inline-block glass-card max-w-md mx-auto p-6 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">{t('continuousUpdate')}</h3>
            </div>
            <p className="text-muted-foreground">
              {t('continuousUpdateDescription')}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
