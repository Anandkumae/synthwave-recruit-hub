import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
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
    <section id="hero" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 animated-bg opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [100, -100],
              x: [0, Math.random() * 200 - 100]
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                👋 Hi, I'm Anand
              </motion.span>
              <br />
              <motion.span 
                className="text-foreground"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <ReactTyped
                  strings={[
                    "Computer Engineering Student",
                    "Machine Learning Enthusiast", 
                    "Backend Developer",
                    "Problem Solver"
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </motion.span>
            </motion.h1>
            <motion.div 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Building intelligent and scalable tech with{' '}
              <span className="text-tech-primary font-semibold">ML</span>,{' '}
              <span className="text-tech-secondary font-semibold">Backend Dev</span>, and{' '}
              <span className="text-tech-tertiary font-semibold">Automation</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable web applications, implementing machine learning solutions, 
              and creating seamless user experiences. Currently seeking opportunities to contribute to 
              innovative tech teams.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={scrollToProjects}
                  className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg glow-primary hover-glow-primary group"
                >
                  View My Work
                  <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg group"
                  onClick={() => window.open('https://drive.google.com/file/d/1zjrWIh-80C6PYFhYWvhysBSaLKKz4MhR/view?usp=drive_link', '_blank')}
                >
                  <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex justify-center space-x-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/Anandkumae", color: "primary" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/anand-kumar-91461a19a", color: "tech-secondary" },
                { icon: Mail, href: "mailto:anandkumar06091561@gmail.com", color: "accent" }
              ].map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  className={`text-muted-foreground hover:text-${color} transition-colors p-3 hover:bg-${color}/10 rounded-full group`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [20, 0, 10, 0],
        }}
        transition={{ 
          opacity: { delay: 2, duration: 0.8 },
          y: { delay: 2.5, duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;