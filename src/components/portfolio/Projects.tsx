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
      title: 'Event-Booking Api',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop',
      technologies: ['JWT', 'Node.js', 'JavaScript', 'RESTful API', 'Docker'],
      category: 'fullstack' as const,
      githubUrl: 'https://github.com/Anandkumae/event-booking_back',
      featured: true,
    },
    {
      title: 'Adaptive Traffic System',
      description: 'Machine learning model for image classification using TensorFlow and Python. Achieved 95% accuracy on custom datasets and classify the vehicles based on training',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'OpenCV', 'Docker'],
      category: 'ml' as const,
      liveUrl:'https://adaptivetraffic1-app.streamlit.app/',
      githubUrl: 'https://github.com/Anandkumae/Adaptivetraffic1-app',
    },
    {
      title: 'MLAPI System For Loan',
      description: 'API system built using fastapi as backened and trained on s reallife datasets for tarining and can be visualized for predictions',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Python', 'Cloud', 'Pytorch', 'JWT', 'Jest'],
      category: 'backend' as const,
      liveUrl:'https://mlapi-loan-9.onrender.com',
      githubUrl: 'https://github.com/Anandkumae/MLAPI_Loan',
    },
    {
      title: 'Smart Ingredient Watchdog',
      description: 'Interactive dashboard built with streamlit and OCR for visualizing complex datasets. Features real-time updates and responses.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Python', 'Tesseract OCR', 'spaCy,scikit-learn', 'streamlit'],
      category: 'frontend' as const,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Anandkumae/smartingredientswatchdog1',
    },
    {
      title: 'Medical Chatbot',
      description: 'Machine learning pipeline for knowing the kind of problems are suffering with and give proper solutions.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'streamlit'],
      category: 'ml' as const,
      liveUrl:'https://medical-chatbot-iilc.onrender.com',
      githubUrl: 'https://github.com/Anandkumae/medical_chatbot',
    },
    {
      title: 'Legal buddy chat-App',
      description: 'Modern chat application built exclusively for the practicing lawyers for the historical decisions made earlier',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
      technologies: ['Sreamlit', 'FastAPI', 'Mistarl', 'Render'],
      category: 'fullstack' as const,
      liveUrl: 'https://legalbuddy-7x5xxdptt64jcwgm4ccatm.streamlit.app',
      githubUrl: 'https://github.com/Anandkumae/legal_buddy',
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
