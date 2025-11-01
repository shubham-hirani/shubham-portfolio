import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Vishwakarma Government Engineering College",
    year: "July 2018 - March 2022",
    description: "Comprehensive curriculum covering software engineering, data structures, algorithms, database systems, and advanced programming concepts",
  },
];

const certifications = [
  {
    name: "Google Cloud Platform",
    issuer: "Google",
    year: "2024",
  },
  {
    name: "OpenAI API Specialist",
    issuer: "OpenAI",
    year: "2024",
  },
  {
    name: "Google Gemini AI",
    issuer: "Google",
    year: "2024",
  },
  {
    name: "Advanced Backend Development",
    issuer: "Professional Certification",
    year: "2023",
  },
];

const Education = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: eduRef, isVisible: eduVisible } = useScrollAnimation();
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div
          ref={titleRef}
          className={`flex flex-col items-center text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Academic background and professional certifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div
            ref={eduRef}
            className={`transition-all duration-700 ${
              eduVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-accent" />
              Education
            </h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg hover:-translate-y-2 transition-all duration-500"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-accent">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div
            ref={certRef}
            className={`transition-all duration-700 ${
              certVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg hover:-translate-y-2 transition-all duration-500"
                >
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="secondary">{cert.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
