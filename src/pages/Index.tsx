import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Projects from '@/components/portfolio/Projects';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Certifications from '@/components/portfolio/Certifications';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-muted-foreground/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
