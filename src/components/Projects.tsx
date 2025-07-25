
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
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop"
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
      image: "/src/assets/route-optimization.jpg"
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
    <section id="projects" className="py-20 bg-secondary/30 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('projectsTitle')}</h2>
        
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
                      <Button variant="default" className="btn-gradient">
                        {t('contactForMore')} <ExternalLink className="ml-2 h-4 w-4" />
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
