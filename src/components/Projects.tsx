import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageSquare, Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    title: "MCP Chatbot",
    date: "June 2025",
    description: "Designed and developed an AI-powered chatbot using OpenAI and Groq LLMs to enable advanced conversational capabilities. Implemented browser automation workflows to support complex user queries, advanced use-case execution, and intelligent task handling. Features multi-LLM integration for enhanced response quality and automated workflow execution.",
    technologies: ["OpenAI", "Groq", "Browser Automation", "Python", "AI/ML"],
    icon: MessageSquare,
    github: "https://github.com/shubham-hirani/mcp-chatbot",
    demo: "",
  },
  {
    title: "Gemma Chatbot",
    date: "June 2025",
    description: "An AI-driven chatbot that utilizes local LLMs to provide answers based on data. Utilized the LangChain framework and supported Streamlit for the user interface. Built an AI-powered chatbot using local LLM to answer user questions based on provided data, enabling intelligent data-driven conversations with enhanced privacy and offline capabilities.",
    technologies: ["LangChain", "Streamlit", "Local LLM", "Python", "RAG"],
    icon: Sparkles,
    github: "https://github.com/shubham-hirani/gemma-chatbot",
    demo: "",
  },
];

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div
          ref={titleRef}
          className={`flex flex-col items-center text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Innovative AI-powered solutions showcasing cutting-edge LLM technologies
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const delay = index === 0 ? "" : "animation-delay-200";
            return (
              <Card
                key={index}
                className={`hover:shadow-xl hover:-translate-y-3 transition-all duration-500 flex flex-col group ${delay} ${
                  cardsVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 bg-accent/10 rounded-lg transition-all group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-base mb-4 flex-1">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-accent hover:text-accent-foreground transition-all"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="hover:scale-105 transition-transform"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
