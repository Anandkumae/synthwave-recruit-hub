import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'ml' | 'fullstack';
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  category, 
  liveUrl, 
  githubUrl,
  featured = false 
}: ProjectCardProps) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'frontend': return 'text-tech-primary border-tech-primary/20 bg-tech-primary/10';
      case 'backend': return 'text-tech-secondary border-tech-secondary/20 bg-tech-secondary/10';
      case 'ml': return 'text-tech-tertiary border-tech-tertiary/20 bg-tech-tertiary/10';
      case 'fullstack': return 'text-accent border-accent/20 bg-accent/10';
      default: return 'text-primary border-primary/20 bg-primary/10';
    }
  };

  return (
    <div className={`group glass-card overflow-hidden hover-glow-primary transition-all duration-300 ${
      featured ? 'md:col-span-2 glow-primary' : ''
    }`}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <Badge className={getCategoryColor(category)}>
            {category.toUpperCase()}
          </Badge>
        </div>

        {/* Action buttons overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <Button 
              size="icon" 
              variant="secondary" 
              className="w-8 h-8"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
          {githubUrl && (
            <Button 
              size="icon" 
              variant="secondary" 
              className="w-8 h-8"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="text-xs border-muted-foreground/20 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <Button 
              size="sm" 
              className="flex-1 bg-primary hover:bg-primary-glow"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <Eye className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;