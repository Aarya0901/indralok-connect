import { GraduationCap, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const DirectoryEducation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const institutions = [
    {
      name: "Bright Future School",
      type: "Primary & Secondary School",
      plotNo: "Plot 45-46",
      contact: "+91 98765-11111",
      status: "Operational",
    },
    {
      name: "Little Angels Kindergarten",
      type: "Pre-School",
      plotNo: "Plot 12",
      contact: "+91 98765-22222",
      status: "Operational",
    },
    {
      name: "Excellence Coaching Classes",
      type: "Tuition Center",
      plotNo: "Plot 78",
      contact: "+91 98765-33333",
      status: "Operational",
    },
    {
      name: "Knowledge Hub Library",
      type: "Public Library",
      plotNo: "Plot 23",
      contact: "+91 98765-44444",
      status: "Operational",
    },
    {
      name: "Career Guidance Center",
      type: "Counseling",
      plotNo: "Plot 56",
      contact: "+91 98765-55555",
      status: "Operational",
    },
  ];

  const filteredInstitutions = institutions.filter((inst) =>
    inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inst.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary-light flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Education Sector</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Educational institutions and learning centers in our locality
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <Input
            placeholder="Search institutions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-12 text-lg"
          />
        </div>

        {/* Directory Table */}
        <Card className="border-2 shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl">Educational Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold">Institution Name</th>
                    <th className="text-left p-4 font-semibold">Type</th>
                    <th className="text-left p-4 font-semibold">Location</th>
                    <th className="text-left p-4 font-semibold">Contact</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInstitutions.map((inst, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{inst.name}</td>
                      <td className="p-4 text-muted-foreground">{inst.type}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {inst.plotNo}
                        </div>
                      </td>
                      <td className="p-4">
                        <a href={`tel:${inst.contact}`} className="flex items-center gap-2 text-primary hover:underline">
                          <Phone className="h-4 w-4" />
                          {inst.contact}
                        </a>
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary-light text-secondary font-medium">
                          {inst.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card className="border-2 shadow-soft text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Schools</div>
            </CardContent>
          </Card>
          <Card className="border-2 shadow-soft text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Pre-Schools</div>
            </CardContent>
          </Card>
          <Card className="border-2 shadow-soft text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Libraries</div>
            </CardContent>
          </Card>
          <Card className="border-2 shadow-soft text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Coaching Centers</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DirectoryEducation;
