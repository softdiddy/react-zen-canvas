import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvent = {
    title: 'National Flood Preparedness Summit 2025',
    date: 'March 15-17, 2025',
    location: 'Washington, DC',
    description: 'Join federal, state, and local officials for comprehensive discussions on flood preparedness strategies.',
    attendees: '500+ Expected',
    status: 'Registration Open'
  };

  const recentHighlights = [
    {
      date: 'Jan 15, 2025',
      title: 'Community Resilience Workshop',
      location: 'Denver, CO',
      type: 'Workshop'
    },
    {
      date: 'Dec 08, 2024',
      title: 'Infrastructure Development Conference',
      location: 'Atlanta, GA',
      type: 'Conference'
    },
    {
      date: 'Nov 22, 2024',
      title: 'Regional Planning Summit',
      location: 'Phoenix, AZ',
      type: 'Summit'
    }
  ];

  return (
    <section id="events" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Events & Community Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us at upcoming events and discover how we're building stronger communities together.
          </p>
        </div>

        {/* Featured Upcoming Event */}
        <div className="mb-12">
          <Card className="bg-primary/5 border-primary/20 shadow-card-hover">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Featured Event
                </CardTitle>
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {upcomingEvent.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {upcomingEvent.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {upcomingEvent.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-medium">{upcomingEvent.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-medium">{upcomingEvent.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-medium">{upcomingEvent.attendees}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg">
                      Register Now
                    </Button>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-card">
                  <h4 className="font-bold text-foreground mb-4">Event Highlights</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Keynote addresses from federal agency leaders</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Interactive workshops on community preparedness</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Networking opportunities with local officials</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Technical sessions on latest preparedness tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Event Highlights */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Recent Event Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentHighlights.map((event, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                      {event.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{event.title}</h4>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;