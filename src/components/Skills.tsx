import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Globe, 
  Database, 
  Zap, 
  Layers, 
  Palette,
  Server,
  BarChart3
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["TypeScript", "JavaScript", "React.js", "HTML5", "CSS3", "JSX"],
      color: "text-blue-600"
    },
    {
      title: "State Management & PWA",
      icon: Layers,
      skills: ["Redux", "Recoil", "PWA", "Service Workers"],
      color: "text-purple-600"
    },
    {
      title: "Backend & Database",
      icon: Server,
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
      color: "text-green-600"
    },
    {
      title: "Styling & Design",
      icon: Palette,
      skills: ["CSS", "SCSS", "Tailwind CSS", "Responsive Design"],
      color: "text-pink-600"
    },
    {
      title: "Build Tools & DevOps",
      icon: Globe,
      skills: ["Webpack", "Vite", "Git", "npm", "Deployment"],
      color: "text-orange-600"
    },
    {
      title: "Performance Optimization",
      icon: Zap,
      skills: ["LCP Improvements", "CLS Optimization", "Core Web Vitals", "Page Speed"],
      color: "text-yellow-600"
    }
  ];

  const coreExpertise = [
    "Performance Optimization (LCP, CLS)",
    "Modern Frontend Architecture",
    "Cross-functional Team Collaboration",
    "Project Setup from Scratch",
    "Browser Performance Analysis"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, performant web applications with focus on user experience and optimization.
            </p>
          </div>

          {/* Core Expertise Highlight */}
          <Card className="shadow-card mb-12 bg-gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Core Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {coreExpertise.map((skill) => (
                  <Badge
                    key={skill}
                    className="px-3 py-2 bg-primary text-primary-foreground hover:bg-primary-hover"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-smooth hover-lift"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-primary/10 rounded-lg ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="shadow-card bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Currently Focused On</h3>
                <p className="text-muted-foreground">
                  Working with the Browser team to improve web and mobile web page performance, 
                  specifically focusing on <span className="font-semibold text-primary">Largest Contentful Paint (LCP)</span> and 
                  <span className="font-semibold text-primary"> Cumulative Layout Shift (CLS)</span> optimizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;