import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

const About = () => {
  const mandateItems = [
    "Formulate and implement policies for the development of host communities",
    "Tackle ecological problems and prevent/control flooding",
    "Resettle displaced persons and infrastructure",
    "Promote environmental sustainability",
    "Facilitate access to clean water, power, health care, and education",
    "Guide state and local governments in strategic planning",
    "Serve as an advocate, implementer, and watchdog for all hydro affected areas"
  ];

  const teamMembers = [
    {
      name: "MR. SIMON HARUNA GABI",
      title: "DG/CEO EXECUTIVE DIRECTOR OF HYPADEC",
      image: "/lovable-uploads/team-member-1.jpg"
    },
    {
      name: "ENGR. ILIYASU ABDULLAH WATFA MNSE",
      title: "ED OPERATIONS",
      image: "/lovable-uploads/team-member-2.jpg"
    },
    {
      name: "ENGR. DR. ORILKAYYA TEITEGUWA DANIEL",
      title: "ED ENGINEERING AND TECHNICAL SERVICES",
      image: "/lovable-uploads/team-member-3.jpg"
    },
    {
      name: "DR. MAINA IBRAHIM MUHAMMAD",
      title: "DIRECTOR OF COMMUNITY AFFAIRS AND DEVELOPMENT",
      image: "/lovable-uploads/team-member-4.jpg"
    },
    {
      name: "MR BALA SHUAIBU SAIDU",
      title: "ADMIN AND PLANNING RESEARCH AND STATS DIRECTOR",
      image: "/lovable-uploads/team-member-5.jpg"
    },
    {
      name: "MRS. RUTH ASABE HASSAN",
      title: "AD OPERATIONS/LEGAL SERVICES",
      image: "/lovable-uploads/team-member-6.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-building.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Powering Progress.
              <br />
              <span className="text-primary">Protecting People.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hydroelectric Power Producing Areas Development Commission (HYPADEC) - 
              Serving People. Protecting Land. Ensuring Progress.
            </p>
            <div className="w-32 h-32 mx-auto mb-8">
              <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
                <div className="text-2xl font-bold text-primary">HYPADEC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  HYPADEC (Hydroelectric Power Producing Areas Development Commission) is a federal agency created to 
                  develop and protect communities impacted by Nigeria's hydroelectric dams including Kanji, Jebba, and Shiroro. 
                  Established in 2010 by an Act of the National Assembly, we work to reduce the environmental and social impacts while providing 
                  adequate compensation, clean energy, potable flooding support agriculture, and resource livelihoods.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-card-hover">
                <img 
                  src="/lovable-uploads/3c63ebb5-0fed-47eb-b123-1833a7f70b1b.png"
                  alt="HYPADEC team member working with community" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mandate Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="rounded-lg overflow-hidden shadow-card-hover mb-8">
                <img 
                  src="/src/assets/community-project.jpg"
                  alt="Traditional ceremony and community gathering" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Mandate
              </h2>
              <div className="space-y-4">
                {mandateItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Team Turning Goals Into Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              An experienced HYPADEC leadership to ensure that tribes like diversity, career development, innovation, quality representation, and public awareness, commitment to protecting and empowering hydro-affected areas across Nigeria.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden shadow-card-hover">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Commitment
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  We are committed to reducing mortality and vulnerability to climate change through flood control across Nigeria's growth.
                </p>
                <p className="text-lg font-medium">
                  Our mission is simple: <span className="text-primary font-semibold">people first, always.</span>
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-card-hover">
                <img 
                  src="/src/assets/environmental-project.jpg"
                  alt="Community development and environmental protection work" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;