import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-down">
              Shubham Hirani
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent animate-fade-up animation-delay-200">
              Software Engineer II
            </h2>
          </div>

          {/* Summary */}
          <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in animation-delay-400">
            Experienced Python Developer specializing in building and optimizing backend systems and
            smart AI-driven applications. Expert in Gen AI, OpenAI, Google Gemini, and Anthropic LLMs
            with proven ability to enhance application performance, deliver scalable maintainable code,
            and implement robust production-ready solutions across microservices architectures.
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground animate-fade-up animation-delay-600">
            <a
              href="mailto:shubhamhirani27@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-all hover:scale-105"
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
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-scale-in animation-delay-800">
            <Button
              variant="linkedin"
              size="lg"
              asChild
            >
              <a href="https://www.linkedin.com/in/shubhamhirani/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="github"
              size="lg"
              asChild
            >
              <a href="https://github.com/shubham-hirani/" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="gmail"
              size="lg"
              asChild
            >
              <a href="mailto:shubhamhirani27@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button
              variant="default"
              size="lg"
              asChild
            >
              <a href="/ShubhamHiraniResume.pdf" download className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
