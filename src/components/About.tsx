import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Browser Team Developer",
      description: "Working with the Browser team to enhance web and mobile web experiences"
    },
    {
      icon: Zap,
      title: "Performance Expert",
      description: "Specializing in LCP and CLS improvements for optimal page performance"
    },
    {
      icon: Users,
      title: "Cross-functional Collaboration",
      description: "Experience working closely with backend and product teams"
    },
    {
      icon: Target,
      title: "Project Leadership",
      description: "Setting up projects from scratch and owning technical responsibilities"
    }
  ];

  const technologies = [
    "TypeScript", "JavaScript", "React.js", "Node.js", 
    "PWA", "Redux", "Recoil", "Performance Optimization"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating performant, user-centric web applications and optimizing the modern web experience.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div className="space-y-6">
              <Card className="shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I am working with the Browser team as a front-end developer. I own responsibility to improve and maintain page performance of Web and Mobweb. I have worked on LCP and CLS improvement of web pages.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I have expertise in TypeScript, JavaScript, Node.js, React.js, PWA, Redux, and Recoil. I have experience in setting up projects from scratch and working closely with backend and product teams.
                  </p>
                </CardContent>
              </Card>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Key Highlights</h3>
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-hover transition-smooth hover-lift"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <highlight.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;