import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">THE NEW INDRALOK CHS LTD</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A modern cooperative housing society dedicated to serving our community members with excellence, transparency, and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/committee" className="text-muted-foreground hover:text-foreground transition-colors">
                  Committee
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-muted-foreground hover:text-foreground transition-colors">
                  Activities & Events
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Directory */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Directory</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/directory/education" className="text-muted-foreground hover:text-foreground transition-colors">
                  Education Sector
                </Link>
              </li>
              <li>
                <Link to="/directory/health" className="text-muted-foreground hover:text-foreground transition-colors">
                  Health & Fitness
                </Link>
              </li>
              <li>
                <Link to="/directory/religious" className="text-muted-foreground hover:text-foreground transition-colors">
                  Religious Places
                </Link>
              </li>
              <li>
                <Link to="/directory/government" className="text-muted-foreground hover:text-foreground transition-colors">
                  Government & Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  The New Indralok CHS Ltd,<br />Your Location, City
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 XXXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@indralok.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Mon - Sat: 10 AM - 6 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} The New Indralok CHS Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
