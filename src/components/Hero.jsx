import { Button } from './ui/button';
import { X, Instagram } from 'lucide-react';
import heroBuilding from '../assets/hero-building.jpg';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center justify-start">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBuilding} 
            alt="HYPADEC Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We serve the hydroelectric power-producing areas of Nigeria,
              <span className="block mt-2">transforming lives through water, energy, and Impact.</span>
            </h1>
            
            <div className="mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                Explore Our Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Ticker */}
      <div className="bg-white border-t border-b py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <X className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-foreground">
                Flood Preparedness Summit 2025 holds August 10-12 in Abuja - Register now!
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <span className="text-sm text-muted-foreground">HYPADEC comm</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;