import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Calendar, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: '🎯', label: 'Projects Completed', value: '15+' },
    { icon: '🏆', label: 'Hackathons Won', value: '3' },
    { icon: '📚', label: 'Certifications', value: '8+' },
    { icon: '⭐', label: 'GitHub Stars', value: '200+' },
  ];

  const journey = [
    {
      year: '2023',
      title: 'Started Computer Engineering',
      description: 'Began my journey in Computer Engineering at Sinhgad College of Engineering, diving deep into programming fundamentals and data structures.',
      tech: ['C', 'Python', 'Mathematics']
    },
    {
      year: '2024',
      title: 'Discovered Machine Learning',
      description: 'Fell in love with AI/ML and started building projects with TensorFlow and scikit-learn.',
      tech: ['TensorFlow', 'Pandas', 'NumPy', 'Jupyter']
    },
    {
      year: '2024',
      title: 'Full-Stack Development',
      description: 'Expanded into web development, building end-to-end applications with modern frameworks.',
      tech: ['React', 'Node.js', 'Docker', 'AWS']
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Computer Engineering student building the future of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card hover-glow-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl font-bold text-primary-foreground"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    A
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">Anand Kumar</h3>
                    <p className="text-muted-foreground">Computer Engineering Student</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Pune, India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a Computer Engineering student with a passion for building intelligent 
                    and scalable technology solutions. My expertise spans across Machine Learning, 
                    Backend Development, and Automation.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-sm">Sinhgad College of Engineering, Pune • Expected 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">2+ years of coding experience</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {['Problem Solving', 'Team Leadership', 'Research', 'Innovation'].map((strength) => (
                      <Badge 
                        key={strength}
                        variant="outline" 
                        className="border-primary/20 text-primary hover:bg-primary/10"
                      >
                        {strength}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="w-full mt-6 bg-primary hover:bg-primary-glow"
                    onClick={() => window.open('https://drive.google.com/file/d/1zjrWIh-80C6PYFhYWvhysBSaLKKz4MhR/view?usp=drive_link', '_blank')}
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Download Full Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass-card hover-glow-primary text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <div className="text-2xl font-bold gradient-text mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Learning Journey */}
            <Card className="glass-card hover-glow-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold gradient-text mb-6">Learning Journey</h3>
                <div className="space-y-6">
                  {journey.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      className="relative pl-8 border-l-2 border-primary/20 last:border-l-0"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-bold">{milestone.year}</span>
                          <h4 className="font-semibold">{milestone.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {milestone.tech.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="outline" 
                              className="text-xs border-muted-foreground/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;