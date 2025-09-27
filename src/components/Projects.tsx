import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import barosaProject from "@/assets/barosa-project.jpg";
import githubFinderProject from "@/assets/github-finder-project.jpg";
import pomodoroProject from "@/assets/pomodoro-project.jpg";
import quizProject from "@/assets/quiz-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Barosa (Antique Watches Marketplace)",
      description: "A community-driven platform for antique watch sellers and collectors.",
      features: [
        "Real-time Chatting",
        "DocuSign Integration for secure transactions",
        "Friends Invite system",
        "Social Features: Follow, Like, Comment, Wishlist",
        "User-Centric Secure Design"
      ],
      skills: ["TypeScript", "Node.js", "MongoDB", "JavaScript", "React.js", "Express.js", "Webpack"],
      image: barosaProject,
      links: {
        live: null,
        github: null
      }
    },
    {
      title: "GitHub Users Finder",
      description: "A React app using GitHub API to search users by name and bio. Shows last 5 repositories and other user details.",
      features: [
        "GitHub API Integration",
        "User search by name and bio",
        "Repository listings",
        "User profile details",
        "Responsive design"
      ],
      skills: ["React.js", "GitHub API", "JavaScript"],
      image: githubFinderProject,
      links: {
        live: "https://friendly-colden-0ea5ef.netlify.app/",
        github: null
      }
    },
    {
      title: "Pomodoro Clock",
      description: "A React app implementing the Pomodoro technique with a to-do list. Styled fully with CSS.",
      features: [
        "Pomodoro Timer functionality",
        "To-do list integration",
        "Custom CSS styling",
        "Productivity focused design",
        "Timer notifications"
      ],
      skills: ["React.js", "CSS", "JavaScript"],
      image: pomodoroProject,
      links: {
        live: "https://fervent-minsky-803bd0.netlify.app/",
        github: null
      }
    },
    {
      title: "Quiz App",
      description: "A quiz app with 15 timed multiple-choice questions (15 minutes). Includes hints and 50-50 option. Shows score at the end.",
      features: [
        "15 timed multiple-choice questions",
        "Hints and 50-50 lifeline",
        "Score tracking and results",
        "Responsive design",
        "Interactive UI elements"
      ],
      skills: ["React.js", "SCSS", "HTML", "JSX", "Frontend Development"],
      image: quizProject,
      links: {
        live: "https://ecstatic-wilson-d05211.netlify.app/play/quiz",
        github: null
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web development and performance optimization.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-smooth hover-lift overflow-hidden group"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    loading="lazy"
                  />
                </div>

                <CardContent className="p-6">
                  {/* Project Title & Description */}
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-muted-foreground/70">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {project.skills.slice(0, 4).map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.skills.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    {project.links.live && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.links.live!, "_blank")}
                        className="flex-1"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.links.github!, "_blank")}
                        className="flex-1"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {!project.links.live && !project.links.github && (
                      <div className="flex-1 text-center">
                        <span className="text-sm text-muted-foreground">
                          Private Repository
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;