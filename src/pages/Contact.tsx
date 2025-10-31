import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help. Reach out to us for any queries or assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <Card className="border-2 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    Office Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    The New Indralok CHS Ltd<br />
                    Plot No. 123, Sector ABC<br />
                    Your City, State - 400001<br />
                    India
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Office: <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765-43210</a><br />
                    Emergency: <a href="tel:+919876543211" className="text-primary hover:underline">+91 98765-43211</a>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    General: <a href="mailto:info@indralok.org" className="text-primary hover:underline">info@indralok.org</a><br />
                    Secretary: <a href="mailto:secretary@indralok.org" className="text-primary hover:underline">secretary@indralok.org</a>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Monday - Saturday:</strong> 10:00 AM - 6:00 PM</p>
                    <p><strong className="text-foreground">Sunday:</strong> Closed</p>
                    <p className="text-sm mt-3 text-primary">*For emergencies, contact security 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <Card className="border-2 shadow-medium">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="flat">Flat/Plot Number</Label>
                    <Input
                      id="flat"
                      placeholder="e.g., A-101"
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX-XXXXX"
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief subject of your message"
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full h-11 font-semibold" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
          <Card className="border-2 shadow-medium overflow-hidden">
            <div className="h-[400px] bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Map Integration Available</p>
                <p className="text-sm">Location: The New Indralok CHS Ltd</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
