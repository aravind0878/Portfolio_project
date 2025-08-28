import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "teacher@stjoseph.edu",
      subtext: "Response within 24 hours",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtext: "Available 6 PM - 9 PM",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "St. Joseph High School",
      subtext: "123 Education Street",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 3 PM - 5 PM",
      subtext: "By appointment only",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-education-light to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your learning journey? Contact me for tuition inquiries or academic consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 border-0 shadow-card bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-muted-foreground font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtext}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card className="p-6 border-0 shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
                <h4 className="font-bold text-foreground mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button className="w-full justify-start bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Schedule Tuition Consultation
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Request Callback
                  </Button>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-elegant bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input 
                      placeholder="Your full name"
                      className="border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="What is this regarding?"
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your learning goals, preferred subjects, or any specific requirements..."
                    rows={5}
                    className="border-border focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-education-light rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Response Time:</strong> I typically respond to messages within 24 hours during weekdays.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;