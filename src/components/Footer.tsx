import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shubham Hirani</h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer II passionate about building scalable backend systems 
              and AI-driven applications that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#experience" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Experience
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Projects
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/shubhamhirani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/shubham-hirani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:shubhamhirani27@gmail.com"
                className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Shubham Hirani. Built with 
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> 
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
