import { Check } from 'lucide-react';

const FederalMandate = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Federal Mandate for Local Impact
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Hydroelectric Power Producing Areas Development Commission (HYPADEC) was created to solve the unique 
                challenges faced by communities near Nigeria's hydro dams. We drive development through infrastructure, 
                environmental protection, clean water access, flood control, and empowerment programs.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">Established by Law in 2010</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">Expanded to 10 states by 2023</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">Serving 6,000+ flood-prone communities</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-card-hover">
              <img 
                src="/lovable-uploads/6dff7d63-f220-459f-a009-11c7c3e3513e.png" 
                alt="HYPADEC team working on community development project" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FederalMandate;