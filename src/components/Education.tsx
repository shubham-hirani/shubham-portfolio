import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "University",
    year: "2018 - 2022",
    description: "Focused on software engineering, data structures, and algorithms",
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
  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Academic background and professional certifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-accent" />
              Education
            </h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
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

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
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
