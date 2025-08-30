import { ArrowRight, Github, Linkedin, Mail, Download, Code, Database, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  const skills = [
    { name: "Frontend Development", icon: Globe, description: "React, TypeScript, Next.js, Vue.js" },
    { name: "Backend Development", icon: Database, description: "Node.js, Python, Go, PostgreSQL, MongoDB" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter, iOS, Android" },
    { name: "DevOps & Cloud", icon: Code, description: "AWS, Docker, Kubernetes, CI/CD" },
  ];

  const projects = [
    {
      title: "Task Management Dashboard",
      description: "Real-time collaborative project management platform",
      technologies: ["React", "Node.js", "WebSocket"],
      featured: true
    },
    {
      title: "API Gateway Service",
      description: "High-performance microservices gateway",
      technologies: ["Go", "Redis", "Docker"],
      featured: true
    },
    {
      title: "Mobile Analytics SDK",
      description: "Cross-platform analytics solution",
      technologies: ["React Native", "Firebase"],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm <span className="text-gradient">Alex</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground mt-4">
                  Full-Stack Developer & Technical Architect
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                I craft exceptional digital experiences through innovative web and mobile applications. 
                Passionate about clean code, scalable architecture, and solving complex technical challenges.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/tools">
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </div>

              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="hover:shadow-glow">
                  <Github size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:shadow-glow">
                  <Linkedin size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:shadow-glow">
                  <Mail size={20} />
                </Button>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 gradient-primary rounded-full opacity-20 blur-3xl"></div>
                <div className="relative w-full h-full glass rounded-full p-8 shadow-glow">
                  <div className="w-full h-full bg-gradient-secondary rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-muted-foreground/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specializing in modern technologies and frameworks to build scalable, 
              performant applications across the full technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className="glass rounded-lg p-6 hover:shadow-glow transition-smooth group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of recent projects that demonstrate my technical skills 
              and problem-solving approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="glass rounded-lg p-6 hover:shadow-glow transition-smooth group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-32 bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                  <Code className="text-muted-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/tools">
                View All Projects
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-2xl p-12 shadow-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to discuss new projects 
              and collaboration opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline">
                <Github className="mr-2" size={20} />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;