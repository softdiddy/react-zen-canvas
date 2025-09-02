import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import waterProject from '../assets/water-project.jpg';
import environmentalProject from '../assets/environmental-project.jpg';

const LatestFromField = () => {
  const fieldUpdates = [
    {
      id: 1,
      title: 'Major Water Infrastructure Completed',
      location: 'Phoenix, AZ',
      date: 'January 28, 2025',
      summary: 'New water treatment facility serves 150,000 residents with advanced filtration technology and sustainable practices.',
      image: waterProject,
      category: 'Infrastructure'
    },
    {
      id: 2,
      title: 'Wetland Restoration Shows Progress',
      location: 'Louisiana Coast',
      date: 'January 25, 2025',
      summary: 'Comprehensive ecosystem restoration project demonstrates successful wildlife habitat recovery and flood protection.',
      image: environmentalProject,
      category: 'Environment'
    },
    {
      id: 3,
      title: 'Community Health Centers Expansion',
      location: 'Rural Montana',
      date: 'January 22, 2025',
      summary: 'Federal partnership enables healthcare access for underserved rural communities through mobile health initiatives.',
      image: null,
      category: 'Health'
    },
    {
      id: 4,
      title: 'Emergency Response Training Complete',
      location: 'Multiple States',
      date: 'January 20, 2025',
      summary: 'Over 500 local officials trained in advanced emergency management protocols and community coordination.',
      image: null,
      category: 'Emergency'
    }
  ];

  return (
    <section className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest from the Field
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-time updates from our ongoing projects and community partnerships across the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {fieldUpdates.map((update) => (
            <Card key={update.id} className="group hover:shadow-card-hover transition-all duration-300 overflow-hidden">
              {update.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={update.image} 
                    alt={update.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {update.category}
                    </span>
                  </div>
                </div>
              )}
              
              <CardContent className="p-6">
                {!update.image && (
                  <div className="mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {update.category}
                    </span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{update.date}</span>
                  <span>•</span>
                  <span>{update.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {update.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {update.summary}
                </p>
                
                <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary-dark">
                  Read Full Report
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            View All Field Reports
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestFromField;