
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
    aboutText1: 'Especialista en transformación digital, automatización con IA y estrategia comercial para empresas de alimentos, logística y retail, con 10+ años de experiencia.',
    aboutText2: 'Implemento soluciones que reducen costos operativos, automatizan procesos administrativos y aceleran el crecimiento del negocio.',
    aboutText3: '',
    experienceTitle: 'Experiencia Profesional',
    skillsTitle: 'Habilidades',
    servicesTitle: 'Servicios',
    downloadCV: 'Descargar CV (PDF)',
    
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
    skills: ['Zoho Inventory', 'Zoho Books', 'Zoho Expenses', 'Google Colab', 'Power BI', 'Microsoft Fabric', 'GlobalGap', 'Primus', 'Automatización', 'Optimización de Rutas', 'Gestión de Viáticos', 'Marketing con IA', 'Consultoría'],
    
    // Experience
    commercialOperationsCoordinator: 'Coordinador de Operaciones Comerciales y Finanzas',
    digitalTransformationConsultant: 'Consultor de Reingeniería y Transformación Digital',
    marketingDataAnalyst: 'Analista de Datos de Marketing',
    businessDevelopmentManager: 'Gerente de Desarrollo de Negocios',
    supportSpecialist: 'Especialista de Soporte',
    supervisor: 'Supervisor',
    expansionStrategyDeveloper: 'Estratega de Expansión',
    purchasingManager: 'Gerente de Compras',
    mainTeller: 'Cajero / Analista de Operaciones',
    electricalAssemblyCoach: 'Supervisor de Ensamblaje Eléctrico',
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
    scotiaBank: 'Scotiabank Inverlat',
    bombardier: 'Bombardier Aerospace México',
    hieloPolar: 'Hielo Polar del Centro',
    aiNexus: 'AI Nexus',
    lemonPacking: 'Empaque de limón',
    focaltec: 'Focaltec - Gastos de Viaje / Portal de Proveedores',
    
    // Experience descriptions
    hieloPolarStage2Description: 'Coordinador de Operaciones y Finanzas enfocado en la mejora de procesos y la adopción por parte del usuario. Optimicé rutas y costos logísticos, aumentando la eficiencia y apoyando a los equipos operativos durante el cambio.',
    jbmLimonesDescription: 'Consultor de Transformación Digital, especializado en optimización de procesos e implementación de tecnología con un fuerte enfoque centrado en el usuario. Rediseñé y optimicé procesos operativos, aumentando significativamente la eficiencia y reduciendo costos.',
    operadoraPurepechaDescription: 'Analista de Datos de Marketing, responsable de gestionar y analizar datos de marketing. Aproveché herramientas de IA para proporcionar información valiosa sobre el comportamiento del cliente y las tendencias del mercado.',
    focaltecManagerDescription: 'Realicé demostraciones de sistemas y recopilé requisitos detallados para implementaciones de nuevos clientes. Desarrollé propuestas comerciales convincentes y gestioné el seguimiento postventa para garantizar la satisfacción del cliente.',
    focaltecSupportDescription: 'Brindé soporte técnico directo a usuarios para productos que incluyen gastosdeviaje.mx y portaldeproveedores.mx, resolviendo y clasificando tickets (Nivel 1 y Nivel 2) siguiendo principios ITIL.',
    oportunDescription: 'Supervisor Bilingüe de Atención al Cliente (COPC), brindando servicio directo al cliente y gestionando el seguimiento de transacciones para una empresa con sede en EE. UU.',
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
    project1Description: 'Automatización de certificación GlobalGap/Primus. Reducción del 40% en tiempo de procesamiento.',
    project1DetailedDescription: 'Reto: Procesos manuales de certificación en empaque de limón generaban retrasos y errores.\nSolución: Sistema automático para certificación GlobalGap y Primus con trazabilidad total.\nResultado: 40% menos tiempo, 100% trazabilidad, +15 toneladas diarias procesadas.',
    
    project2Title: 'Implementación de Odoo POS',
    project2Description: 'Sistema POS + Capacitación integral. 50 usuarios en operación en Hielo Polar.',
    project2DetailedDescription: 'Reto: Punto de venta manual y sin integración con inventario.\nSolución: Implementación de Odoo POS con capacitación presencial y materiales.\nResultado: 50 usuarios capacitados, +25% velocidad en cierre de turno.',
    
    project3Title: 'Sistema de Reparación de Celulares',
    project3Description: 'Plataforma integral de reparaciones, inventario y marketplace.',
    project3DetailedDescription: 'Reto: Gestión dispersa de reparaciones, inventario y ventas sin integración.\nSolución: Web app con gestión de ordenes, inventario en tiempo real y marketplace integrado.\nResultado: -30% tiempo administrativo, +60% eficiencia en atención al cliente.',
    
    project4Title: 'Optimización de Rutas de Reparto',
    project4Description: '25% reducción de costos | 30% mejora en tiempos de entrega.',
    project4DetailedDescription: 'Reto: Rutas manuales generaban sobrecostos y entregas fuera de SLA.\nSolución: Sistema de optimización de rutas basado en datos geográficos y demanda.\nResultado: -25% costos combustible, -30% tiempos, +50 entregas diarias adicionales.',
    
    project5Title: 'Gestión de Viáticos (GastosdeViaje.Mx)',
    project5Description: 'Automatización de reembolsos. Reducción de 80% en errores administrativos.',
    project5DetailedDescription: 'Reto: Reembolsos manuales generaban discrepancias y demoras en pago.\nSolución: Plataforma automática de gastos y facturación electrónica (CFDI).\nResultado: -80% errores, ciclo de reembolso en 48h, +200 usuarios integrados.',
    
    project6Title: 'Control de Producción en Fábrica de Hielo',
    project6Description: 'Automatización de flujo de producción. Datos en tiempo real.',
    project6DetailedDescription: 'Reto: Procesos manuales sin visibilidad en línea de producción.\nSolución: Web app para gestión de producción, distribución y tracking de lotes.\nResultado: 100% visibilidad en tiempo real, -20% desperdicio, +15% capacidad.',
    
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
    aboutText1: 'Digital Transformation specialist with AI automation and commercial strategy expertise for food, logistics, and retail companies. 10+ years of experience.',
    aboutText2: 'I implement solutions that reduce operational costs, automate administrative processes, and accelerate business growth.',
    aboutText3: '',
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
    skills: ['SAP Business One', 'Zoho', 'Odoo', 'QuickBooks', 'Power BI', 'Tableau', 'Google Data Studio', 'MySQL', 'Advanced Excel', 'Google Ads', 'Meta Ads', 'SEO/SEM', 'Mailchimp', 'Salesforce', 'HubSpot', 'Zapier', 'HTML', 'Microsoft 365', 'Customer Service', 'Process Optimization', 'Data Analysis', 'Bilingual Communication'],
    
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
    project1Description: 'GlobalGap/Primus certification automation. 40% reduction in processing time.',
    project1DetailedDescription: 'Challenge: Manual certification processes created delays and errors.\nSolution: Automated system for GlobalGap and Primus certification with full traceability.\nResult: 40% faster, 100% traceability, +15 metric tons daily processing.',
    
    project2Title: 'Odoo POS Implementation',
    project2Description: '50-user system deployment + comprehensive training at Hielo Polar.',
    project2DetailedDescription: 'Challenge: Manual point of sale with no inventory integration.\nSolution: Odoo POS implementation with hands-on training and documentation.\nResult: 50 users trained, +25% faster shift closing.',
    
    project3Title: 'Mobile Repair Support System',
    project3Description: 'End-to-end repair management, inventory, and marketplace platform.',
    project3DetailedDescription: 'Challenge: Scattered repair, inventory, and sales management without integration.\nSolution: Web app with order management, real-time inventory, and integrated marketplace.\nResult: -30% admin time, +60% customer service efficiency.',
    
    project4Title: 'Delivery Route Optimization',
    project4Description: '25% cost savings | 30% delivery time improvement.',
    project4DetailedDescription: 'Challenge: Manual routes created overspend and SLA misses.\nSolution: Data-driven route optimization system based on geography and demand.\nResult: -25% fuel costs, -30% delivery times, +50 additional daily deliveries.',
    
    project5Title: 'Travel Expense Automation',
    project5Description: '80% reduction in administrative errors through auto-reimbursement.',
    project5DetailedDescription: 'Challenge: Manual reimbursement caused discrepancies and delays.\nSolution: Automated platform with e-invoicing (CFDI) integration.\nResult: -80% errors, 48-hour reimbursement cycle, 200+ integrated users.',
    
    project6Title: 'Ice Factory Production Control',
    project6Description: 'Real-time production management and batch tracking system.',
    project6DetailedDescription: 'Challenge: Manual processes without production line visibility.\nSolution: Web app for production, distribution, and batch tracking.\nResult: 100% real-time visibility, -20% waste, +15% capacity.',
    
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
