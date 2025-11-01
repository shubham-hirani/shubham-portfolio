import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Node.js", icon: "🟢" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Flask", icon: "🌶️" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Express.js", icon: "🚂" },
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: [
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔴" },
      { name: "Elasticsearch", icon: "🔍" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Google Cloud Platform", icon: "☁️" },
      { name: "Git", icon: "📦" },
    ],
  },
  {
    title: "AI & Automation",
    icon: Wrench,
    skills: [
      { name: "Gen AI", icon: "🤖" },
      { name: "OpenAI", icon: "🧠" },
      { name: "Google Gemini", icon: "✨" },
      { name: "Anthropic", icon: "🎯" },
      { name: "BeautifulSoup", icon: "🥣" },
      { name: "Selenium", icon: "🕷️" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent/10 hover:border-accent transition-all duration-300 cursor-default"
                      >
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
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

export default Skills;
