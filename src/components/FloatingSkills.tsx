import {
  Code2,
  Database,
  Cloud,
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

const skillIcons = [
  { Icon: Code2, name: "Python" },
  { Icon: Server, name: "Node.js" },
  { Icon: FileCode, name: "TypeScript" },
  { Icon: Flame, name: "Flask" },
  { Icon: Zap, name: "FastAPI" },
  { Icon: Package, name: "Express.js" },
  { Icon: Database, name: "MySQL" },
  { Icon: HardDrive, name: "Redis" },
  { Icon: Search, name: "Elasticsearch" },
  { Icon: Box, name: "Docker" },
  { Icon: Cloud, name: "GCP" },
  { Icon: GitBranch, name: "Git" },
  { Icon: Brain, name: "GenAI" },
  { Icon: Sparkles, name: "OpenAI" },
  { Icon: Star, name: "Gemini" },
  { Icon: Bot, name: "Anthropic" },
  { Icon: Code, name: "BeautifulSoup" },
  { Icon: Globe, name: "Selenium" },
];

const FloatingSkills = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {skillIcons.map((skill, index) => {
        const Icon = skill.Icon;
        // Pre-calculated positions for consistency
        const left = ((index * 17) % 100);
        const top = ((index * 23) % 100);
        const duration = 20 + (index % 10); // Between 20-30 seconds
        const delay = (index * 0.5) % 5; // Staggered delays
        const size = 50 + ((index * 7) % 30); // Between 50-80px

        return (
          <div
            key={index}
            className="absolute opacity-[0.12] dark:opacity-[0.10] animate-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animation: `float-random-${index % 4} ${duration}s ease-in-out ${delay}s infinite`,
              willChange: 'transform',
            }}
          >
            <Icon
              className="text-accent"
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          </div>
        );
      })}

      <style>{`
        @keyframes float-random-0 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(50px, -30px) rotate(90deg);
          }
          50% {
            transform: translate(20px, 40px) rotate(180deg);
          }
          75% {
            transform: translate(-30px, 20px) rotate(270deg);
          }
        }

        @keyframes float-random-1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-40px, 50px) rotate(-90deg);
          }
          50% {
            transform: translate(30px, -20px) rotate(-180deg);
          }
          75% {
            transform: translate(40px, 30px) rotate(-270deg);
          }
        }

        @keyframes float-random-2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(60px, 20px) rotate(120deg) scale(1.2);
          }
          66% {
            transform: translate(-30px, -40px) rotate(240deg) scale(0.8);
          }
        }

        @keyframes float-random-3 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(-50px, -30px) rotate(-120deg) scale(0.9);
          }
          66% {
            transform: translate(40px, 50px) rotate(-240deg) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingSkills;
