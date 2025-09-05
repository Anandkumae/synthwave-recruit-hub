import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard';
import { Code, Database, Brain, Layers } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'ml', label: 'ML/AI', icon: Brain },
    { id: 'fullstack', label: 'Full Stack', icon: Layers },
  ];

  const projects = [
    {
      title: 'Event Booking API',
      description: 'A comprehensive event management system with user authentication, real-time booking, and payment processing. Built with modern web technologies for scalability and performance.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT Auth', 'Docker'],
      category: 'fullstack' as const,
      liveUrl: 'https://event-booking-demo.com',
      githubUrl: 'https://github.com/Anandkumae/event-booking_back',
      featured: true
    },
    {
      title: 'Adaptive Traffic System',
      description: 'AI-powered traffic management system that analyzes real-time video feeds to optimize traffic flow and reduce congestion using computer vision and deep learning.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'Streamlit'],
      category: 'ml' as const,
      liveUrl: 'https://adaptivetraffic1-app.streamlit.app/',
      githubUrl: 'https://github.com/Anandkumae/Adaptivetraffic1-app',
      featured: true
    },
    {
      title: 'Loan Prediction API',
      description: 'A robust machine learning API for loan approval predictions, featuring real-time scoring and comprehensive visualization dashboard for insights.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Python', 'FastAPI', 'Scikit-learn', 'JWT', 'Docker'],
      category: 'backend' as const,
      liveUrl: 'https://mlapi-loan-9.onrender.com',
      githubUrl: 'https://github.com/Anandkumae/MLAPI_Loan',
      featured: true
    },
    {
      title: 'Smart Ingredient Scanner',
      description: 'Mobile application that analyzes food product ingredients using OCR and provides health insights and allergy warnings in real-time.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Python', 'Tesseract OCR', 'spaCy', 'Streamlit', 'FastAPI'],
      category: 'frontend' as const,
      liveUrl: 'https://smart-ingredient-scanner.vercel.app',
      githubUrl: 'https://github.com/Anandkumae/smartingredientswatchdog1',
      featured: true
    },
    {
      title: 'Healthcare Assistant',
      description: 'AI-powered medical chatbot that provides preliminary diagnosis and connects users with healthcare professionals based on symptoms analysis.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop',
      technologies: ['Python', 'NLP', 'Scikit-learn', 'FastAPI', 'Streamlit'],
      category: 'ml' as const,
      liveUrl: 'https://medical-chatbot-iilc.onrender.com',
      githubUrl: 'https://github.com/Anandkumae/medical_chatbot',
      featured: true
    },
    {
      title: 'Legal Assistant AI',
      description: 'Comprehensive legal research tool that analyzes case law and provides relevant precedents using natural language processing.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
      technologies: ['Python', 'Mistral AI', 'FastAPI', 'Streamlit', 'Docker'],
      category: 'fullstack' as const,
      liveUrl: 'https://legalbuddy-7x5xxdptt64jcwgm4ccatm.streamlit.app',
      githubUrl: 'https://github.com/Anandkumae/legal_buddy',
      featured: true
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise across frontend development, backend systems, 
            and machine learning implementations.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`group ${
                activeFilter === filter.id 
                  ? 'bg-primary glow-primary' 
                  : 'border-primary/20 text-muted-foreground hover:text-primary hover:border-primary'
              }`}
            >
              <filter.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* View more projects */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg"
          
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
