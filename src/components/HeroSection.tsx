import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import profileImage from "@/assets/teacher-profile.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-education-light to-background min-h-[60vh] flex items-center py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-20 scale-110"></div>
                <img 
                  src={profileImage} 
                  alt="Teacher Profile" 
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-elegant"
                />
              </div>
            </div>

            {/* Profile Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Banda Shylaja</span>
              </h1>
              
              <div className="text-xl text-education-accent font-semibold mb-2">
                Educator at St. Joseph High School
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dedicated teacher with 5 years of experience in nurturing young minds. 
                Specializing in primary and high school education with a passion for 
                creating engaging learning environments.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>St. Joseph High School</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Evening Tuition Available</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Awards
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;