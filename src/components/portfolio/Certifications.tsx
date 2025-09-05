import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Calendar, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Deep Learning Certification',
      issuer: 'IIT Kharagpur',
      date: '2024',
      level: 'Advanced',
      credentialId: 'IIT-KGP-DL-2024',
      skills: ['Neural Networks', 'Computer Vision', 'NLP', 'TensorFlow', 'PyTorch'],
      description: 'Mastery in deep learning concepts, including CNN, RNN, GANs, and their applications in computer vision and natural language processing.',
      logo: '🧠',
      verifyUrl: 'https://drive.google.com/file/d/1Aqg_3FEhRleSYi_RMEjXrlnZCuKgAntg/view'
    },
    {
      title: 'Machine Learning Certification',
      issuer: 'IIT Kharagpur',
      date: '2024',
      level: 'Advanced',
      credentialId: 'IIT-KGP-ML-2024',
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Python', 'Scikit-learn', 'Model Evaluation'],
      description: 'Comprehensive training in machine learning algorithms, model selection, and evaluation techniques for real-world data science applications.',
      logo: '🤖',
      verifyUrl: 'https://drive.google.com/file/d/1iCxZrKyblnFySiQw-GSHa5t7xdZXSbpc/view'
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
                      onClick={() => window.open(cert.verifyUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                      View Certificate
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
            { label: 'Certifications', value: '2', icon: '🎯' },
            { label: 'Learning Hours', value: '200+', icon: '⏱️' },
            { label: 'Skills Mastered', value: '15+', icon: '💪' },
            { label: 'IIT Programs', value: '2', icon: '🏛️' }
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