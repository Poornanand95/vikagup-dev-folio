import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Vikas Gupta</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up">
            Frontend Developer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Specializing in <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">TypeScript</span>, and <span className="text-primary font-semibold">Performance Optimization</span>. Currently improving web performance with the Browser team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button
              size="lg"
              onClick={() => window.open("https://www.linkedin.com/in/vikas-gupta-875861240/", "_blank")}
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-hover hover:shadow-hover transition-smooth px-8 py-3"
            >
              Connect on LinkedIn
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-3"
            >
              Learn More About Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-smooth" />
        </button>
      </div>
    </section>
  );
};

export default Hero;