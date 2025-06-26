
import jsPDF from 'jspdf';
import QRCode from 'qrcode';

interface CVData {
  name: string;
  title: string;
  description: string;
  location: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    website: string;
  };
  experience: Array<{
    company: string;
    position: string;
    period: string;
    description: string;
  }>;
  skills: string[];
  services: Array<{
    title: string;
    description: string;
  }>;
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
    `📍 ${cvData.location}`
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
  
  const descriptionLines = pdf.splitTextToSize(cvData.description, pageWidth - 40);
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
    pdf.text(exp.company, 20, currentY);
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(102, 102, 102);
    pdf.text(exp.position, 20, currentY + 5);
    
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
  name: 'Omar Vieyra',
  title: 'Estratega en Transformación Digital con enfoque en Finanzas, Innovación Comercial y Automatización Inteligente',
  description: 'Aplico inteligencia artificial y herramientas digitales para optimizar procesos, mejorar la rentabilidad y acelerar el crecimiento de negocios. Mi enfoque combina análisis financiero, visión de mercado y soluciones tecnológicas para transformar la operación de empresas en resultados medibles.',
  location: 'Acámbaro, Guanajuato, México',
  contact: {
    email: 'omar.vieyra@example.com',
    phone: '+52 123 456 7890',
    linkedin: 'linkedin.com/in/omar-vieyra',
    website: 'omar-vieyra-portfolio.com'
  },
  experience: [
    {
      company: 'Hielo Polar del Centro',
      position: 'Especialista en Inteligencia Financiera, Desarrollo de Negocios e Innovación Operativa con IA',
      period: '2023 - Presente',
      description: 'Liderazgo en proyectos de transformación digital, implementación de soluciones de IA para optimización de procesos financieros y operativos.'
    },
    {
      company: 'Focaltec (GastosdeViaje.Mx)',
      position: 'Consultor en Herramientas Tecnológicas',
      period: '2022 - 2023',
      description: 'Consultoría especializada en implementación de herramientas tecnológicas para gestión de gastos de viaje y optimización de procesos empresariales.'
    },
    {
      company: 'Empaque de Limón',
      position: 'Especialista en Automatización y Certificaciones',
      period: '2021 - 2022',
      description: 'Automatización de procesos de exportación y obtención de certificaciones GlobalGap y Primus, mejorando la eficiencia operativa.'
    }
  ],
  skills: [
    'Zoho Inventory', 'Zoho Books', 'Zoho Expenses', 'Google Colab', 'Power BI', 
    'Microsoft Fabric', 'GlobalGap', 'Primus', 'Automatización', 'Optimización de Rutas',
    'Gestión de Viáticos', 'Marketing con IA', 'Consultoría'
  ],
  services: [
    {
      title: 'Optimización Financiera y de Procesos',
      description: 'Análisis de costos, control de gastos, automatización contable y estrategias para mejorar la rentabilidad del negocio.'
    },
    {
      title: 'Marketing Estratégico y Digital',
      description: 'Diseño de campañas inteligentes, posicionamiento de marca y uso de herramientas de IA para generar contenido y captar clientes.'
    },
    {
      title: 'Transformación Digital con IA',
      description: 'Implementación de soluciones tecnológicas personalizadas para automatizar tareas repetitivas, mejorar flujos de trabajo y escalar operaciones.'
    }
  ]
});
