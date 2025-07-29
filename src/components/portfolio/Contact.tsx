import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'anandkumar06091561@gmail.com',
      href: 'mailto:anandkumar06091561@gmail.com',
      color: 'tech-primary'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Pune, India',
      href: '#',
      color: 'tech-tertiary'
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Anandkumae', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="glass-card hover-glow-primary group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <a href={info.href} className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-${info.color}/10 border border-${info.color}/20 group-hover:bg-${info.color}/20 transition-colors`}>
                        <info.icon className={`w-6 h-6 text-${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 animate-scale-in">
              <h3 className="text-lg font-semibold mb-4 gradient-text">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 rounded-lg bg-muted/20 border border-muted-foreground/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card animate-slide-in-right">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50 border-muted-foreground/20 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input/50 border-muted-foreground/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 border-muted-foreground/20 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-input/50 border-muted-foreground/20 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground glow-primary hover-glow-primary"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;