import jsPDF from 'jspdf';
import QRCode from 'qrcode';

// Se mantiene la misma interfaz de datos
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
  // **MEJORA**: Las habilidades ahora están categorizadas para un mejor diseño
  skills: {
    category: string;
    items: string[];
  }[];
  services: string[];
}

export const generateInteractivePDF = async (cvData: CVData): Promise<void> => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // --- 1. MEJORA: PALETA DE COLORES REFINADA ---
  // Adoptamos la paleta "Azul Estratégico" para un look más moderno y tecnológico.
  const colors = {
    primary: [37, 99, 235],      // Azul Estratégico (HEX: #2563EB)
    textDark: [45, 55, 72],     // Gris Oscuro (HEX: #2D3748)
    textLight: [160, 174, 192],  // Gris Claro (HEX: #A0AEC0)
    background: [248, 250, 252], // Un gris muy claro para fondos sutiles
    white: [255, 255, 255]
  };

  // --- 2. MEJORA: LAYOUT DE DOS COLUMNAS ---
  // Definimos las dimensiones para la barra lateral y el contenido principal.
  const sidebarWidth = 60;
  const mainContentX = sidebarWidth + 15;
  const mainContentWidth = pageWidth - mainContentX - 15;
  const margin = 15;

  let currentY = 0;

  // --- DIBUJAR LA BARRA LATERAL ---
  pdf.setFillColor(...colors.background);
  pdf.rect(0, 0, sidebarWidth, pageHeight, 'F');
  
  // --- 3. MEJORA: ENCABEZADO MINIMALISTA ---
  // Colocamos el nombre y título en la barra lateral para un diseño asimétrico.
  currentY = 30;
  pdf.setTextColor(...colors.primary);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(22);
  // Dividimos el nombre para un mejor ajuste en la barra lateral
  const nameLines = pdf.splitTextToSize(cvData.name, sidebarWidth - (margin * 2));
  pdf.text(nameLines, margin, currentY);
  currentY += (nameLines.length * 8) + 5;

  pdf.setTextColor(...colors.textDark);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.text(cvData.title, margin, currentY);

  // --- SECCIÓN DE CONTACTO EN LA BARRA LATERAL ---
  currentY += 20;
  pdf.setFontSize(9);
  pdf.setTextColor(...colors.textDark);
  
  // Usamos un simple text con link en lugar de la función textWithLink para más control
  pdf.text('CONTACTO', margin, currentY);
  pdf.setDrawColor(...colors.primary);
  pdf.line(margin, currentY + 1, margin + 15, currentY + 1); // Línea de acento
  currentY += 8;

  pdf.textWithLink(cvData.contact.email, margin, currentY, { url: `mailto:${cvData.contact.email}` });
  currentY += 6;
  pdf.text(cvData.contact.phone, margin, currentY);
  currentY += 6;
  pdf.textWithLink(cvData.contact.website.replace('https://', ''), margin, currentY, { url: cvData.contact.website });
  currentY += 6;
  pdf.text(cvData.contact.location, margin, currentY);

  // --- 4. MEJORA: HABILIDADES CATEGORIZADAS EN LA BARRA LATERAL ---
  currentY += 15;
  pdf.text('HABILIDADES CLAVE', margin, currentY);
  pdf.line(margin, currentY + 1, margin + 25, currentY + 1); // Línea de acento
  currentY += 8;

  const addSkillCategory = (category: string, items: string[]) => {
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...colors.textDark);
    pdf.text(category, margin, currentY);
    currentY += 5;
    
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...colors.textDark);
    items.forEach(item => {
      pdf.text(`• ${item}`, margin, currentY);
      currentY += 4.5;
    });
    currentY += 4; // Espacio extra entre categorías
  };

  cvData.skills.forEach(skillSet => {
    addSkillCategory(skillSet.category, skillSet.items);
  });
  
  // --- QR Code en la barra lateral ---
  try {
    const qrData = `https://omar-vieyra.com`; // URL directa es más útil
    const qrCodeDataURL = await QRCode.toDataURL(qrData, {
      width: 40,
      margin: 1,
      color: { dark: '#2D3748', light: '#F8FAFC' }
    });
    pdf.addImage(qrCodeDataURL, 'PNG', margin, currentY + 10, 30, 30);
  } catch (error) {
    console.error('Error al generar QR:', error);
  }


  // --- INICIO DEL CONTENIDO PRINCIPAL (COLUMNA DERECHA) ---
  currentY = 30;

  // --- 5. MEJORA: ENCABEZADOS DE SECCIÓN MODERNOS ---
  const addSectionHeader = (title: string) => {
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...colors.primary);
    pdf.text(title, mainContentX, currentY);
    pdf.setDrawColor(...colors.primary);
    pdf.setLineWidth(0.5);
    pdf.line(mainContentX, currentY + 2, mainContentX + 30, currentY + 2); // Línea sutil
    currentY += 12;
  };

  // --- PERFIL PROFESIONAL ---
  addSectionHeader('PERFIL PROFESIONAL');
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(...colors.textDark);
  const profileLines = pdf.splitTextToSize(cvData.profile, mainContentWidth);
  pdf.text(profileLines, mainContentX, currentY);
  currentY += profileLines.length * 5 + 10;

  // --- EXPERIENCIA PROFESIONAL ---
  addSectionHeader('EXPERIENCIA PROFESIONAL');
  
  cvData.experience.forEach((exp, index) => {
    if (currentY > pageHeight - 40) { // Salto de página
      pdf.addPage();
      // Si hay salto de página, no se dibuja la barra lateral en la nueva página
      currentY = 30;
    }
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...colors.textDark);
    pdf.text(exp.title, mainContentX, currentY);
    currentY += 5;

    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...colors.textLight);
    const companyWidth = pdf.getTextWidth(exp.company);
    pdf.text(exp.company, mainContentX, currentY);
    
    pdf.setTextColor(...colors.textLight);
    const periodWidth = pdf.getTextWidth(exp.period);
    pdf.text(exp.period, pageWidth - margin - periodWidth, currentY - 5); // Alineado a la derecha del título
    currentY += 6;

    pdf.setFontSize(9);
    pdf.setTextColor(...colors.textDark);
    const expLines = pdf.splitTextToSize(`• ${exp.description.replace(/\n/g, '\n• ')}`, mainContentWidth - 5);
    pdf.text(expLines, mainContentX, currentY);
    currentY += expLines.length * 4.5 + 8;
  });

  // --- Metadatos y guardado ---
  pdf.setProperties({
    title: `CV - ${cvData.name}`,
    subject: 'Curriculum Vitae',
    author: cvData.name,
  });

  pdf.save(`${cvData.name.replace(/\s+/g, '-')}-CV-Moderno.pdf`);
};

