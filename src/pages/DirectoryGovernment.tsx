import { Building2, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DirectoryGovernment = () => {
  const offices = [
    {
      name: "Municipal Corporation Office",
      type: "Government Office",
      plotNo: "Plot 200",
      contact: "+91 98765-20001",
      timings: "10 AM - 5 PM (Mon-Fri)",
    },
    {
      name: "Police Station",
      type: "Law Enforcement",
      plotNo: "Plot 202",
      contact: "100 / +91 98765-20002",
      timings: "24x7",
    },
    {
      name: "Post Office",
      type: "Postal Service",
      plotNo: "Plot 204",
      contact: "+91 98765-20003",
      timings: "9 AM - 5 PM (Mon-Sat)",
    },
    {
      name: "Community Hall",
      type: "Public Facility",
      plotNo: "Plot 206",
      contact: "+91 98765-20004",
      timings: "Available for booking",
    },
    {
      name: "Fire Station",
      type: "Emergency Service",
      plotNo: "Plot 208",
      contact: "101 / +91 98765-20005",
      timings: "24x7",
    },
    {
      name: "Public Library",
      type: "Community Service",
      plotNo: "Plot 210",
      contact: "+91 98765-20006",
      timings: "9 AM - 7 PM",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary-light flex items-center justify-center">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Government & Community Places</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential government offices and community facilities
          </p>
        </div>

        {/* Emergency Contacts Banner */}
        <Card className="border-2 border-destructive/50 bg-destructive/5 mb-12 max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4 text-center">Emergency Contacts</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Police</p>
                <p className="text-2xl font-bold text-primary">100</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fire</p>
                <p className="text-2xl font-bold text-primary">101</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ambulance</p>
                <p className="text-2xl font-bold text-primary">108</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Directory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors shadow-soft hover:shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl">{office.name}</CardTitle>
                <p className="text-muted-foreground">{office.type}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm">{office.plotNo}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    {office.contact.split('/').map((num, i) => (
                      <div key={i}>
                        <a href={`tel:${num.trim()}`} className="text-primary hover:underline">
                          {num.trim()}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm font-medium">Timings</p>
                  <p className="text-sm text-muted-foreground">{office.timings}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectoryGovernment;
