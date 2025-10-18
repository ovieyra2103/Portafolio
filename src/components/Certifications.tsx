import { Award, Clock, FileText, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Certifications = () => {
  const { t, tArray } = useLanguage();
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; url: string } | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  
  const certificationCategories = [
    {
      category: t('certCategoryDigitalTransformation'),
      certs: tArray('certDigitalTransformation')
    },
    {
      category: t('certCategoryMarketing'),
      certs: tArray('certMarketing')
    },
    {
      category: t('certCategoryDevelopment'),
      certs: tArray('certDevelopment')
    },
    {
      category: t('certCategoryAnalytics'),
      certs: tArray('certAnalytics')
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 -mb-20 w-80 h-80 bg-ocean-200/10 rounded-full filter blur-3xl animate-wave" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title animate-fade-in">{t('certificationsTitle')}</h2>
        
        <div className="space-y-12 mt-12">
          {certificationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.15}s` }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-primary">
                <Award className="h-6 w-6 animate-scale-pulse" />
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.certs.map((cert: any, certIndex: number) => (
                  <Card
                    key={certIndex}
                    className="glass-card hover:shadow-md hover:shadow-primary/10 transition-all duration-300 border-l-4 border-l-primary/50 cursor-pointer"
                    onClick={() => setSelectedPdf({ title: cert.title, url: cert.pdf })}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="text-base leading-snug flex-1">{cert.title}</CardTitle>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 shrink-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPdf({ title: cert.title, url: cert.pdf });
                          }}
                        >
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="inline-block glass-card max-w-md mx-auto p-6 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">{t('continuousUpdate')}</h3>
            </div>
            <p className="text-muted-foreground">
              {t('continuousUpdateDescription')}
            </p>
          </Card>
        </div>
      </div>

      <Dialog open={!!selectedPdf} onOpenChange={() => setSelectedPdf(null)}>
        <DialogContent className="max-w-5xl h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-6 pb-3">
            <DialogTitle>{selectedPdf?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto p-6 pt-0">
            {selectedPdf && (
              <div className="flex flex-col items-center gap-4">
                <Document
                  file={selectedPdf.url}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="w-full"
                >
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(window.innerWidth * 0.8, 800)}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </Document>
                {numPages > 1 && (
                  <div className="flex items-center gap-4 py-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}
                      disabled={pageNumber <= 1}
                    >
                      Anterior
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      Página {pageNumber} de {numPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPageNumber(prev => Math.min(numPages, prev + 1))}
                      disabled={pageNumber >= numPages}
                    >
                      Siguiente
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;
