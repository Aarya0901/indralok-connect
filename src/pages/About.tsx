import { Building2, Target, Heart, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a community of trust, transparency, and excellence since 1995
          </p>
        </div>

        {/* Profile Section */}
        <section className="mb-16">
          <Card className="border-2 shadow-soft">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Building2 className="h-8 w-8 text-primary" />
                Society Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg leading-relaxed">
              <p>
                <strong>The New Indralok Cooperative Housing Society Ltd</strong> is a well-established residential community located in the heart of the city. Established in 1995, our society has grown to become one of the most sought-after residential complexes in the area.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-primary-light p-6 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Total Area</h3>
                  <p className="text-2xl font-bold">50 Acres</p>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-2">Member Families</h3>
                  <p className="text-2xl font-bold">500+</p>
                </div>
                <div className="bg-primary-light p-6 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Buildings</h3>
                  <p className="text-2xl font-bold">12 Blocks</p>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-2">Year Established</h3>
                  <p className="text-2xl font-bold">1995</p>
                </div>
              </div>
              <p>
                We pride ourselves on maintaining a clean, safe, and well-organized environment for all residents. Our society features modern amenities including 24/7 security, well-maintained gardens, children's play areas, community halls, and ample parking spaces.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our History</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              The New Indralok CHS Ltd was formed in <strong>1995</strong> by a group of visionary individuals who shared a common dream – to create a model residential community that prioritizes quality living, community welfare, and sustainable development.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold text-xl mb-4">Key Milestones</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">1995:</span>
                  <span>Society foundation and initial construction</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2000:</span>
                  <span>Completion of first 6 residential blocks</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2005:</span>
                  <span>Addition of community amenities and recreation facilities</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2010:</span>
                  <span>Expansion phase - 6 additional blocks constructed</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2015:</span>
                  <span>Implementation of eco-friendly initiatives and rainwater harvesting</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2020:</span>
                  <span>Digital transformation and online member services</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2025:</span>
                  <span>Celebrating 30 years of community excellence</span>
                </li>
              </ul>
            </div>
            <p>
              Over the years, our society has evolved from a simple residential complex to a thriving, self-sufficient community with comprehensive facilities and a strong sense of belonging among members.
            </p>
          </div>
        </section>

        {/* Vision, Mission & Values */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Our Vision, Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-colors shadow-soft">
              <CardHeader>
                <div className="h-14 w-14 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  To be a model cooperative housing society that sets the benchmark for sustainable living, community engagement, and resident satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors shadow-soft">
              <CardHeader>
                <div className="h-14 w-14 rounded-lg bg-secondary-light flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  To provide quality housing and amenities while fostering a strong community spirit through transparency, accountability, and active member participation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors shadow-soft">
              <CardHeader>
                <div className="h-14 w-14 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Transparency in all operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Community welfare first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sustainable development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Inclusive participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Continuous improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
