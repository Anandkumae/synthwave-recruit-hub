import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import Projects from '@/components/portfolio/Projects';
import Skills from '@/components/portfolio/Skills';
import Blog from '@/components/portfolio/Blog';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Blog />
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
