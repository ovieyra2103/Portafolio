
import { Award, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Certifications = () => {
  const { t } = useLanguage();
  
  const certifications = [
    {
      id: 1,
      title: t('cert1Title'),
      description: t('cert1Description'),
      icon: "zoho",
      date: "2022"
    },
    {
      id: 2,
      title: t('cert2Title'),
      description: t('cert2Description'),
      icon: "google",
      date: "2021"
    },
    {
      id: 3,
      title: t('cert3Title'),
      description: t('cert3Description'),
      icon: "certificate",
      date: "2020"
    },
    {
      id: 4,
      title: t('cert4Title'),
      description: t('cert4Description'),
      icon: "marketing",
      date: "2023"
    },
    {
      id: 5,
      title: t('cert5Title'),
      description: t('cert5Description'),
      icon: "microsoft",
      date: "2023"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 w-80 h-80 bg-ocean-200/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('certificationsTitle')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="glass-card hover:shadow-md hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <div className="rounded-full p-2 bg-secondary dark:bg-slate-800">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardDescription>{cert.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
              </CardContent>
            </Card>
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
