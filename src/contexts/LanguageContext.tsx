
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Sobre Mí',
    projects: 'Proyectos',
    certifications: 'Certificaciones',
    contact: 'Contacto',
    
    // Hero section
    heroTitle: 'Estratega en Transformación Digital con enfoque en Finanzas, Innovación Comercial y Automatización Inteligente.',
    heroDescription1: 'Aplico inteligencia artificial y herramientas digitales para optimizar procesos, mejorar la rentabilidad y acelerar el crecimiento de negocios.',
    heroDescription2: 'Mi enfoque combina análisis financiero, visión de mercado y soluciones tecnológicas para transformar la operación de empresas en resultados medibles.',
    location: 'Acámbaro, Guanajuato, México',
    
    // About section
    aboutTitle: 'Sobre Mí',
    aboutText1: 'Soy un profesional con sólida experiencia en análisis financiero, desarrollo de negocios y marketing digital, especializado en la implementación de herramientas basadas en inteligencia artificial para mejorar la eficiencia operativa.',
    aboutText2: 'Mi objetivo es ayudar a empresas a crecer de manera estratégica, automatizando procesos clave y aprovechando al máximo los datos para tomar decisiones más inteligentes.',
    aboutText3: 'He liderado proyectos en industrias como alimentos, logística, tecnología y retail, creando soluciones que reducen costos, aumentan la productividad y fortalecen la presencia de marca.',
    experienceTitle: 'Experiencia Profesional',
    skillsTitle: 'Habilidades',
    servicesTitle: 'Servicios',
    downloadCV: 'Descargar CV Interactivo (PDF)',
    
    // Services
    service1Title: 'Optimización Financiera y de Procesos',
    service1Description: 'Análisis de costos, control de gastos, automatización contable y estrategias para mejorar la rentabilidad del negocio.',
    service2Title: 'Marketing Estratégico y Digital',
    service2Description: 'Diseño de campañas inteligentes, posicionamiento de marca y uso de herramientas de IA para generar contenido y captar clientes.',
    service3Title: 'Transformación Digital con IA',
    service3Description: 'Implementación de soluciones tecnológicas personalizadas para automatizar tareas repetitivas, mejorar flujos de trabajo y escalar operaciones.',
    
    // Contact
    contactTitle: 'Contacto',
    contactSubtitle: '¿Tienes un proyecto en mente?',
    contactDescription: 'Estoy disponible para consultoría, implementación de herramientas tecnológicas y automatización de procesos.',
    sendMessage: 'Envíame un mensaje',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    sendButton: 'Enviar mensaje',
    sending: 'Enviando...',
    
    // Certifications
    certificationsTitle: 'Cursos y Certificaciones',
    continuousUpdate: 'Actualización Continua',
    continuousUpdateDescription: 'Constantemente me mantengo actualizado en las últimas tecnologías y metodologías para ofrecer las mejores soluciones a mis clientes.',
    
    // Footer
    allRightsReserved: 'Todos los derechos reservados.',
    madeWith: 'Hecho con',
    in: 'en'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Me',
    projects: 'Projects',
    certifications: 'Certifications',
    contact: 'Contact',
    
    // Hero section
    heroTitle: 'Digital Transformation Strategist focused on Finance, Commercial Innovation and Intelligent Automation.',
    heroDescription1: 'I apply artificial intelligence and digital tools to optimize processes, improve profitability and accelerate business growth.',
    heroDescription2: 'My approach combines financial analysis, market vision and technological solutions to transform business operations into measurable results.',
    location: 'Acámbaro, Guanajuato, Mexico',
    
    // About section
    aboutTitle: 'About Me',
    aboutText1: 'I am a professional with solid experience in financial analysis, business development and digital marketing, specialized in implementing artificial intelligence-based tools to improve operational efficiency.',
    aboutText2: 'My goal is to help companies grow strategically, automating key processes and making the most of data to make smarter decisions.',
    aboutText3: 'I have led projects in industries such as food, logistics, technology and retail, creating solutions that reduce costs, increase productivity and strengthen brand presence.',
    experienceTitle: 'Professional Experience',
    skillsTitle: 'Skills',
    servicesTitle: 'Services',
    downloadCV: 'Download Interactive CV (PDF)',
    
    // Services
    service1Title: 'Financial and Process Optimization',
    service1Description: 'Cost analysis, expense control, accounting automation and strategies to improve business profitability.',
    service2Title: 'Strategic and Digital Marketing',
    service2Description: 'Intelligent campaign design, brand positioning and use of AI tools to generate content and attract customers.',
    service3Title: 'Digital Transformation with AI',
    service3Description: 'Implementation of personalized technological solutions to automate repetitive tasks, improve workflows and scale operations.',
    
    // Contact
    contactTitle: 'Contact',
    contactSubtitle: 'Do you have a project in mind?',
    contactDescription: 'I am available for consulting, implementation of technological tools and process automation.',
    sendMessage: 'Send me a message',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendButton: 'Send message',
    sending: 'Sending...',
    
    // Certifications
    certificationsTitle: 'Courses and Certifications',
    continuousUpdate: 'Continuous Update',
    continuousUpdateDescription: 'I constantly stay updated on the latest technologies and methodologies to offer the best solutions to my clients.',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
    madeWith: 'Made with',
    in: 'in'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
