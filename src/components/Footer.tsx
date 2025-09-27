import { ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Vikas Gupta. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => window.open("https://www.linkedin.com/in/vikas-gupta-875861240/", "_blank")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              LinkedIn
              <ExternalLink className="h-3 w-3" />
            </button>
            
            <button
              onClick={() => window.open("mailto:796vikasgupta@gmail.com")}
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Email
            </button>

            <button
              onClick={() => {
                const element = document.getElementById("hero");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              Back to Top
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Frontend Developer specializing in React.js, TypeScript, and Performance Optimization
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;