import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 animated-bg opacity-30"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Full Stack</span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Crafting innovative solutions with{' '}
              <span className="text-tech-primary font-semibold">React</span>,{' '}
              <span className="text-tech-secondary font-semibold">Python</span>, and{' '}
              <span className="text-tech-tertiary font-semibold">AI/ML</span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable web applications, implementing machine learning solutions, 
              and creating seamless user experiences. Currently seeking opportunities to contribute to 
              innovative tech teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg glow-primary hover-glow-primary group"
              >
                View My Work
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg group">
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors p-3 hover:bg-primary/10 rounded-full group"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-tech-secondary transition-colors p-3 hover:bg-tech-secondary/10 rounded-full group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors p-3 hover:bg-accent/10 rounded-full group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;