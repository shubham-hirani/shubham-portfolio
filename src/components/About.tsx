import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Passionate about building scalable backend systems and AI-powered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Backend and AI Developer with 3+ years of experience building robust, 
                scalable applications. Specialized in Python, Node.js, and modern cloud 
                technologies. Currently working at Nykaa, developing high-performance 
                backend systems and integrating cutting-edge AI solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My expertise spans from building RESTful APIs and microservices to 
                implementing AI-powered automation tools. I'm passionate about clean 
                code, system architecture, and leveraging AI to solve real-world problems.
              </p>
              <Button className="w-full sm:w-auto" asChild>
                <a href="/ShubhamHiraniResume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-4">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">3+ Years</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional Experience
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Multiple Certifications</h4>
                    <p className="text-sm text-muted-foreground">
                      GCP, OpenAI, Google Gemini
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">B.Tech in CS</h4>
                    <p className="text-sm text-muted-foreground">
                      Computer Science Engineering
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
