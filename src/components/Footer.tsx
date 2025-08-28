import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-education-accent to-education-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Teacher Portfolio</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                Dedicated to nurturing young minds and fostering academic excellence 
                through innovative teaching methods and personalized education.
              </p>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>St. Joseph High School</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#experience" className="text-white/80 hover:text-white transition-colors">Professional Experience</a></li>
                <li><a href="#awards" className="text-white/80 hover:text-white transition-colors">Awards & Recognition</a></li>
                <li><a href="#tuition" className="text-white/80 hover:text-white transition-colors">Tuition Services</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact Information</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-white/80">teacher@stjoseph.edu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-white/80">+1 (555) 123-4567</span>
                </div>
                <div className="text-sm text-white/60 mt-4">
                  <p><strong>School Hours:</strong> Mon-Fri 8 AM - 3 PM</p>
                  <p><strong>Tuition Hours:</strong> Mon-Fri 6 PM - 9 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © 2024 Teacher Portfolio. Dedicated to educational excellence and student success.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;