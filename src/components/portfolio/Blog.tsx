import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Exploring best practices for structuring large React applications with TypeScript, including proper component organization and type safety strategies.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'Architecture'],
    },
    {
      title: 'Machine Learning Model Deployment with Docker',
      excerpt: 'A comprehensive guide to containerizing and deploying machine learning models in production environments using Docker and FastAPI.',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'ML/AI',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&h=300&fit=crop',
      tags: ['Docker', 'ML', 'FastAPI', 'DevOps'],
    },
    {
      title: 'Optimizing Database Queries for Better Performance',
      excerpt: 'Deep dive into PostgreSQL query optimization techniques, including indexing strategies and query plan analysis for improved application performance.',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=300&fit=crop',
      tags: ['PostgreSQL', 'Performance', 'Database'],
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'text-tech-primary border-tech-primary/20 bg-tech-primary/10';
      case 'Backend': return 'text-tech-secondary border-tech-secondary/20 bg-tech-secondary/10';
      case 'ML/AI': return 'text-tech-tertiary border-tech-tertiary/20 bg-tech-tertiary/10';
      default: return 'text-primary border-primary/20 bg-primary/10';
    }
  };

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Latest Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing insights and experiences from my journey in software development, 
            machine learning, and technology trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.title}
              className="glass-card group hover-glow-primary overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-muted-foreground/20 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;