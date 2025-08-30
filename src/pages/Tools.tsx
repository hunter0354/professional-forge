import { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

interface Tool {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  category: string;
}

const tools: Tool[] = [
  {
    id: "1",
    title: "Task Management Dashboard",
    description: "A modern task management application with real-time collaboration features.",
    longDescription: "Built with React and Node.js, this dashboard provides teams with powerful project management capabilities including real-time updates, drag-and-drop task organization, and comprehensive reporting features.",
    technologies: ["React", "Node.js", "TypeScript", "WebSocket", "MongoDB"],
    githubUrl: "https://github.com/username/task-dashboard",
    liveUrl: "https://task-dashboard-demo.com",
    imageUrl: "/api/placeholder/600/400",
    featured: true,
    category: "Web App"
  },
  {
    id: "2",
    title: "API Gateway Service",
    description: "A high-performance API gateway with rate limiting and authentication.",
    longDescription: "Microservices architecture solution built with Go, featuring intelligent load balancing, comprehensive monitoring, and advanced security features for enterprise-grade applications.",
    technologies: ["Go", "Redis", "Docker", "Kubernetes", "gRPC"],
    githubUrl: "https://github.com/username/api-gateway",
    imageUrl: "/api/placeholder/600/400",
    featured: true,
    category: "Backend"
  },
  {
    id: "3",
    title: "Data Visualization Library",
    description: "A lightweight, customizable charting library for modern web applications.",
    longDescription: "TypeScript-first data visualization library that provides beautiful, interactive charts with minimal setup. Optimized for performance and accessibility with extensive customization options.",
    technologies: ["TypeScript", "D3.js", "Canvas API", "WebGL"],
    githubUrl: "https://github.com/username/viz-library",
    liveUrl: "https://viz-library-docs.com",
    imageUrl: "/api/placeholder/600/400",
    featured: false,
    category: "Library"
  },
  {
    id: "4",
    title: "Mobile Analytics SDK",
    description: "Cross-platform analytics SDK for mobile applications.",
    longDescription: "Comprehensive analytics solution for React Native and Flutter applications, providing detailed user behavior insights, crash reporting, and performance monitoring.",
    technologies: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase"],
    githubUrl: "https://github.com/username/mobile-analytics",
    imageUrl: "/api/placeholder/600/400",
    featured: false,
    category: "Mobile"
  },
  {
    id: "5",
    title: "CI/CD Pipeline Optimizer",
    description: "Tool for optimizing continuous integration and deployment workflows.",
    longDescription: "Python-based automation tool that analyzes and optimizes CI/CD pipelines, reducing build times by up to 60% while maintaining reliability and security standards.",
    technologies: ["Python", "GitHub Actions", "Jenkins", "Docker", "AWS"],
    githubUrl: "https://github.com/username/cicd-optimizer",
    imageUrl: "/api/placeholder/600/400",
    featured: false,
    category: "DevOps"
  },
  {
    id: "6",
    title: "Real-time Chat Engine",
    description: "Scalable real-time messaging infrastructure for web and mobile apps.",
    longDescription: "High-performance messaging system built with WebSockets and Redis, supporting thousands of concurrent connections with features like message encryption, file sharing, and bot integration.",
    technologies: ["Node.js", "WebSocket", "Redis", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/username/chat-engine",
    liveUrl: "https://chat-engine-demo.com",
    imageUrl: "/api/placeholder/600/400",
    featured: true,
    category: "Backend"
  }
];

const categories = ["All", "Web App", "Backend", "Library", "Mobile", "DevOps"];

const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const filteredTools = selectedCategory === "All" 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const featuredTools = filteredTools.filter(tool => tool.featured);
  const otherTools = filteredTools.filter(tool => !tool.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="text-gradient">Tools</span> & Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of technical tools, libraries, and applications I've built
              to solve real-world problems and explore new technologies.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Tools */}
          {featuredTools.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Star className="text-primary" size={24} />
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredTools.map((tool) => (
                  <ToolCard 
                    key={tool.id} 
                    tool={tool}
                    isExpanded={expandedTool === tool.id}
                    onToggle={() => setExpandedTool(expandedTool === tool.id ? null : tool.id)}
                    featured={true}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Tools */}
          {otherTools.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-8">All Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {otherTools.map((tool) => (
                  <ToolCard 
                    key={tool.id} 
                    tool={tool}
                    isExpanded={expandedTool === tool.id}
                    onToggle={() => setExpandedTool(expandedTool === tool.id ? null : tool.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

interface ToolCardProps {
  tool: Tool;
  isExpanded: boolean;
  onToggle: () => void;
  featured?: boolean;
}

const ToolCard = ({ tool, isExpanded, onToggle, featured = false }: ToolCardProps) => {
  return (
    <div className={`glass rounded-lg overflow-hidden hover:shadow-glow transition-smooth group ${
      featured ? 'lg:col-span-1' : ''
    }`}>
      <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
        <img 
          src={tool.imageUrl} 
          alt={tool.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge 
          variant="secondary" 
          className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm"
        >
          {tool.category}
        </Badge>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
          {tool.title}
        </h3>
        
        <p className="text-muted-foreground mb-4">
          {isExpanded ? tool.longDescription : tool.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tool.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Button size="sm" variant="outline" asChild>
              <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
            {tool.liveUrl && (
              <Button size="sm" asChild>
                <a href={tool.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onToggle}
            className="text-muted-foreground hover:text-foreground"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
