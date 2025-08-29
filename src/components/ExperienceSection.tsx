import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, Clock } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Primary Education Teacher",
      school: "St. Joseph High School",
      duration: "2019 - Present",
      description: "Teaching foundational subjects to primary students, focusing on interactive learning methods and individual student development.",
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      icon: BookOpen
    },
    {
      title: "Evening Tuition Instructor",
      school: "Private Tutoring",
      duration: "2019 - Present", 
      description: "Providing personalized one-on-one and small group tutoring sessions for students needing additional academic support.",
      subjects: ["All Subjects", "Exam Preparation", "Homework Assistance"],
      icon: Clock
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-education-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five years of dedicated teaching experience across different educational levels
            </p>
          </div>

          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 border-0 shadow-card bg-gradient-to-r from-card to-education-light/30 hover:shadow-elegant transition-all duration-300">
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:col-span-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.school}</p>
                      </div>
                      <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">
                        {exp.duration}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline" className="border-accent/30 text-accent bg-accent/5">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-0 shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">500+</h4>
              <p className="text-muted-foreground">Students Taught</p>
            </Card>
            
            <Card className="p-6 text-center border-0 shadow-card bg-gradient-to-br from-accent/5 to-primary/5">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">95%</h4>
              <p className="text-muted-foreground">Success Rate</p>
            </Card>
            
            <Card className="p-6 text-center border-0 shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="w-12 h-12 bg-education-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">5</h4>
              <p className="text-muted-foreground">Years Experience</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;