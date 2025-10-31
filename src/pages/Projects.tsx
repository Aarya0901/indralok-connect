import { CheckCircle2, Clock, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const ongoingProjects = [
    {
      title: "Solar Panel Installation",
      status: "In Progress",
      completion: "60%",
      budget: "₹50 Lakhs",
      timeline: "Oct 2025 - Mar 2026",
      description: "Installing solar panels on all building rooftops to reduce electricity costs and promote renewable energy.",
    },
    {
      title: "Garden Landscaping Phase 2",
      status: "In Progress",
      completion: "40%",
      budget: "₹15 Lakhs",
      timeline: "Nov 2025 - Feb 2026",
      description: "Enhancing green spaces with new plants, walking paths, and seating areas.",
    },
    {
      title: "CCTV Upgrade",
      status: "In Progress",
      completion: "75%",
      budget: "₹8 Lakhs",
      timeline: "Sep 2025 - Dec 2025",
      description: "Upgrading existing CCTV system with HD cameras and improved coverage.",
    },
  ];

  const completedProjects = [
    {
      title: "Rainwater Harvesting System",
      completionDate: "August 2025",
      budget: "₹25 Lakhs",
      description: "Successfully implemented rainwater harvesting across all buildings, saving approximately 40% on water bills.",
    },
    {
      title: "Children's Play Area Renovation",
      completionDate: "June 2025",
      budget: "₹12 Lakhs",
      description: "Complete renovation of play area with new equipment, soft flooring, and safety features.",
    },
    {
      title: "Gym & Fitness Center",
      completionDate: "March 2025",
      budget: "₹18 Lakhs",
      description: "Established a fully equipped gym facility with modern equipment for all residents.",
    },
    {
      title: "Parking Lot Expansion",
      completionDate: "December 2024",
      budget: "₹30 Lakhs",
      description: "Added 50 new parking spaces to address growing vehicle ownership.",
    },
  ];

  const plannedProjects = [
    {
      title: "Swimming Pool Construction",
      proposedStart: "April 2026",
      estimatedBudget: "₹75 Lakhs",
      description: "Planning to build a community swimming pool with separate sections for adults and children.",
    },
    {
      title: "Smart Home Integration",
      proposedStart: "June 2026",
      estimatedBudget: "₹40 Lakhs",
      description: "Introducing smart home features including app-based security access and utility management.",
    },
    {
      title: "Community Library",
      proposedStart: "August 2026",
      estimatedBudget: "₹5 Lakhs",
      description: "Setting up a community library with books, magazines, and study spaces.",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Development Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous improvement initiatives for a better living experience
          </p>
        </div>

        {/* Ongoing Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Ongoing Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="border-2 border-primary/30 bg-primary-light/20 shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-primary text-primary-foreground">{project.status}</Badge>
                    <span className="text-sm font-semibold text-primary">{project.completion}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    <div className="space-y-1 mt-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-semibold text-foreground">{project.budget}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="font-semibold text-foreground">{project.timeline}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="mt-4 w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all" 
                      style={{ width: project.completion }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Completed Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="h-8 w-8 text-secondary" />
            <h2 className="text-3xl font-bold">Completed Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {completedProjects.map((project, index) => (
              <Card key={index} className="border-2 hover:border-secondary/50 transition-colors shadow-soft">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Completed</Badge>
                    <span className="text-sm font-medium text-muted-foreground">{project.completionDate}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    <span className="text-foreground font-semibold">Budget: {project.budget}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Planned Projects */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="h-8 w-8 text-muted-foreground" />
            <h2 className="text-3xl font-bold">Planned Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedProjects.map((project, index) => (
              <Card key={index} className="border-2 border-dashed hover:border-primary/50 transition-colors shadow-soft">
                <CardHeader>
                  <Badge variant="outline">Planned</Badge>
                  <CardTitle className="text-xl mt-3">{project.title}</CardTitle>
                  <CardDescription>
                    <div className="space-y-1 mt-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Est. Budget:</span>
                        <span className="font-semibold text-foreground">{project.estimatedBudget}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Proposed Start:</span>
                        <span className="font-semibold text-foreground">{project.proposedStart}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Project Proposal CTA */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="border-2 border-primary bg-gradient-subtle shadow-medium">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Have a Project Idea?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Members are encouraged to propose development projects for the betterment of our community. 
                Submit your ideas to the committee for consideration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div>
                  <p className="font-semibold">Mr. Amit Patel - Secretary</p>
                  <p className="text-sm text-muted-foreground">secretary@indralok.org</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
