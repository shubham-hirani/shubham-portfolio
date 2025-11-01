import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Shubham Hirani
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent">
              Software Engineer II
            </h2>
          </div>

          {/* Summary */}
          <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Experienced Python & Node.js Developer with 3.5 years of expertise in building 
            scalable backend systems and AI-driven applications. Specialized in creating 
            robust, production-ready solutions that drive innovation.
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground">
            <a 
              href="mailto:shubhamhirani27@gmail.com" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              shubhamhirani27@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91 63556-21056
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Ahmedabad, Gujarat
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              asChild
            >
              <a href="https://www.linkedin.com/in/shubhamhirani/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
            >
              <a href="https://github.com/shubham-hirani/" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              asChild
            >
              <a href="mailto:shubhamhirani27@gmail.com">
                <Mail className="h-5 w-5" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
