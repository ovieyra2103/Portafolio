
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé a la brevedad.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-ocean-50/50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-ocean-300/10 rounded-full filter blur-3xl animate-wave" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title animate-fade-in">{t('contactTitle')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="lg:order-2 animate-fade-left">
            <div className="glass-card rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group">
              <div className="bg-gradient-to-r from-primary to-ocean-400 p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                <h3 className="text-2xl font-bold relative z-10">{t('contactSubtitle')}</h3>
                <p className="mt-2 opacity-90 relative z-10">
                  {t('contactDescription')}
                </p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center group/item hover:bg-primary/5 p-2 rounded-lg transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">{t('email')}</h4>
                    <a href="mailto:omarvieyra@hotmail.com" className="text-foreground hover:text-primary transition-colors">
                      omarvieyra@hotmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group/item hover:bg-primary/5 p-2 rounded-lg transition-all duration-300">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover/item:scale-110 transition-transform duration-300">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/ovieyra" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      Omar Vieyra
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-right">
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-6 flex items-center text-primary">
                <MessageSquare className="mr-2 h-5 w-5 animate-bounce-slow" />
                {t('sendMessage')}
              </h3>
              
              <div className="space-y-4">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                    {t('name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('name')}
                    required
                    className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/20"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                    {t('email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/20"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                    {t('message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto o consulta"
                    rows={5}
                    required
                    className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/20"
                  />
                </div>
                
                <Button type="submit" className="w-full btn-gradient group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('sending')}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> {t('sendButton')}
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
