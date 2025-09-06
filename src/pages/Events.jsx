import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, MapPin, Clock, User } from 'lucide-react';

const Events = () => {
  const upcomingEvent = {
    title: 'National Flood Preparedness Summit 2025',
    location: 'Abuja Conference Center',
    date: 'August 10-12, 2025',
    time: '9:00AM - 5:00PM Daily',
    keynote: 'MD Ali, Abubakar Sadiq Yelwa',
    theme: '"Saving Lives, Building Resilience"',
    details: 'Stakeholders from all 10 nHYPADEC states will co-create flood response strategies and launch the new alert system.'
  };

  const pastEvents = [
    {
      date: 'June 25, 2025',
      title: 'Community Borehole Commissioning - Lokoja, Kogi',
      description: '12 solar-powered boreholes commissioned, impacting 10,000+ residents.',
      type: 'commissioning'
    },
    {
      date: 'May 12, 2025',
      title: 'Youth Agribusiness Workshop - Minna, Niger State',
      description: '12 solar-powered boreholes commissioned, impacting 10,000+ residents.',
      type: 'workshop'
    },
    {
      date: 'April 2, 2025',
      title: 'River Dredging Launch - Gbajibo, Niger State',
      description: '12 solar-powered boreholes commissioned, impacting 10,000+ residents.',
      type: 'launch'
    },
    {
      date: 'June 25, 2025',
      title: 'Community Borehole Commissioning - Lokoja, Kogi',
      description: '12 solar-powered boreholes commissioned, impacting 10,000+ residents.',
      type: 'commissioning'
    },
    {
      date: 'May 12, 2025',
      title: 'Youth Agribusiness Workshop - Minna, Niger State',
      description: '12 solar-powered boreholes commissioned, impacting 10,000+ residents.',
      type: 'workshop'
    },
    {
      date: 'April 2, 2025',
      title: 'River Dredging Launch - Gbajibo, Niger State',
      description: '12 solar-powered boreholes commissioned, impacting 10,000+ residents.',
      type: 'launch'
    },
    {
      date: 'June 25, 2025',
      title: 'Community Borehole Commissioning - Lokoja, Kogi',
      description: '12 solar-powered boreholes commissioned, impacting 10,000+ residents.',
      type: 'commissioning'
    },
    {
      date: 'May 12, 2025',
      title: 'Youth Agribusiness Workshop - Minna, Niger State',
      description: '12 solar-powered boreholes commissioned, impacting 10,000+ residents.',
      type: 'workshop'
    },
    {
      date: 'April 2, 2025',
      title: 'River Dredging Launch - Gbajibo, Niger State',
      description: '12 solar-powered boreholes commissioned, impacting 10,000+ residents.',
      type: 'launch'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Events & Community Activities
            </h1>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not just about projects we bring people together. Explore town halls, trainings, empowerment programs, launches, and regional consultations happening across nHYPADEC states.
            </p>
          </div>
        </div>

        {/* Upcoming Event Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Event</h2>
          
          <Card className="bg-accent/20 border-2 border-accent/30 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {upcomingEvent.title}
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{upcomingEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{upcomingEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{upcomingEvent.time}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 text-sm">
                    <p><strong>Keynote:</strong> {upcomingEvent.keynote}</p>
                    <p><strong>Theme:</strong> {upcomingEvent.theme}</p>
                    <p><strong>Details:</strong> {upcomingEvent.details}</p>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90">
                    Register Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Past Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Past Event Highlights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="bg-accent/10 hover:bg-accent/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  
                  <h3 className="font-bold text-foreground mb-3 leading-tight">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      View Photos
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;