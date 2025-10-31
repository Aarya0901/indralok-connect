import { Activity, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const DirectoryHealth = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const facilities = [
    {
      name: "City Care Hospital",
      type: "Multi-Specialty Hospital",
      plotNo: "Plot 88-90",
      contact: "+91 98765-66666",
      status: "24x7",
    },
    {
      name: "Dr. Sharma Clinic",
      type: "General Physician",
      plotNo: "Plot 34",
      contact: "+91 98765-77777",
      status: "Operational",
    },
    {
      name: "FitLife Gym",
      type: "Fitness Center",
      plotNo: "Plot 67",
      contact: "+91 98765-88888",
      status: "Operational",
    },
    {
      name: "Wellness Yoga Studio",
      type: "Yoga Center",
      plotNo: "Plot 41",
      contact: "+91 98765-99999",
      status: "Operational",
    },
    {
      name: "MediPlus Pharmacy",
      type: "Medical Store",
      plotNo: "Plot 22",
      contact: "+91 98765-00000",
      status: "24x7",
    },
    {
      name: "Dental Care Clinic",
      type: "Dental Clinic",
      plotNo: "Plot 55",
      contact: "+91 98765-11122",
      status: "Operational",
    },
  ];

  const filteredFacilities = facilities.filter((fac) =>
    fac.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fac.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-secondary-light flex items-center justify-center">
              <Activity className="h-8 w-8 text-secondary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health & Fitness</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Healthcare facilities and fitness centers in our locality
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <Input
            placeholder="Search facilities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-12 text-lg"
          />
        </div>

        {/* Directory Table */}
        <Card className="border-2 shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl">Health & Fitness Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold">Facility Name</th>
                    <th className="text-left p-4 font-semibold">Type</th>
                    <th className="text-left p-4 font-semibold">Location</th>
                    <th className="text-left p-4 font-semibold">Contact</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFacilities.map((fac, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{fac.name}</td>
                      <td className="p-4 text-muted-foreground">{fac.type}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {fac.plotNo}
                        </div>
                      </td>
                      <td className="p-4">
                        <a href={`tel:${fac.contact}`} className="flex items-center gap-2 text-primary hover:underline">
                          <Phone className="h-4 w-4" />
                          {fac.contact}
                        </a>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          fac.status === "24x7" 
                            ? "bg-secondary-light text-secondary" 
                            : "bg-primary-light text-primary"
                        }`}>
                          {fac.status}
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
              <div className="text-3xl font-bold text-secondary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Hospitals/Clinics</div>
            </CardContent>
          </Card>
          <Card className="border-2 shadow-soft text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Fitness Centers</div>
            </CardContent>
          </Card>
          <Card className="border-2 shadow-soft text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Pharmacies</div>
            </CardContent>
          </Card>
          <Card className="border-2 shadow-soft text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Dental Clinics</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DirectoryHealth;
