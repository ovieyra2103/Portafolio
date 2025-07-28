
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
  
  // Professional color palette
  const colors = {
    primary: [47, 79, 79] as [number, number, number],
    secondary: [70, 130, 180] as [number, number, number],
    accent: [255, 140, 0] as [number, number, number],
    text: [33, 33, 33] as [number, number, number],
    lightText: [85, 85, 85] as [number, number, number],
    background: [248, 250, 252] as [number, number, number],
    white: [255, 255, 255] as [number, number, number]
  };
  
  let currentY = 0;
  
  // Modern header with gradient effect
  pdf.setFillColor(...colors.primary);
  pdf.rect(0, 0, pageWidth, 65, 'F');
  
  // Add subtle accent line
  pdf.setFillColor(...colors.accent);
  pdf.rect(0, 65, pageWidth, 2, 'F');
  
  // Name with better typography
  pdf.setTextColor(...colors.white);
  pdf.setFontSize(32);
  pdf.setFont('helvetica', 'bold');
  pdf.text(cvData.name.toUpperCase(), 25, 35);
  
  // Professional title with improved spacing
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'normal');
  pdf.text(cvData.title, 25, 50);
  
  // Enhanced QR Code
  try {
    const qrData = `MECARD:N:${cvData.name};EMAIL:${cvData.contact.email};URL:${cvData.contact.website};;`;
    const qrCodeDataURL = await QRCode.toDataURL(qrData, {
      width: 80,
      margin: 1,
      color: {
        dark: '#2F4F4F',
        light: '#FFFFFF'
      }
    });
    
    // QR code background
    pdf.setFillColor(...colors.white);
    pdf.roundedRect(pageWidth - 75, 12, 40, 40, 3, 3, 'F');
    pdf.addImage(qrCodeDataURL, 'PNG', pageWidth - 72, 15, 34, 34);
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
  
  currentY = 80;
  
  // Professional contact section with icons
  pdf.setFillColor(...colors.background);
  pdf.rect(0, currentY, pageWidth, 25, 'F');
  
  pdf.setTextColor(...colors.text);
  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  
  const contactData = [
    { icon: '✉', text: cvData.contact.email, x: 25 },
    { icon: '📱', text: cvData.contact.phone, x: 25 },
    { icon: '🌐', text: cvData.contact.website.replace('https://', ''), x: 25 },
    { icon: '📍', text: cvData.contact.location, x: 25 }
  ];
  
  contactData.forEach((item, index) => {
    const yPos = currentY + 8 + (index * 4);
    pdf.setTextColor(...colors.secondary);
    pdf.text(item.icon, item.x - 8, yPos);
    pdf.setTextColor(...colors.text);
    pdf.text(item.text, item.x, yPos);
  });
  
  currentY += 35;
  
  // Professional Profile Section
  const addSectionHeader = (title: string) => {
    pdf.setFillColor(...colors.secondary);
    pdf.rect(20, currentY - 3, pageWidth - 40, 12, 'F');
    
    pdf.setTextColor(...colors.white);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text(title, 25, currentY + 4);
    currentY += 15;
  };
  
  addSectionHeader('PROFESSIONAL PROFILE');
  
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(...colors.text);
  
  const descriptionLines = pdf.splitTextToSize(cvData.profile, pageWidth - 50);
  descriptionLines.forEach((line: string, index: number) => {
    pdf.text(line, 25, currentY + (index * 5));
  });
  
  currentY += descriptionLines.length * 5 + 15;
  
  // Professional Experience Section
  addSectionHeader('PROFESSIONAL EXPERIENCE');
  
  cvData.experience.forEach((exp, index) => {
    if (currentY > pageHeight - 50) {
      pdf.addPage();
      currentY = 25;
    }
    
    // Experience entry with improved layout
    if (index > 0) {
      // Add subtle separator
      pdf.setDrawColor(...colors.background);
      pdf.setLineWidth(0.5);
      pdf.line(25, currentY - 5, pageWidth - 25, currentY - 5);
      currentY += 5;
    }
    
    // Job title
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...colors.text);
    pdf.text(exp.title, 25, currentY);
    
    // Company and period
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...colors.lightText);
    pdf.text(exp.company, 25, currentY + 6);
    
    // Period aligned to the right
    const periodWidth = pdf.getTextWidth(exp.period);
    pdf.setTextColor(...colors.secondary);
    pdf.text(exp.period, pageWidth - 25 - periodWidth, currentY + 6);
    
    currentY += 15;
    
    // Description with better formatting
    pdf.setTextColor(...colors.text);
    pdf.setFontSize(9);
    const expLines = pdf.splitTextToSize(exp.description, pageWidth - 55);
    expLines.forEach((line: string, index: number) => {
      pdf.text(line, 30, currentY + (index * 4));
    });
    
    currentY += expLines.length * 4 + 12;
  });
  
  // Skills Section
  if (currentY > pageHeight - 80) {
    pdf.addPage();
    currentY = 25;
  }
  
  addSectionHeader('CORE SKILLS');
  
  // Modern skills layout with improved badges
  let skillX = 25;
  let skillY = currentY;
  const skillPadding = 6;
  const skillHeight = 8;
  
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'normal');
  
  cvData.skills.forEach((skill) => {
    const skillWidth = pdf.getTextWidth(skill) + (skillPadding * 2);
    
    if (skillX + skillWidth > pageWidth - 25) {
      skillX = 25;
      skillY += skillHeight + 4;
    }
    
    // Modern skill badge with gradient effect
    pdf.setFillColor(...colors.accent);
    pdf.roundedRect(skillX, skillY - 4, skillWidth, skillHeight, 2, 2, 'F');
    
    // Add subtle border
    pdf.setDrawColor(...colors.secondary);
    pdf.setLineWidth(0.2);
    pdf.roundedRect(skillX, skillY - 4, skillWidth, skillHeight, 2, 2, 'D');
    
    pdf.setTextColor(...colors.white);
    pdf.text(skill, skillX + skillPadding, skillY);
    
    skillX += skillWidth + 4;
  });
  
  // Professional footer with enhanced styling
  currentY = pageHeight - 25;
  
  // Footer background
  pdf.setFillColor(...colors.primary);
  pdf.rect(0, currentY - 5, pageWidth, 30, 'F');
  
  // Portfolio link
  pdf.setTextColor(...colors.white);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  const footerText = 'Visit my portfolio for more details';
  const footerWidth = pdf.getTextWidth(footerText);
  pdf.textWithLink(footerText, (pageWidth - footerWidth) / 2, currentY + 8, { url: cvData.contact.website });
  
  // Generation timestamp
  pdf.setFontSize(7);
  pdf.setTextColor(...colors.background);
  const timestamp = `Generated on ${new Date().toLocaleDateString()}`;
  pdf.text(timestamp, 25, currentY + 15);
  
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
