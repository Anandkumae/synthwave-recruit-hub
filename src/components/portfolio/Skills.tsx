import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      color: 'tech-primary',
      skills: [
        { name: 'React/Next.js', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'Tailwind CSS', level: 88, icon: '🎨' },
        { name: 'Vue.js', level: 75, icon: '💚' },
      ]
    },
    {
      title: 'Backend & APIs',
      color: 'tech-secondary',
      skills: [
        { name: 'Node.js/Express', level: 85, icon: '🟢' },
        { name: 'Python/Django', level: 80, icon: '🐍' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'GraphQL', level: 75, icon: '🚀' },
      ]
    },
    {
      title: 'AI/ML & Data',
      color: 'tech-tertiary',
      skills: [
        { name: 'TensorFlow', level: 78, icon: '🧠' },
        { name: 'Scikit-learn', level: 80, icon: '📊' },
        { name: 'Pandas/NumPy', level: 85, icon: '🐼' },
        { name: 'OpenCV', level: 70, icon: '👁️' },
      ]
    },
  ];

  const tools = [
    'Docker', 'AWS', 'Git', 'GitHub Actions', 'Jest', 'Cypress',
    'Figma', 'Postman', 'MongoDB', 'Redis', 'Webpack', 'Vite'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern technologies with a focus on creating efficient, 
            scalable solutions across the full development stack.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-6 hover-glow-primary animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className={`text-xl font-bold mb-6 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{
                        animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="glass-card p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={tool}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/20 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { number: '3+', label: 'Years Experience', icon: '⏱️' },
            { number: '20+', label: 'Projects Completed', icon: '🚀' },
            { number: '5+', label: 'Technologies Mastered', icon: '💻' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center glass-card p-6 hover-glow-primary animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;