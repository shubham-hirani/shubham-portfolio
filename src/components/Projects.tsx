import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MessageSquare } from "lucide-react";

const projects = [
  {
    title: "MCP Chatbot",
    date: "June 2025",
    description: "Designed and developed an AI-powered chatbot using OpenAI and Groq LLMs to enable advanced conversational capabilities. Implemented browser automation workflows to support complex user queries, advanced use-case execution, and intelligent task handling.",
    technologies: ["OpenAI", "Groq", "Browser Automation", "AI/ML"],
    icon: MessageSquare,
  },
  {
    title: "Gemma Chatbot",
    date: "June 2025",
    description: "Built an AI-powered chatbot using local LLM to answer user questions based on provided data. Utilized the LangChain framework and supported Streamlit for the user interface, enabling intelligent data-driven conversations.",
    technologies: ["LangChain", "Streamlit", "Local LLM", "Python"],
    icon: Sparkles,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Innovative AI solutions showcasing cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-base mb-4 flex-1">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
