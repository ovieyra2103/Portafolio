
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SlimCertifications from "@/components/SlimCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <ThemeToggle />
      <LanguageToggle />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <SlimCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
