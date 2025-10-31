import { Calendar, Users, Trophy, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import eventsImage from "@/assets/events.jpg";

const Activities = () => {
  const upcomingEvents = [
    {
      title: "Annual General Meeting",
      date: "December 15, 2025",
      time: "6:00 PM",
      venue: "Community Hall",
      description: "Important AGM for all members to discuss annual report and future plans",
    },
    {
      title: "Diwali Celebration",
      date: "November 12, 2025",
      time: "7:00 PM",
      venue: "Central Garden Area",
      description: "Traditional Diwali celebration with lights, music, and community dinner",
    },
    {
      title: "Sports Week",
      date: "January 20-26, 2026",
      time: "5:00 PM onwards",
      venue: "Sports Ground",
      description: "Cricket, badminton, and various sports competitions for all age groups",
    },
  ];

  const regularActivities = [
    {
      icon: Users,
      title: "Yoga & Fitness Sessions",
      schedule: "Every Monday & Thursday, 6:30 AM",
      description: "Morning yoga and fitness classes for all residents",
    },
    {
      icon: Music,
      title: "Cultural Programs",
      schedule: "Monthly on 2nd Saturday",
      description: "Music, dance, and cultural performances by residents",
    },
    {
      icon: Trophy,
      title: "Sports Activities",
      schedule: "Weekends",
      description: "Regular cricket, badminton, and outdoor games",
    },
    {
      icon: Calendar,
      title: "Festival Celebrations",
      schedule: "Throughout the year",
      description: "Celebrating all major festivals together as a community",
    },
  ];

  const pastEvents = [
    {
      title: "Holi Festival 2025",
      date: "March 2025",
      description: "Colorful celebration with music, dance, and traditional foods",
    },
    {
      title: "Republic Day Celebration",
      date: "January 26, 2025",
      description: "Flag hoisting ceremony and cultural programs",
    },
    {
      title: "Children's Day Special",
      date: "November 14, 2024",
      description: "Games, competitions, and entertainment for children",
    },
    {
      title: "Ganesh Chaturthi",
      date: "September 2024",
      description: "10-day celebration with daily aarti and cultural events",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Activities & Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing our community together through engaging activities and celebrations
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 max-w-4xl mx-auto">
          <img
            src={eventsImage}
            alt="Community Events"
            className="w-full rounded-lg shadow-medium"
          />
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-2 border-primary/30 bg-primary-light/30 shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="font-medium text-foreground mt-1">{event.time}</div>
                    <div className="text-muted-foreground">{event.venue}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regular Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Regular Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regularActivities.map((activity, index) => (
              <Card key={index} className="border-2 hover:border-secondary/50 transition-colors shadow-soft">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-secondary-light flex items-center justify-center flex-shrink-0">
                      <activity.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                      <CardDescription className="text-base">
                        <div className="font-semibold text-secondary">{activity.schedule}</div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Past Events Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="font-medium">{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="border-2 border-primary bg-gradient-subtle shadow-medium">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Want to Organize an Event?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We encourage all members to propose and organize community events. Contact our Cultural Events Coordinator to get started!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div>
                  <p className="font-semibold">Mrs. Kavita Mehta</p>
                  <p className="text-sm text-muted-foreground">events@indralok.org</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Activities;
