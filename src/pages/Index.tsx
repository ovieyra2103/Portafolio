
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import SlimCertifications from "@/components/SlimCertifications";
import JBMProject from "@/components/JBMProject";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticlesBackground />
      <ThemeToggle />
      <LanguageToggle />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <SlimCertifications />
        <JBMProject />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
