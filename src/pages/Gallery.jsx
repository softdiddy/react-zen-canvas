import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '../components/ui/card';
import heroBuilding from '../assets/hero-building.jpg';
import communityProject from '../assets/community-project.jpg';
import waterProject from '../assets/water-project.jpg';
import environmentalProject from '../assets/environmental-project.jpg';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: waterProject,
      title: 'Clean water, closer to home',
      description: 'Installation of a solar-powered borehole in a rural Kogi community.',
      size: 'large'
    },
    {
      id: 2,
      image: environmentalProject,
      title: 'Safety first on every river',
      description: 'Life jacket demonstration to local fishermen in Kebbi.',
      size: 'medium'
    },
    {
      id: 3,
      image: communityProject,
      title: 'Clean water, closer to home',
      description: 'Installation of a solar-powered borehole in a rural Kogi community.',
      size: 'medium'
    },
    {
      id: 4,
      image: heroBuilding,
      title: 'When policy meets the people',
      description: 'nHYPADEC leadership consulting with traditional rulers in Kaduna.',
      size: 'medium'
    },
    {
      id: 5,
      image: communityProject,
      title: 'Empowering tomorrow\'s farmers',
      description: 'Young farmers receiving seedlings and modern tools in Benue.',
      size: 'medium'
    },
    {
      id: 6,
      image: waterProject,
      title: 'Training that transforms lives',
      description: 'Youth skills acquisition workshop in Gombe State.',
      size: 'medium'
    },
    {
      id: 7,
      image: environmentalProject,
      title: 'Training that transforms lives',
      description: 'Youth skills acquisition workshop in Gombe State.',
      size: 'large'
    },
    {
      id: 8,
      image: heroBuilding,
      title: 'Restoring what floods took away',
      description: 'Relief materials distributed to flood-impacted families in Niger State.',
      size: 'medium'
    },
    {
      id: 9,
      image: communityProject,
      title: 'When policy meets the people',
      description: 'nHYPADEC leadership consulting with traditional rulers in Kaduna.',
      size: 'medium'
    },
    {
      id: 10,
      image: waterProject,
      title: 'Restoring what floods took away',
      description: 'Relief materials distributed to flood-impacted families in Niger State.',
      size: 'medium'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Image Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore powerful images and videos showcasing our impact from clean water 
            projects to flood control and empowerment programs.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
          {galleryItems.map((item) => (
            <Card 
              key={item.id} 
              className={`group cursor-pointer overflow-hidden hover:shadow-card-hover transition-all duration-300 ${
                item.size === 'large' 
                  ? 'md:col-span-2 md:row-span-2' 
                  : item.size === 'tall' 
                  ? 'md:row-span-2' 
                  : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm">Showing 10 of 156 images</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;