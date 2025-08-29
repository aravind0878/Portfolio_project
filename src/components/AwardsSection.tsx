import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Medal } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      title: "Best Teaching Excellence Award",
      year: "2023",
      organization: "St. Joseph High School",
      description: "Recognized for outstanding teaching methodology and student engagement in primary education.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Outstanding Educator of the Year",
      year: "2022", 
      organization: "Education District Board",
      description: "Awarded for exceptional dedication and innovative teaching approaches across multiple grade levels.",
      icon: Star,
      color: "from-primary to-accent"
    },
    {
      title: "Excellence in Student Development",
      year: "2021",
      organization: "St. Joseph High School",
      description: "Honored for significant improvement in student academic performance and personal growth.",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Community Teaching Impact Award",
      year: "2020",
      organization: "Local Education Authority",
      description: "Recognized for outstanding contribution to community education through evening tuition programs.",
      icon: Medal,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-education-light to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Awards & <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Honored for excellence in teaching and dedication to student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="group p-8 border-0 shadow-card bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <award.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {award.title}
                      </h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-semibold">
                        {award.year}
                      </Badge>
                    </div>
                    
                    <p className="text-accent font-semibold mb-3">{award.organization}</p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-2">4</h4>
              <p className="text-muted-foreground">Major Awards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-2">5</h4>
              <p className="text-muted-foreground">Years Excellence</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-2">100%</h4>
              <p className="text-muted-foreground">Recognition Rate</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Medal className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-2">3</h4>
              <p className="text-muted-foreground">Organizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;