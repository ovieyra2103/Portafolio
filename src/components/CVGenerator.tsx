
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

interface CVData {
  name: string;
  title: string;
  profile: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website: string;
  };
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  skills: string[];
  services: string[];
}

export const generateInteractivePDF = async (cvData: CVData): Promise<void> => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  
  // Colores del tema (basados en tu CSS)
  const primaryColor = '#0099cc';
  const secondaryColor = '#f0fdff';
  const textColor = '#222222';
  const mutedColor = '#666666';
  
  let currentY = 20;
  
  // Header con gradiente simulado
  pdf.setFillColor(0, 153, 204); // Primary color
  pdf.rect(0, 0, pageWidth, 60, 'F');
  
  // Nombre
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(28);
  pdf.setFont('helvetica', 'bold');
  pdf.text(cvData.name, 20, 30);
  
  // Título profesional
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'normal');
  pdf.text(cvData.title, 20, 40);
  
  // Generar QR Code
  try {
    const qrData = `MECARD:N:${cvData.name};EMAIL:${cvData.contact.email};URL:${cvData.contact.website};;`;
    const qrCodeDataURL = await QRCode.toDataURL(qrData, {
      width: 60,
      margin: 0,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    pdf.addImage(qrCodeDataURL, 'PNG', pageWidth - 80, 15, 30, 30);
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
  
  currentY = 70;
  
  // Información de contacto
  pdf.setTextColor(34, 34, 34);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  
  const contactInfo = [
    `📧 ${cvData.contact.email}`,
    `📱 ${cvData.contact.phone}`,
    `🌐 ${cvData.contact.website}`,
    `📍 ${cvData.contact.location}`
  ];
  
  contactInfo.forEach((info, index) => {
    pdf.text(info, 20, currentY + (index * 5));
  });
  
  currentY += 30;
  
  // Descripción profesional
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(0, 153, 204);
  pdf.text('PERFIL PROFESIONAL', 20, currentY);
  
  currentY += 8;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(34, 34, 34);
  
  const descriptionLines = pdf.splitTextToSize(cvData.profile, pageWidth - 40);
  descriptionLines.forEach((line: string, index: number) => {
    pdf.text(line, 20, currentY + (index * 5));
  });
  
  currentY += descriptionLines.length * 5 + 10;
  
  // Experiencia profesional
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(0, 153, 204);
  pdf.text('EXPERIENCIA PROFESIONAL', 20, currentY);
  
  currentY += 10;
  
  cvData.experience.forEach((exp) => {
    if (currentY > pageHeight - 40) {
      pdf.addPage();
      currentY = 20;
    }
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(34, 34, 34);
    pdf.text(exp.title, 20, currentY);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(102, 102, 102);
    pdf.text(`${exp.company} | ${exp.period}`, 20, currentY + 5);
    
    currentY += 12;
    
    const expLines = pdf.splitTextToSize(exp.description, pageWidth - 40);
    expLines.forEach((line: string, index: number) => {
      pdf.text(line, 20, currentY + (index * 4));
    });
    
    currentY += expLines.length * 4 + 8;
  });
  
  // Habilidades
  if (currentY > pageHeight - 60) {
    pdf.addPage();
    currentY = 20;
  }
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(0, 153, 204);
  pdf.text('HABILIDADES', 20, currentY);
  
  currentY += 10;
  
  // Mostrar habilidades en formato de badges
  let skillX = 20;
  let skillY = currentY;
  
  cvData.skills.forEach((skill) => {
    const skillWidth = pdf.getTextWidth(skill) + 8;
    
    if (skillX + skillWidth > pageWidth - 20) {
      skillX = 20;
      skillY += 8;
    }
    
    // Simular badge con rectángulo redondeado
    pdf.setFillColor(240, 253, 255);
    pdf.setDrawColor(0, 153, 204);
    pdf.roundedRect(skillX, skillY - 4, skillWidth, 6, 1, 1, 'FD');
    
    pdf.setFontSize(8);
    pdf.setTextColor(0, 153, 204);
    pdf.text(skill, skillX + 4, skillY);
    
    skillX += skillWidth + 5;
  });
  
  // Agregar enlaces interactivos (solo funciona en algunos visores de PDF)
  pdf.setTextColor(0, 153, 204);
  pdf.textWithLink('Visita mi portafolio', 20, pageHeight - 20, { url: cvData.contact.website });
  
  // Metadatos del PDF
  pdf.setProperties({
    title: `CV - ${cvData.name}`,
    subject: 'Curriculum Vitae',
    author: cvData.name,
    creator: 'Portfolio CV Generator'
  });
  
  // Descargar el PDF
  pdf.save(`${cvData.name.replace(/\s+/g, '-')}-CV.pdf`);
};

export const getCVData = (): CVData => ({
  name: 'José Omar Vieyra García',
  title: 'Digital Transformation Strategist',
  profile: 'Highly motivated professional with a strong background in digital marketing, business development, and digital transformation. I bring proven experience in administrative and accounting support, customer service, and process optimization, with a keen interest in integrating technology to enhance operational efficiency and user satisfaction. My advanced English proficiency and solid grasp of accounting principles, coupled with expertise in ERPs and data analysis, enable me to diagnose issues, provide clear solutions, and ensure an excellent user experience in dynamic environments.',
  contact: {
    email: 'joseomarvieyra@gmail.com',
    phone: '+52-417-130-8050',
    location: 'Acámbaro, Guanajuato, Mexico',
    website: 'https://omar-vieyra.com'
  },
  experience: [
    {
      title: 'Commercial Operations and Finance Coordinator',
      company: 'Hielo Polar del Centro (Stage 2)',
      period: 'February 2024 – Present',
      description: 'Operations & Finance Coordinator with a focus on process improvement and user adoption. Optimized logistics routes and costs, leading to increased efficiency and supporting operational teams through change. Developed comprehensive sales, compensation, and digital marketing strategies, often involving training and guiding internal users on new tools.'
    },
    {
      title: 'Reengineering and Digital Transformation Consultant',
      company: 'JBM LIMONES SPR DE RL DE CV',
      period: 'November 2022 – October 2023',
      description: 'Digital Transformation Consultant, specializing in process optimization and technology implementation with a strong user-centric approach. Redesigned and optimized operational processes, significantly increasing efficiency and reducing costs, often involving stakeholder engagement and user training.'
    },
    {
      title: 'Marketing Data Analyst',
      company: 'Operadora de servicios turísticos gastronómicos e industriales Purépecha SA de CV',
      period: 'February 2022 – November 2022',
      description: 'Marketing Data Analyst, responsible for managing and analyzing marketing data. Leveraged AI tools to provide valuable insights into customer behavior and market trends, supporting business decisions and internal teams with data interpretation.'
    },
    {
      title: 'Business Development Manager',
      company: 'Focaltec SAPI de CV',
      period: 'April 2019 – April 2021',
      description: 'Conducted system demonstrations and gathered detailed requirements for new client implementations. Developed compelling commercial proposals and managed post-sales follow-up to ensure client satisfaction.'
    },
    {
      title: 'Support Specialist',
      company: 'Focaltec SAPI de CV',
      period: 'June 2017 – April 2019',
      description: 'Provided direct technical support to users for products including gastosdeviaje.mx and portaldeproveedores.mx, resolving and classifying tickets (Tier 1 and Tier 2) following ITIL principles. Identified recurring issues and collaborated with the Product Owner to implement solutions in subsequent sprints.'
    },
    {
      title: 'Supervisor',
      company: 'Oportun',
      period: 'June 2016 – August 2016',
      description: 'Bilingual Customer Support Supervisor (CCPOC), providing direct customer service and managing transaction follow-ups for a US-based company. Ensured accurate information capture and problem resolution for client inquiries.'
    },
    {
      title: 'Expansion Strategy Developer',
      company: 'Hielo Polar del Centro',
      period: 'April 2015 – August 2015',
      description: 'Expansion Strategy Developer, creating detailed expansion strategies and supervising their implementation. Collaborated closely with internal teams to align expansion plans with overall business objectives.'
    },
    {
      title: 'Purchasing Manager',
      company: 'Importadora Cable-Cell',
      period: 'June 2010 – March 2015',
      description: 'Purchasing Manager & Client Relationship Specialist, managing the import process for cell phone accessories. Successfully expanded the company\'s client portfolio and ensured timely follow-up on orders.'
    },
    {
      title: 'Main Teller',
      company: 'Scotia Bank Inverlat',
      period: 'September 2008 – April 2010',
      description: 'Customer Service & Operations Specialist, responsible for comprehensive customer service, vault management, and teller reconciliation. Provided direct assistance to clients regarding account inquiries and access media.'
    },
    {
      title: 'Electrical Assembly Coach',
      company: 'Bombardier Aerospace México',
      period: 'June 2007 – February 2008',
      description: 'Electrical Assembly Coach, managing and guiding a team responsible for the assembly of aerospace harnesses. Provided technical guidance and support to team members, primarily for Global Express aircraft.'
    }
  ],
  skills: [
    'SAP Business One', 'Zoho', 'Odoo', 'QuickBooks', 'Electronic Invoicing', 'Power BI', 'Tableau', 
    'Google Data Studio', 'MySQL', 'Advanced Excel', 'Google Ads', 'Meta Ads', 'SEO/SEM', 
    'Mailchimp', 'Salesforce', 'HubSpot', 'Zapier', 'HTML', 'Microsoft 365', 'Customer Service', 
    'Process Optimization', 'Data Analysis', 'Bilingual Communication', 'ITIL', 'Project Management'
  ],
  services: [
    'Financial and Process Optimization',
    'Strategic and Digital Marketing',
    'Digital Transformation with AI'
  ]
});
