import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Developer',
      company: 'ShinnovationCo',
      duration: 'Present',
      location: 'India',
      type: 'Current Position',
      status: 'current',
      description: 'Currently working as a developer, contributing to innovative software solutions and gaining hands-on experience in full-stack development. Collaborating with experienced developers to build scalable applications.',
      achievements: [
        'Contributing to live production applications',
        'Learning advanced development practices and methodologies',
        'Collaborating with senior developers on complex projects',
        'Implementing modern development workflows and best practices'
      ],
      technologies: ['React', 'JavaScript', 'Node.js', 'Git', 'Agile Development'],
      companyLogo: '💡'
    },
    {
      position: 'AI & ML Intern',
      company: 'Edunet Foundation',
      duration: '2 Months',
      location: 'India',
      type: 'Internship',
      status: 'completed',
      description: 'Completed a comprehensive 2-month internship focusing on Artificial Intelligence and Machine Learning. Gained practical experience in data science, model development, and AI implementation.',
      achievements: [
        'Developed machine learning models using Python and popular ML libraries',
        'Worked on real-world datasets for predictive analytics',
        'Implemented AI algorithms for pattern recognition and data analysis',
        'Completed projects on supervised and unsupervised learning techniques',
        'Gained expertise in data preprocessing and feature engineering'
      ],
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter Notebook'],
      companyLogo: '🧠'
    },
    {
      position: 'Promotional Intern & Developer',
      company: 'GoSeeko',
      duration: '2 Months',
      location: 'India',
      type: 'Internship',
      status: 'completed',
      description: 'Completed a comprehensive 2-month dual-role internship as promotional intern and developer. Gained valuable experience in digital marketing strategies while contributing to software development projects.',
      achievements: [
        'Successfully executed promotional campaigns resulting in increased user engagement',
        'Developed responsive web components and enhanced user interface designs',
        'Collaborated with marketing team to implement growth strategies',
        'Contributed to product development and feature enhancement initiatives',
        'Gained practical experience in customer acquisition and retention strategies'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Digital Marketing', 'Web Development'],
      companyLogo: '🎯'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'internship': return 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400';
      case 'current position': return 'bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400 animate-pulse';
      case 'freelance': return 'bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400';
      default: return 'bg-accent/10 text-accent border-accent/20';
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'current') {
      return <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block mr-2"></div>;
    }
    return <div className="w-2 h-2 bg-gray-400 rounded-full inline-block mr-2"></div>;
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
                        <Badge className={`mt-3 ${getTypeColor(experience.type)} font-medium`}>
                          {getStatusIcon(experience.status)}
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
              <Button 
                className="bg-primary hover:bg-primary-glow group"
                onClick={() => window.open('https://www.linkedin.com/in/anandkumae/', '_blank')}
              >
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