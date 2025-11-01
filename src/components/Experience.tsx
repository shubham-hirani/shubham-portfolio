import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer II",
    company: "Wotnot Solutions Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    period: "June 2024 - Present",
    achievements: [
      "Architected and integrated a new AI agent block, empowering users to create custom AI agents, leading to a 25% increase in agent creation efficiency.",
      "Extended Google Calendar integration to include Outlook Calendar support, resulting in a 30% expansion of calendar integration capabilities.",
      "Built REST APIs and microservices with Node.js (Express.js) and TypeScript for scalable event-driven applications.",
      "Developed automated data extraction pipelines using BeautifulSoup and Selenium to scrape both structured and unstructured web data.",
      "Integrated extracted datasets into Elasticsearch for indexing, search, and analytics.",
    ],
  },
  {
    title: "Software Engineer I",
    company: "Wotnot Solutions Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    period: "January 2022 - May 2024",
    achievements: [
      "Architected and integrated an AI studio, resulting in a 100% increase in new paid users.",
      "Established robust Two-Factor Authentication (2FA) mechanisms, reducing security vulnerabilities by over 15%.",
      "Leveraged multiple technologies within a microservices architecture to support over 10,000 concurrent requests.",
      "Designed webhooks for ingesting messages from diverse channels, processing over 1 million messages daily.",
      "Pioneered the adoption of Python 3.8 features, leading to a 20% improvement in code maintainability.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Building innovative solutions and driving impact at scale
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl flex items-start gap-2">
                      <Briefcase className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <span>{exp.title}</span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      <div className="font-semibold text-foreground">{exp.company}</div>
                      <div className="text-sm text-muted-foreground">{exp.location}</div>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 w-fit">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-sm md:text-base">
                      <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
