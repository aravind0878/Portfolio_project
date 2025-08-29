import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, CheckCircle, Calendar, DollarSign } from "lucide-react";

const TuitionSection = () => {
  const tuitionServices = [
    {
      title: "Individual Tutoring",
      description: "One-on-one personalized sessions for focused learning and rapid improvement",
      features: ["Customized curriculum", "Flexible scheduling", "Progress tracking", "Exam preparation"],
      icon: Users,
      popular: false
    },
    {
      title: "Small Group Classes",
      description: "Interactive small group sessions promoting collaborative learning",
      features: ["2-4 students per group", "Peer learning", "Cost effective", "Group activities"],
      icon: BookOpen,
      popular: true
    },
    {
      title: "Exam Preparation",
      description: "Intensive preparation sessions for school exams and competitive tests",
      features: ["Practice tests", "Time management", "Strategy building", "Mock exams"],
      icon: CheckCircle,
      popular: false
    }
  ];

  const schedule = [
    { day: "Monday - Friday", time: "5:00 PM - 7:00 PM", subjects: "All Subjects" },
    { day: "Saturday", time: "5:00 PM - 7:00 PM", subjects: "Exam Preparation" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-education-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Evening <span className="text-primary">Tuition Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personalized tutoring sessions designed to help students excel in their academic journey
            </p>
          </div>

          {/* Tuition Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tuitionServices.map((service, index) => (
              <Card key={index} className={`relative p-8 border-0 shadow-card bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${service.popular ? 'ring-2 ring-primary/20' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>

          {/* Schedule */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="p-8 border-0 shadow-card bg-gradient-to-br from-card to-education-light/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Class Schedule</h3>
              </div>

              <div className="space-y-4">
                {schedule.map((slot, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-education-light rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">{slot.day}</p>
                      <p className="text-sm text-muted-foreground">{slot.subjects}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">{slot.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Pricing & Benefits</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {[
                      "Customized study materials",
                      "Regular progress assessments", 
                      "Parent-teacher conferences",
                      "Homework assistance",
                      "Exam preparation strategies",
                      "Flexible rescheduling"
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact for personalized pricing based on subjects and frequency
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white"
                    onClick={() => window.open('https://wa.me/919573537573', '_blank')}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionSection;