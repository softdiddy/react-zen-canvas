import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import communityProject from '../assets/community-project.jpg';

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
                Our agency serves as the critical bridge between federal resources and local community needs. 
                Through strategic partnerships and innovative programs, we ensure that federal investments 
                create lasting positive change at the grassroots level.
              </p>
              <p>
                Since our establishment, we have successfully facilitated over $2.8 billion in federal 
                funding for local infrastructure projects, environmental restoration initiatives, and 
                community development programs across the nation.
              </p>
              <p>
                Our comprehensive approach combines rigorous oversight with collaborative partnership, 
                ensuring that every federal dollar maximizes its impact on local communities while 
                maintaining the highest standards of accountability and transparency.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Direct federal-local collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Transparent oversight and accountability</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Sustainable community development</span>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="mr-4">
                Learn About Our Mission
              </Button>
              <Button variant="outline" size="lg">
                View Impact Report
              </Button>
            </div>
          </div>

          {/* Image */}
          <div>
            <Card className="overflow-hidden shadow-card-hover">
              <CardContent className="p-0">
                <img 
                  src={communityProject} 
                  alt="Community development project in progress" 
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FederalMandate;