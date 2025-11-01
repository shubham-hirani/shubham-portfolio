import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: leftCardRef, isVisible: leftCardVisible } = useScrollAnimation();
  const { ref: rightCardsRef, isVisible: rightCardsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div
          ref={titleRef}
          className={`flex flex-col items-center text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            AI Integration Specialist passionate about building intelligent backend systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card
            ref={leftCardRef}
            className={`hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${
              leftCardVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experienced Python Developer with hands-on expertise in building and optimizing backend
                systems and smart AI-driven applications. Expert in AI technologies including Gen AI,
                OpenAI, Google Gemini, and Anthropic with specialization in Python frameworks such as
                Flask and FastAPI. Strong proficiency in data processing, API development, and system
                integration.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently working at Wotnot Solutions as a Software Engineer II, where I architect
                AI-powered chatbots and intelligent automation solutions using cutting-edge LLMs. My
                expertise spans from building RESTful APIs with Node.js and TypeScript to implementing
                automated data extraction pipelines with BeautifulSoup and Selenium. I'm passionate about
                leveraging AI to deliver production-ready solutions that drive innovation and enhance user
                engagement.
              </p>
              <Button className="w-full sm:w-auto" asChild>
                <a href="/ShubhamHiraniResume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </CardContent>
          </Card>

          <div
            ref={rightCardsRef}
            className="grid grid-cols-1 gap-4"
          >
            <Card
              className={`hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${
                rightCardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg transition-all hover:scale-110">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">AI Expert</h4>
                    <p className="text-sm text-muted-foreground">
                      Gen AI, OpenAI, Gemini, Anthropic
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`hover:shadow-lg hover:-translate-y-2 transition-all duration-500 animation-delay-200 ${
                rightCardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg transition-all hover:scale-110">
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

            <Card
              className={`hover:shadow-lg hover:-translate-y-2 transition-all duration-500 animation-delay-400 ${
                rightCardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg transition-all hover:scale-110">
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
