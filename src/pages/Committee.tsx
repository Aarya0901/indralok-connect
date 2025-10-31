import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import committeeImage from "@/assets/committee.jpg";

const Committee = () => {
  const members = [
    {
      name: "Mr. Rajesh Kumar",
      position: "Chairman",
      email: "chairman@indralok.org",
      phone: "+91 98765-43210",
    },
    {
      name: "Mrs. Priya Sharma",
      position: "Vice Chairperson",
      email: "vice.chair@indralok.org",
      phone: "+91 98765-43211",
    },
    {
      name: "Mr. Amit Patel",
      position: "Secretary",
      email: "secretary@indralok.org",
      phone: "+91 98765-43212",
    },
    {
      name: "Mrs. Sunita Desai",
      position: "Treasurer",
      email: "treasurer@indralok.org",
      phone: "+91 98765-43213",
    },
    {
      name: "Mr. Vikram Singh",
      position: "Maintenance Officer",
      email: "maintenance@indralok.org",
      phone: "+91 98765-43214",
    },
    {
      name: "Mrs. Kavita Mehta",
      position: "Cultural Events Coordinator",
      email: "events@indralok.org",
      phone: "+91 98765-43215",
    },
    {
      name: "Mr. Suresh Reddy",
      position: "Security & Facilities",
      email: "security@indralok.org",
      phone: "+91 98765-43216",
    },
    {
      name: "Dr. Anjali Nair",
      position: "Member",
      email: "member1@indralok.org",
      phone: "+91 98765-43217",
    },
    {
      name: "Mr. Ravi Iyer",
      position: "Member",
      email: "member2@indralok.org",
      phone: "+91 98765-43218",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Committee & Office Bearers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated team working tirelessly for the welfare of our community
          </p>
        </div>

        {/* Committee Image */}
        <div className="mb-12 max-w-4xl mx-auto">
          <img
            src={committeeImage}
            alt="Committee Members"
            className="w-full rounded-lg shadow-medium"
          />
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 shadow-soft">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-center">
                Our managing committee comprises elected representatives who volunteer their time and expertise 
                to ensure smooth operations and continuous improvement of our society. Each member brings unique 
                skills and dedication to serve the community with transparency and accountability.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Committee Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all shadow-soft hover:shadow-medium">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="h-20 w-20 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <p className="text-sm font-semibold text-primary">{member.position}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <a 
                      href={`tel:${member.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Responsibilities Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Responsibilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 shadow-soft">
              <CardHeader>
                <CardTitle>Administrative Duties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Manage day-to-day operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Conduct monthly committee meetings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Maintain financial records and transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Handle member grievances and queries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-soft">
              <CardHeader>
                <CardTitle>Development & Welfare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Plan and execute improvement projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Organize community events and activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Ensure proper maintenance and security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Represent society in external matters</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
