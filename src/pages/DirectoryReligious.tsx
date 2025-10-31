import { Church, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DirectoryReligious = () => {
  const places = [
    {
      name: "Shri Ganesh Temple",
      type: "Hindu Temple",
      plotNo: "Plot 100",
      contact: "+91 98765-12121",
      timings: "6 AM - 8 PM",
    },
    {
      name: "St. Mary's Church",
      type: "Christian Church",
      plotNo: "Plot 102",
      contact: "+91 98765-13131",
      timings: "6 AM - 7 PM",
    },
    {
      name: "Community Mosque",
      type: "Islamic Mosque",
      plotNo: "Plot 104",
      contact: "+91 98765-14141",
      timings: "5 AM - 9 PM",
    },
    {
      name: "Gurudwara Sahib",
      type: "Sikh Temple",
      plotNo: "Plot 106",
      contact: "+91 98765-15151",
      timings: "5 AM - 9 PM",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary-light flex items-center justify-center">
              <Church className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Religious Places</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Places of worship serving our diverse community
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {places.map((place, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors shadow-soft hover:shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl">{place.name}</CardTitle>
                <p className="text-muted-foreground">{place.type}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{place.plotNo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${place.contact}`} className="text-sm text-primary hover:underline">
                    {place.contact}
                  </a>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm font-medium">Timings</p>
                  <p className="text-sm text-muted-foreground">{place.timings}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectoryReligious;
