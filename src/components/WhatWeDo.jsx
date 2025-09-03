import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Droplets, Tractor, Trees, Users } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Droplets,
      title: '60+ Solar Boreholes',
      description: 'Many hydroelectric host communities lack access to safe drinking water, despite living beside vast water bodies. To address this, HYPADEC has installed over 60 solar-powered boreholes in underserved areas.'
    },
    {
      icon: Tractor,
      title: 'Agricultural Support',
      description: 'Farming is the main occupation in most HYPADEC communities, but climate change and dam flooding have made yields unpredictable. We support local farmers with training, starter kits, and better equipment.'
    },
    {
      icon: Trees,
      title: 'Flood Prevention',
      description: 'Our teams clear blocked waterways to prevent flooding, especially during the rainy season. We also provide boats, safety gear, and alert training to riverside communities.'
    },
    {
      icon: Users,
      title: 'Community Mapping',
      description: 'To plan effectively, HYPADEC launched one of Nigeria\'s largest rural data-gathering exercises—mapping needs, demographics, and infrastructure gaps in over 6,000 hydro-impacted communities.'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left side content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our work is people-first, data-led, and impact-focused.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
              View All Projects
            </Button>
          </div>

          {/* Right side cards grid */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center group">
                    Learn more 
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;