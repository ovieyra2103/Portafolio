
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => any[];
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
    certificationsTitle: 'Certificaciones y Formación Profesional',
    continuousUpdate: 'Actualización Continua',
    continuousUpdateDescription: 'Constantemente me mantengo actualizado en las últimas tecnologías y metodologías para ofrecer las mejores soluciones a mis clientes.',
    
    certCategoryDigitalTransformation: 'Transformación Digital y Estrategia Comercial',
    certDigitalTransformation: [
      { title: 'Transformación Digital para el Empleo', pdf: '/lovable-uploads/certificado la Transformación Digital Para El Empleo.pdf' },
      { title: 'Digitalización Comercial - Google My Business y YouTube', pdf: '/lovable-uploads/certificado_digitalizació_comercial.pdf' },
      { title: 'Tu Negocio en Internet', pdf: '/lovable-uploads/certificado-tunegocio-en-internet.pdf' }
    ],
    
    certCategoryMarketing: 'Marketing y Analítica Digital',
    certMarketing: [
      { title: 'Fundamentos de Marketing Digital (Google)', pdf: '/lovable-uploads/certificado_marketing_digital.pdf' },
      { title: 'Google Analytics para Principiantes', pdf: '/lovable-uploads/Course_Certificate.pdf' },
      { title: 'Google Analytics Avanzado', pdf: '/lovable-uploads/Course_Certificate_Google_Advanced .pdf' }
    ],
    
    certCategoryDevelopment: 'Desarrollo Tecnológico',
    certDevelopment: [
      { title: 'Diplomado en Desarrollo Web y Aplicaciones Móviles (726 horas)', pdf: '/lovable-uploads/Diplomado-desarrolloweb-y-apps-moviles.pdf' },
      { title: 'Certificación de Desarrollador Back-end', pdf: '/lovable-uploads/Certificado-desarrollador-back-end.pdf' },
      { title: 'Certificación de Desarrollador Front-end', pdf: '/lovable-uploads/Certificado-desarrollador-front-end.pdf' },
      { title: 'Certificación de Desarrollador de Aplicaciones Móviles', pdf: '/lovable-uploads/Certificado-desarrollador-apps-moviles.pdf' },
      { title: 'Programación Orientada a Objetos', pdf: '/lovable-uploads/certificado-programador-orientado-objetos.pdf' }
    ],
    
    certCategoryAnalytics: 'Analítica Avanzada y Certificaciones Internacionales',
    certAnalytics: [
      { title: 'SAS Visual Business Analytics Professional Certificate (Coursera)', pdf: '/lovable-uploads/Coursera TQFDA7DUKFMH.pdf' }
    ],
    
    // Skills
    skills: ['Python', 'JavaScript', 'SQL', 'Power BI DAX / Power Query', 'Odoo ERP', 'APIs / ETL', 'OpenAI / Claude APIs', 'Power Automate', 'n8n', 'NVIDIA Jetson Orin Nano', 'PLC Siemens', 'Celdas de Carga'],
    
    // Experience
    commercialOperationsCoordinator: 'Coordinador de Operaciones Comerciales y Finanzas',
    digitalTransformationConsultant: 'Consultor de Reingeniería y Transformación Digital',
    marketingDataAnalyst: 'Analista de Datos de Marketing',
    businessDevelopmentManager: 'Gerente de Desarrollo de Negocios',
    supportSpecialist: 'Especialista de Soporte',
    supervisor: 'Supervisor',
    expansionStrategyDeveloper: 'Desarrollador de Estrategia de Expansión',
    purchasingManager: 'Gerente de Compras',
    mainTeller: 'Cajero Principal',
    electricalAssemblyCoach: 'Coach de Ensamblaje Eléctrico',
    businessDevelopmentSpecialist: 'Especialista en Desarrollo de Negocios',
    presentTime: 'Presente',
    founderAndConsultant: 'Fundador y Consultor Principal',
    processCoordinator: 'Coordinador de procesos y exportaciones',
    businessConsultant: 'Business Development & Functional Consultant',
    userSupportSpecialist: 'User Support Specialist',
    
    // Companies
    hieloPolarStage2: 'Hielo Polar del Centro (Etapa 2)',
    jbmLimones: 'JBM LIMONES SPR DE RL DE CV',
    operadoraPurepecha: 'Operadora de servicios turísticos gastronómicos e industriales Purépecha SA de CV',
    focaltecSapi: 'Focaltec SAPI de CV',
    oportun: 'Oportun',
    hieloPolarExpansion: 'Hielo Polar del Centro',
    importadoraCableCell: 'Importadora Cable-Cell',
    scotiaBank: 'Scotia Bank Inverlat',
    bombardier: 'Bombardier Aerospace México',
    hieloPolar: 'Hielo Polar del Centro',
    aiNexus: 'AI Nexus',
    lemonPacking: 'Empaque de limón',
    focaltec: 'Focaltec - GastosdeViaje.Mx / PortalDeProveedores.Mx',
    
    // Experience descriptions
    hieloPolarStage2Description: 'Coordinador de Operaciones y Finanzas enfocado en la mejora de procesos y la adopción por parte del usuario. Optimicé rutas y costos logísticos, aumentando la eficiencia y apoyando a los equipos operativos durante el cambio.',
    jbmLimonesDescription: 'Consultor de Transformación Digital, especializado en optimización de procesos e implementación de tecnología con un fuerte enfoque centrado en el usuario. Rediseñé y optimicé procesos operativos, aumentando significativamente la eficiencia y reduciendo costos.',
    operadoraPurepechaDescription: 'Analista de Datos de Marketing, responsable de gestionar y analizar datos de marketing. Aproveché herramientas de IA para proporcionar información valiosa sobre el comportamiento del cliente y las tendencias del mercado.',
    focaltecManagerDescription: 'Realicé demostraciones de sistemas y recopilé requisitos detallados para implementaciones de nuevos clientes. Desarrollé propuestas comerciales convincentes y gestioné el seguimiento postventa para garantizar la satisfacción del cliente.',
    focaltecSupportDescription: 'Brindé soporte técnico directo a usuarios para productos que incluyen gastosdeviaje.mx y portaldeproveedores.mx, resolviendo y clasificando tickets (Nivel 1 y Nivel 2) siguiendo principios ITIL.',
    oportunDescription: 'Supervisor Bilingüe de Atención al Cliente (CCPOC), brindando servicio directo al cliente y gestionando el seguimiento de transacciones para una empresa con sede en EE. UU.',
    expansionDescription: 'Desarrollador de Estrategia de Expansión, creando estrategias de expansión detalladas y supervisando su implementación.',
    purchasingDescription: 'Gerente de Compras y Especialista en Relaciones con Clientes, gestionando el proceso de importación de accesorios para teléfonos celulares.',
    bankTellerDescription: 'Especialista en Servicio al Cliente y Operaciones, responsable del servicio integral al cliente, gestión de bóveda y conciliación de caja.',
    bombardierDescription: 'Coach de Ensamblaje Eléctrico, gestionando y guiando a un equipo responsable del ensamblaje de arneses aeroespaciales.',
    exp1Description: 'Liderando iniciativas de transformación digital e implementación de sistemas para optimizar operaciones. Desarrollo de estrategias de marketing y automatización de procesos administrativos.',
    exp2Description: 'Ofreciendo servicios de consultoría en tecnología, automatización y marketing inteligente para pequeñas y medianas empresas. Implementación de soluciones basadas en IA.',
    exp3Description: 'Gestión y optimización de procesos logísticos y de exportación. Implementación de sistemas de seguimiento y control de calidad.',
    
    // Focaltec experience details
    focaltecLocation: '📍 Ciudad de México (Remoto y Presencial)',
    focaltecConsultantTasks: [
      'Presentación de demos de productos y sesiones de incorporación para clientes en finanzas y compras',
      'Análisis de requerimientos para adaptar soluciones a los flujos de trabajo de los clientes',
      'Gestión de soporte post-implementación y seguimiento de satisfacción del cliente',
      'Colaboración con equipos técnicos para automatizar operaciones contables e integrar sistemas ERP',
      'Soporte para facturación digital (CFDI), cumplimiento fiscal y módulos de pagos electrónicos'
    ],
    focaltecSupportTasks: [
      'Soporte técnico de primer y segundo nivel para plataformas de gastos y contabilidad',
      'Asistencia a clientes a través de tickets, llamadas telefónicas y sesiones de pantalla compartida en vivo',
      'Diagnóstico de problemas funcionales y oferta de soluciones claras, escalando errores técnicos según fuera necesario',
      'Creación de documentación interna: guías de usuario, preguntas frecuentes, artículos de ayuda',
      'Entrenamiento personalizado a nuevos usuarios, enfocándose en características contables y casos de uso',
      'Explicación de procesos financieros y lógica de cumplimiento fiscal a usuarios no contadores'
    ],
    
    // Toast messages
    generatingCV: 'Generando CV...',
    waitingCV: 'Por favor espera mientras se genera tu CV interactivo',
    cvDownloaded: '¡CV descargado exitosamente!',
    cvDownloadedDesc: 'Tu CV interactivo en PDF se ha generado con códigos QR y enlaces clickeables',
    errorGeneratingCV: 'Error al generar CV',
    errorGeneratingCVDesc: 'Hubo un problema generando el PDF. Intenta nuevamente.',
    
    // Projects
    projectsTitle: 'Proyectos Destacados',
    projectInDevelopment: 'Proyecto en Desarrollo',
    moreDetails: 'Más detalles',
    projectDescription: 'Descripción del Proyecto',
    technologies: 'Tecnologías',
    contactForMore: 'Contactar para más información',
    
    // Project data
    project1Title: 'Automatización de Exportaciones',
    project1Description: 'Sistema que optimizó la certificación y trazabilidad del producto en empaque de limón.',
    project1DetailedDescription: 'Desarrollo e implementación de un sistema para la automatización de los procesos de certificación GlobalGap y Primus, mejorando la trazabilidad del producto y reduciendo el tiempo de procesamiento en un 40%.',
    
    project2Title: 'Implementación de Odoo como POS',
    project2Description: 'Creación de un plan de capacitación para su uso en Hielo Polar del Centro.',
    project2DetailedDescription: 'Planificación e implementación de Odoo como sistema de punto de venta, incluyendo la creación de materiales de capacitación y entrenamiento al personal para optimizar las operaciones comerciales.',
    
    project3Title: 'Web App para Reparación de Celulares',
    project3Description: 'Sistema de gestión de reparaciones, inventario, marketplace y recargas telefónicas.',
    project3DetailedDescription: 'Desarrollo de una aplicación web integral para la gestión de reparaciones de celulares, control de inventario, marketplace de productos y servicio de recargas telefónicas, mejorando la eficiencia operativa y la experiencia del cliente.',
    
    project4Title: 'Optimización de Rutas de Reparto',
    project4Description: 'Reducción de costos de combustible y mejora en tiempos de entrega en Hielo Polar del Centro.',
    project4DetailedDescription: 'Implementación de un sistema de optimización de rutas de reparto que permitió reducir los costos de combustible en un 25% y mejorar los tiempos de entrega en un 30%, aumentando la satisfacción del cliente y la eficiencia operativa.',
    
    project5Title: 'Implementación de GastosdeViaje.Mx',
    project5Description: 'Automatización de la gestión de viáticos y facturación electrónica en empresas.',
    project5DetailedDescription: 'Consultoría e implementación de la plataforma GastosdeViaje.Mx para la automatización de la gestión de viáticos y facturación electrónica, mejorando la eficiencia administrativa y reduciendo errores en el proceso de reembolso.',
    
    project6Title: 'Desarrollo a medida para el control de producción',
    project6Description: 'Desarrollo e implementación de sistema para la gestión de producción.',
    project6DetailedDescription: 'Implementación de una web app que permite gestionar de forma ágil y precisa la producción y distribución interna en una fabrica de hielo, automatizando el flujo actual, generando datos en tiempo real.',
    
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
    certificationsTitle: 'Professional Certifications and Training',
    continuousUpdate: 'Continuous Update',
    continuousUpdateDescription: 'I constantly stay updated on the latest technologies and methodologies to offer the best solutions to my clients.',
    
    certCategoryDigitalTransformation: 'Digital Transformation and Commercial Strategy',
    certDigitalTransformation: [
      { title: 'Digital Transformation for Employment', pdf: '/lovable-uploads/certificado la Transformación Digital Para El Empleo.pdf' },
      { title: 'Commercial Digitalization - Google My Business and YouTube', pdf: '/lovable-uploads/certificado_digitalizació_comercial.pdf' },
      { title: 'Your Business on the Internet', pdf: '/lovable-uploads/certificado-tunegocio-en-internet.pdf' }
    ],
    
    certCategoryMarketing: 'Marketing and Digital Analytics',
    certMarketing: [
      { title: 'Fundamentals of Digital Marketing (Google)', pdf: '/lovable-uploads/certificado_marketing_digital.pdf' },
      { title: 'Google Analytics for Beginners', pdf: '/lovable-uploads/Course_Certificate.pdf' },
      { title: 'Advanced Google Analytics', pdf: '/lovable-uploads/Course_Certificate_Google_Advanced .pdf' }
    ],
    
    certCategoryDevelopment: 'Technological Development',
    certDevelopment: [
      { title: 'Diploma in Web Development and Mobile Applications (726 hours)', pdf: '/lovable-uploads/Diplomado-desarrolloweb-y-apps-moviles.pdf' },
      { title: 'Back-end Developer Certification', pdf: '/lovable-uploads/Certificado-desarrollador-back-end.pdf' },
      { title: 'Front-end Developer Certification', pdf: '/lovable-uploads/Certificado-desarrollador-front-end.pdf' },
      { title: 'Mobile Application Developer Certification', pdf: '/lovable-uploads/Certificado-desarrollador-apps-moviles.pdf' },
      { title: 'Object-Oriented Programming', pdf: '/lovable-uploads/certificado-programador-orientado-objetos.pdf' }
    ],
    
    certCategoryAnalytics: 'Advanced Analytics and International Certifications',
    certAnalytics: [
      { title: 'SAS Visual Business Analytics Professional Certificate (Coursera)', pdf: '/lovable-uploads/Coursera TQFDA7DUKFMH.pdf' }
    ],
    
    // Skills
    skills: ['Python', 'JavaScript', 'SQL', 'Power BI DAX / Power Query', 'Odoo ERP', 'APIs / ETL', 'OpenAI / Claude APIs', 'Power Automate', 'n8n', 'NVIDIA Jetson Orin Nano', 'Siemens PLC', 'Load Cells'],
    
    // Experience
    commercialOperationsCoordinator: 'Commercial Operations and Finance Coordinator',
    digitalTransformationConsultant: 'Reengineering and Digital Transformation Consultant',
    marketingDataAnalyst: 'Marketing Data Analyst',
    businessDevelopmentManager: 'Business Development Manager',
    supportSpecialist: 'Support Specialist',
    supervisor: 'Supervisor',
    expansionStrategyDeveloper: 'Expansion Strategy Developer',
    purchasingManager: 'Purchasing Manager',
    mainTeller: 'Main Teller',
    electricalAssemblyCoach: 'Electrical Assembly Coach',
    presentTime: 'Present',
    
    // Companies
    hieloPolarStage2: 'Hielo Polar del Centro (Stage 2)',
    jbmLimones: 'JBM LIMONES SPR DE RL DE CV',
    operadoraPurepecha: 'Operadora de servicios turísticos gastronómicos e industriales Purépecha SA de CV',
    focaltecSapi: 'Focaltec SAPI de CV',
    oportun: 'Oportun',
    hieloPolarExpansion: 'Hielo Polar del Centro',
    importadoraCableCell: 'Importadora Cable-Cell',
    scotiaBank: 'Scotia Bank Inverlat',
    bombardier: 'Bombardier Aerospace México',
    
    // Experience descriptions
    hieloPolarStage2Description: 'Operations & Finance Coordinator with a focus on process improvement and user adoption. Optimized logistics routes and costs, leading to increased efficiency and supporting operational teams through change.',
    jbmLimonesDescription: 'Digital Transformation Consultant, specializing in process optimization and technology implementation with a strong user-centric approach. Redesigned and optimized operational processes, significantly increasing efficiency and reducing costs.',
    operadoraPurepechaDescription: 'Marketing Data Analyst, responsible for managing and analyzing marketing data. Leveraged AI tools to provide valuable insights into customer behavior and market trends.',
    focaltecManagerDescription: 'Conducted system demonstrations and gathered detailed requirements for new client implementations. Developed compelling commercial proposals and managed post-sales follow-up to ensure client satisfaction.',
    focaltecSupportDescription: 'Provided direct technical support to users for products including gastosdeviaje.mx and portaldeproveedores.mx, resolving and classifying tickets (Tier 1 and Tier 2) following ITIL principles.',
    oportunDescription: 'Bilingual Customer Support Supervisor (CCPOC), providing direct customer service and managing transaction follow-ups for a US-based company.',
    expansionDescription: 'Expansion Strategy Developer, creating detailed expansion strategies and supervising their implementation.',
    purchasingDescription: 'Purchasing Manager & Client Relationship Specialist, managing the import process for cell phone accessories.',
    bankTellerDescription: 'Customer Service & Operations Specialist, responsible for comprehensive customer service, vault management, and teller reconciliation.',
    bombardierDescription: 'Electrical Assembly Coach, managing and guiding a team responsible for the assembly of aerospace harnesses.',
    
    // Focaltec experience details
    focaltecLocation: '📍 Mexico City (Remote and On-site)',
    focaltecConsultantTasks: [
      'Presented product demos and onboarding sessions for clients in finance and procurement roles',
      'Conducted requirement analysis to adapt solutions to clients\' workflows',
      'Managed post-implementation support and client satisfaction follow-ups',
      'Collaborated with technical teams to automate accounting operations and integrate ERP systems',
      'Supported digital invoicing (CFDI), tax compliance, and electronic payment modules'
    ],
    focaltecSupportTasks: [
      'Provided first- and second-level technical support for expense and accounting platforms',
      'Assisted clients through tickets, phone calls, and live screen-sharing sessions',
      'Diagnosed functional issues and offered clear solutions, escalating technical bugs as necessary',
      'Created internal documentation: user guides, FAQs, help articles',
      'Delivered personalized training to new users, focusing on accounting features and use cases',
      'Explained financial processes and tax compliance logic to non-accountant users'
    ],
    
    // Toast messages
    generatingCV: 'Generating CV...',
    waitingCV: 'Please wait while your interactive CV is being generated',
    cvDownloaded: 'CV downloaded successfully!',
    cvDownloadedDesc: 'Your interactive PDF CV has been generated with QR codes and clickable links',
    errorGeneratingCV: 'Error generating CV',
    errorGeneratingCVDesc: 'There was a problem generating the PDF. Please try again.',
    
    // Projects
    projectsTitle: 'Featured Projects',
    projectInDevelopment: 'Project in Development',
    moreDetails: 'More details',
    projectDescription: 'Project Description',
    technologies: 'Technologies',
    contactForMore: 'Contact for more information',
    
    // Project data
    project1Title: 'Export Automation',
    project1Description: 'System that optimized certification and product traceability in lemon packing.',
    project1DetailedDescription: 'Development and implementation of a system for automating GlobalGap and Primus certification processes, improving product traceability and reducing processing time by 40%.',
    
    project2Title: 'Odoo POS Implementation',
    project2Description: 'Creation of a training plan for its use at Hielo Polar del Centro.',
    project2DetailedDescription: 'Planning and implementation of Odoo as a point of sale system, including the creation of training materials and staff training to optimize business operations.',
    
    project3Title: 'Cell Phone Repair Web App',
    project3Description: 'Repair management system, inventory, marketplace and phone top-ups.',
    project3DetailedDescription: 'Development of a comprehensive web application for cell phone repair management, inventory control, product marketplace and phone top-up service, improving operational efficiency and customer experience.',
    
    project4Title: 'Delivery Route Optimization',
    project4Description: 'Fuel cost reduction and delivery time improvement at Hielo Polar del Centro.',
    project4DetailedDescription: 'Implementation of a delivery route optimization system that reduced fuel costs by 25% and improved delivery times by 30%, increasing customer satisfaction and operational efficiency.',
    
    project5Title: 'GastosdeViaje.Mx Implementation',
    project5Description: 'Automation of travel expense management and electronic invoicing in companies.',
    project5DetailedDescription: 'Consulting and implementation of the GastosdeViaje.Mx platform for automating travel expense management and electronic invoicing, improving administrative efficiency and reducing errors in the reimbursement process.',
    
    project6Title: 'Custom Production Control Development',
    project6Description: 'Development and implementation of production management system.',
    project6DetailedDescription: 'Implementation of a web app that allows agile and precise management of production and internal distribution in an ice factory, automating the current workflow, generating real-time data.',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
    madeWith: 'Made with',
    in: 'in'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');
  
  const t = (key: string): string => {
    const value = translations[language][key as keyof typeof translations[Language]];
    return Array.isArray(value) ? key : value || key;
  };
  
  const tArray = (key: string): any[] => {
    const value = translations[language][key as keyof typeof translations[Language]];
    return Array.isArray(value) ? value : [];
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
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
