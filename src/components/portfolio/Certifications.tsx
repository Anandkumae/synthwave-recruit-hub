import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Calendar, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      date: 'Sep 2024',
      level: 'Advanced',
      credentialId: 'ABC123XYZ',
      skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Python'],
      description: 'Comprehensive specialization covering supervised learning, unsupervised learning, and neural networks.',
      logo: '🎓',
      verifyUrl: '#'
    },
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: 'Jul 2024',
      level: 'Professional',
      credentialId: 'AWS-DEV-2024',
      skills: ['AWS', 'Cloud Computing', 'DevOps', 'Serverless'],
      description: 'Validates expertise in developing and maintaining applications on AWS platform.',
      logo: '☁️',
      verifyUrl: '#'
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google (Coursera)',
      date: 'Mar 2024',
      level: 'Professional',
      credentialId: 'GOOGLE-DA-2024',
      skills: ['Data Analysis', 'SQL', 'Tableau', 'R Programming'],
      description: 'Comprehensive program covering data analysis process using industry-standard tools.',
      logo: '📊',
      verifyUrl: '#'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'Jan 2024',
      level: 'Associate',
      credentialId: 'DOCKER-2024',
      skills: ['Docker', 'Containerization', 'DevOps', 'Kubernetes'],
      description: 'Demonstrates skills in Docker containerization and orchestration technologies.',
      logo: '🐳',
      verifyUrl: '#'
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'Dec 2023',
      level: 'Advanced',
      credentialId: 'REACT-COMP-2023',
      skills: ['React', 'JavaScript', 'Frontend Development', 'Redux'],
      description: 'In-depth course covering React ecosystem including hooks, context, and state management.',
      logo: '⚛️',
      verifyUrl: '#'
    },
    {
      title: 'Python for Data Science and AI',
      issuer: 'IBM (Coursera)',
      date: 'Oct 2023',
      level: 'Intermediate',
      credentialId: 'IBM-PY-2023',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Science'],
      description: 'Foundational course for using Python in data science and artificial intelligence applications.',
      logo: '🐍',
      verifyUrl: '#'
    }
  ];

  const achievements = [
    {
      title: 'Best Innovation Award',
      event: 'TechFest 2024',
      description: 'Won first place for developing an AI-powered healthcare diagnostic tool',
      date: 'Mar 2024',
      icon: '🏆'
    },
    {
      title: 'Hackathon Winner',
      event: 'CodeChef Campus Chapter',
      description: 'Led team to victory in 48-hour web development challenge',
      date: 'Nov 2023',
      icon: '🥇'
    },
    {
      title: 'Research Paper Published',
      event: 'IEEE Conference',
      description: 'Co-authored paper on "Machine Learning in Predictive Healthcare Analytics"',
      date: 'Aug 2023',
      icon: '📄'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'advanced': return 'bg-tech-primary/10 text-tech-primary border-tech-primary/20';
      case 'professional': return 'bg-tech-secondary/10 text-tech-secondary border-tech-secondary/20';
      case 'intermediate': return 'bg-tech-tertiary/10 text-tech-tertiary border-tech-tertiary/20';
      default: return 'bg-accent/10 text-accent border-accent/20';
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">
            🏆 Recent Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card hover-glow-primary h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-primary font-semibold mb-2">{achievement.event}</p>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {achievement.date}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-glow-primary h-full group">
                <CardContent className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <motion.div 
                      className="text-3xl group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 10 }}
                    >
                      {cert.logo}
                    </motion.div>
                    <Badge className={getLevelColor(cert.level)}>
                      {cert.level}
                    </Badge>
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                  </div>

                  {/* Date and Credential */}
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      Earned: {cert.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3 h-3" />
                      ID: {cert.credentialId}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-primary">Skills Covered:</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="outline" 
                          className="text-xs border-muted-foreground/20 hover:border-primary hover:text-primary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Verify Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary/20 text-primary hover:bg-primary/10 group/btn"
                    >
                      <ExternalLink className="mr-2 w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                      Verify Certificate
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Certifications', value: '8+', icon: '🎯' },
            { label: 'Learning Hours', value: '500+', icon: '⏱️' },
            { label: 'Skills Mastered', value: '25+', icon: '💪' },
            { label: 'Platforms', value: '6', icon: '🌐' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass-card text-center hover-glow-primary">
                <CardContent className="p-6">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;