import { Link } from "react-router-dom";
import { Building2, Users, Calendar, FolderKanban, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-community.jpg";
import eventsImage from "@/assets/events.jpg";

const Home = () => {
  const features = [
    {
      icon: Building2,
      title: "Modern Infrastructure",
      description: "Well-maintained buildings with all essential amenities for comfortable living",
    },
    {
      icon: Users,
      title: "Strong Community",
      description: "A vibrant community of over 500 families living in harmony",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Engaging cultural and social activities throughout the year",
    },
    {
      icon: FolderKanban,
      title: "Development Projects",
      description: "Continuous improvement initiatives for better facilities",
    },
  ];

  const stats = [
    { label: "Established", value: "1968" },
    { label: "Member Families", value: "48" },
    { label: "Plot Area", value: "2,000 Square Meter" },
    { label: "Buildings", value: "4 Wing" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="The New Indralok Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to<br />The New Indralok CHS Ltd
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              A thriving cooperative housing society committed to excellence, transparency, and community welfare. Located in the heart of the city, spanning 50 acres with modern amenities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-subtle border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Indralok?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of modern living and community values
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors shadow-soft hover:shadow-medium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Community Events & Activities</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our society hosts regular cultural celebrations, sports activities, and social gatherings that bring our community together. From traditional festivals to modern wellness programs, there's something for everyone.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Annual Cultural Festival</div>
                    <div className="text-sm text-muted-foreground">Celebrating diversity and traditions</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Sports Week</div>
                    <div className="text-sm text-muted-foreground">Cricket, badminton, and fitness activities</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Community Meetings</div>
                    <div className="text-sm text-muted-foreground">Monthly gatherings for updates and discussions</div>
                  </div>
                </li>
              </ul>
              <Link to="/activities">
                <Button size="lg" className="font-semibold">
                  View All Activities
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={eventsImage}
                alt="Community Events"
                className="rounded-lg shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Access</h2>
            <p className="text-lg text-muted-foreground">Find everything you need in one place</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/committee">
              <Card className="hover:shadow-medium transition-shadow cursor-pointer border-2 hover:border-primary/50">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Committee Members</CardTitle>
                  <CardDescription>Meet our office bearers</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link to="/directory/education">
              <Card className="hover:shadow-medium transition-shadow cursor-pointer border-2 hover:border-primary/50">
                <CardHeader className="text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Directory</CardTitle>
                  <CardDescription>Local services & facilities</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link to="/contact">
              <Card className="hover:shadow-medium transition-shadow cursor-pointer border-2 hover:border-primary/50">
                <CardHeader className="text-center">
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Contact</CardTitle>
                  <CardDescription>Get in touch with us</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