// --- 6. MEJORA: DATOS ESTRUCTURADOS PARA EL NUEVO DISEÑO ---
export const getCVData = (): CVData => ({
  name: 'José Omar Vieyra García',
  title: 'Digital Transformation Strategist',
  profile: 'Profesional altamente motivado con una sólida trayectoria en marketing digital, desarrollo de negocios y transformación digital. Aporto experiencia comprobada en soporte administrativo y contable, servicio al cliente y optimización de procesos, con un gran interés en integrar tecnología para mejorar la eficiencia operativa y la satisfacción del usuario.',
  contact: {
    email: 'joseomarvieyra@gmail.com',
    phone: '+52-417-130-8050',
    location: 'Acámbaro, GTO, Mexico',
    website: 'https://omar-vieyra.com'
  },
  skills: [
    { category: 'Software y ERPs', items: ['SAP Business One', 'Zoho', 'Odoo', 'QuickBooks', 'Salesforce'] },
    { category: 'Análisis de Datos y BI', items: ['Power BI', 'Tableau', 'Google Data Studio', 'MySQL', 'Advanced Excel'] },
    { category: 'Marketing y Automatización', items: ['Google Ads', 'Meta Ads', 'SEO/SEM', 'HubSpot', 'Zapier'] },
    { category: 'Competencias', items: ['Process Optimization', 'Project Management', 'ITIL Framework', 'Bilingual Communication'] }
  ],
  experience: [
     // ... (los datos de experiencia se mantienen igual que en tu código original)
     {
      title: 'Commercial Operations and Finance Coordinator',
      company: 'Hielo Polar del Centro',
      period: 'Feb 2024 – Presente',
      description: 'Coordinador de Operaciones y Finanzas enfocado en la mejora de procesos y la adopción por parte del usuario. Optimicé rutas y costos logísticos, y desarrollé estrategias de ventas, compensación y marketing digital.'
    },
    {
      title: 'Reengineering and Digital Transformation Consultant',
      company: 'JBM LIMONES SPR DE RL DE CV',
      period: 'Nov 2022 – Oct 2023',
      description: 'Consultor de Transformación Digital. Rediseñé y optimicé procesos operativos, aumentando significativamente la eficiencia y reduciendo costos con un enfoque centrado en el usuario.'
    },
    // ... (añadir el resto de la experiencia aquí)
  ],
  services: [] // No se usa en este diseño, pero se mantiene en la interfaz
});
