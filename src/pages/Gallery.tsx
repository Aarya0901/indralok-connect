import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-community.jpg";
import committeeImage from "@/assets/committee.jpg";
import eventsImage from "@/assets/events.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: heroImage,
      title: "Society Complex View",
      description: "Beautiful landscape of our residential complex",
    },
    {
      src: committeeImage,
      title: "Committee Members",
      description: "Our dedicated managing committee",
    },
    {
      src: eventsImage,
      title: "Festival Celebration",
      description: "Community celebrating together",
    },
    {
      src: heroImage,
      title: "Garden Areas",
      description: "Well-maintained green spaces",
    },
    {
      src: eventsImage,
      title: "Cultural Event",
      description: "Annual cultural program",
    },
    {
      src: committeeImage,
      title: "Annual Meeting",
      description: "General body meeting",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing memories and moments from our vibrant community
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all shadow-soft hover:shadow-medium group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Photo Categories</h2>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Events", "Infrastructure", "Activities", "Celebrations"].map((category, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow cursor-pointer border-2 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
