import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Server,
  FileCode,
  Flame,
  Zap,
  Package,
  HardDrive,
  Search,
  Box,
  GitBranch,
  Brain,
  Sparkles,
  Star,
  Bot,
  Code,
  Globe,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skillCategories = [
  {
    title: "AI & Automation",
    icon: Brain,
    skills: [
      { name: "Gen AI", icon: Brain },
      { name: "OpenAI", icon: Sparkles },
      { name: "Google Gemini", icon: Star },
      { name: "Anthropic", icon: Bot },
      { name: "BeautifulSoup", icon: Code },
      { name: "Selenium", icon: Globe },
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: [
      { name: "Python", icon: Code2 },
      { name: "Node.js", icon: Server },
      { name: "TypeScript", icon: FileCode },
      { name: "Flask", icon: Flame },
      { name: "FastAPI", icon: Zap },
      { name: "Express.js", icon: Package },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "MySQL", icon: Database },
      { name: "Redis", icon: HardDrive },
      { name: "Elasticsearch", icon: Search },
      { name: "RabbitMQ", icon: Server },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker", icon: Box },
      { name: "Google Cloud Platform", icon: Cloud },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
    ],
  },
];

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div
          ref={titleRef}
          className={`flex flex-col items-center text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            AI-powered expertise and cutting-edge technologies for building intelligent, scalable applications
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const delays = ["", "animation-delay-200", "animation-delay-400", "animation-delay-600"];
            return (
              <Card
                key={index}
                className={`hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${delays[index]} ${
                  cardsVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-accent/10 rounded-lg transition-all hover:scale-110 hover:rotate-6">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent/10 hover:border-accent hover:scale-105 transition-all duration-300 cursor-default"
                        >
                          <SkillIcon className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      );
                    })}
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

export default Skills;
