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
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      category: 'fullstack' as const,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      title: 'AI Image Recognition',
      description: 'Machine learning model for image classification using TensorFlow and Python. Achieved 95% accuracy on custom dataset with real-time prediction API.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'OpenCV', 'Docker'],
      category: 'ml' as const,
      githubUrl: 'https://github.com',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API built with Express.js and MongoDB. Includes JWT authentication, role-based access control, and comprehensive testing suite.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Jest'],
      category: 'backend' as const,
      githubUrl: 'https://github.com',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard built with React and D3.js for visualizing complex datasets. Features real-time updates and responsive design.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['React', 'D3.js', 'TypeScript', 'Tailwind'],
      category: 'frontend' as const,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Machine learning pipeline for predictive analytics using scikit-learn and pandas. Processes large datasets to generate business insights.',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'SQL', 'AWS'],
      category: 'ml' as const,
      githubUrl: 'https://github.com',
    },
    {
      title: 'Real-time Chat App',
      description: 'Modern chat application with React frontend and Socket.io backend. Features include real-time messaging, file sharing, and user presence.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
      category: 'fullstack' as const,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
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