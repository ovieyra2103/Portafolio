
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Linkedin, MessageSquare } from "lucide-react";
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
    <section id="contact" className="py-20 bg-ocean-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('contactTitle')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="lg:order-2 animate-fade-left">
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="bg-primary p-6 text-white">
                <h3 className="text-2xl font-bold">{t('contactSubtitle')}</h3>
                <p className="mt-2 opacity-90">
                  {t('contactDescription')}
                </p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">{t('email')}</h4>
                    <a href="mailto:omarvieyra@hotmail.com" className="text-foreground hover:text-primary transition-colors">
                      omarvieyra@hotmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Teléfono</h4>
                    <a href="tel:+524171308050" className="text-foreground hover:text-primary transition-colors">
                      +52 (417) 130-8050
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">LinkedIn</h4>
                    <a href="#" className="text-foreground hover:text-primary transition-colors">
                      Omar Vieyra
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-right">
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                {t('sendMessage')}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t('name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('name')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
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
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
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
                  />
                </div>
                
                <Button type="submit" className="w-full btn-gradient" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('sending')}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> {t('sendButton')}
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
