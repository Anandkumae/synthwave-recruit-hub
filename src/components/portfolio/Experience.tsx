import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Machine Learning Intern',
      company: 'Tech Innovations Pvt Ltd',
      duration: 'Jun 2024 - Aug 2024',
      location: 'Mumbai, India',
      type: 'Internship',
      description: 'Developed and deployed machine learning models for predictive analytics, improving accuracy by 25%. Worked with large datasets and implemented automated data pipelines.',
      achievements: [
        'Built predictive models using TensorFlow and scikit-learn',
        'Deployed models to production using Docker and AWS',
        'Improved model accuracy by 25% through feature engineering',
        'Automated data preprocessing pipelines'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'PostgreSQL'],
      companyLogo: '🤖'
    },
    {
      position: 'Backend Developer Intern',
      company: 'StartupXYZ',
      duration: 'Dec 2023 - Mar 2024',
      location: 'Remote',
      type: 'Internship',
      description: 'Designed and implemented RESTful APIs for a fintech application. Optimized database queries resulting in 40% performance improvement.',
      achievements: [
        'Built scalable REST APIs serving 10k+ requests daily',
        'Optimized database queries reducing response time by 40%',
        'Implemented JWT authentication and authorization',
        'Wrote comprehensive unit and integration tests'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Jest'],
      companyLogo: '🚀'
    },
    {
      position: 'Full Stack Developer',
      company: 'Freelance Projects',
      duration: 'Jan 2023 - Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Developed complete web applications for small businesses and startups. Managed projects from conception to deployment.',
      achievements: [
        'Delivered 8+ complete web applications',
        'Managed end-to-end project lifecycle',
        'Achieved 95% client satisfaction rate',
        'Implemented automated deployment pipelines'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      companyLogo: '💼'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'internship': return 'bg-tech-primary/10 text-tech-primary border-tech-primary/20';
      case 'freelance': return 'bg-tech-secondary/10 text-tech-secondary border-tech-secondary/20';
      default: return 'bg-accent/10 text-accent border-accent/20';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Experience & Internships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey building real-world solutions and gaining industry experience
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.position + experience.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-glow-primary group">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Company Info */}
                    <div className="lg:col-span-1 space-y-4">
                      <motion.div 
                        className="text-4xl mb-2 group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 10 }}
                      >
                        {experience.companyLogo}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg gradient-text">
                          {experience.company}
                        </h3>
                        <div className="space-y-2 mt-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                        </div>
                        <Badge className={`mt-3 ${getTypeColor(experience.type)}`}>
                          {experience.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Role Details */}
                    <div className="lg:col-span-3 space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-2">{experience.position}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h5 className="font-semibold mb-3 text-primary">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievement}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.2) + (achievementIndex * 0.1), duration: 0.5 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold mb-3 text-primary">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: (index * 0.2) + (techIndex * 0.05), duration: 0.3 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="border-muted-foreground/20 hover:border-primary hover:text-primary transition-colors"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold gradient-text mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <Button className="bg-primary hover:bg-primary-glow group">
                <ExternalLink className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                View My LinkedIn
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;