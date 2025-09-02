import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Building2, Droplets, Leaf, Users, Shield, Zap } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Building2,
      title: 'Infrastructure Development',
      description: 'Modernizing critical infrastructure including roads, bridges, and public facilities to support growing communities.',
      highlights: ['Transportation Networks', 'Public Buildings', 'Utility Systems']
    },
    {
      icon: Droplets,
      title: 'Water Resources',
      description: 'Ensuring clean, reliable water systems through advanced treatment facilities and distribution networks.',
      highlights: ['Water Treatment', 'Distribution Systems', 'Quality Assurance']
    },
    {
      icon: Leaf,
      title: 'Environmental Protection',
      description: 'Implementing sustainable practices and environmental restoration projects for long-term community health.',
      highlights: ['Ecosystem Restoration', 'Pollution Control', 'Green Infrastructure']
    },
    {
      icon: Users,
      title: 'Community Planning',
      description: 'Collaborative planning processes that ensure community voices are heard in federal development initiatives.',
      highlights: ['Stakeholder Engagement', 'Regional Planning', 'Impact Assessment']
    },
    {
      icon: Shield,
      title: 'Emergency Preparedness',
      description: 'Building resilient communities through comprehensive disaster preparedness and response programs.',
      highlights: ['Risk Assessment', 'Response Planning', 'Recovery Support']
    },
    {
      icon: Zap,
      title: 'Energy Solutions',
      description: 'Advancing clean energy initiatives and improving energy efficiency in public and private sectors.',
      highlights: ['Renewable Energy', 'Grid Modernization', 'Energy Efficiency']
    }
  ];

  return (
    <section id="services" className="py-16 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach to federal-local collaboration spans multiple sectors, 
            ensuring sustainable development and community resilience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;