
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
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      title: t('project1Title'),
      description: t('project1Description'),
      detailedDescription: t('project1DetailedDescription'),
      tags: ["GlobalGap", "Primus", t('skills')[8] || "Automation"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: t('project2Title'),
      description: t('project2Description'),
      detailedDescription: t('project2DetailedDescription'),
      tags: ["Odoo", "POS", "Training"],
      image: "./lovable-uploads/Odoo-POS.gif"
    },
    {
      id: 3,
      title: t('project3Title'),
      description: t('project3Description'),
      detailedDescription: t('project3DetailedDescription'),
      tags: ["Development", "Web App", "In Progress"],
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: t('project4Title'),
      description: t('project4Description'),
      detailedDescription: t('project4DetailedDescription'),
      tags: ["Logistics", "Optimization", "Analysis"],
      image: "./Lovable-uploads/route-optimization.jpg"
    },
    {
      id: 5,
      title: t('project5Title'),
      description: t('project5Description'),
      detailedDescription: t('project5DetailedDescription'),
      tags: ["Zoho", "Expenses", "Invoicing"],
      image: "./lovable-uploads/gastosdeviajemx.gif?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 6,
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div 
                  className="project-card animate-fade-in cursor-pointer group hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />
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
    </section>
  );
};

export default Projects;
