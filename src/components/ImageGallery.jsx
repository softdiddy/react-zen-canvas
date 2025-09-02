import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import heroBuilding from '../assets/hero-building.jpg';
import communityProject from '../assets/community-project.jpg';
import waterProject from '../assets/water-project.jpg';
import environmentalProject from '../assets/environmental-project.jpg';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: heroBuilding,
      title: 'Federal Agency Headquarters',
      category: 'Buildings'
    },
    {
      id: 2,
      src: communityProject,
      title: 'Community Development Project',
      category: 'Projects'
    },
    {
      id: 3,
      src: waterProject,
      title: 'Water Infrastructure Initiative',
      category: 'Infrastructure'
    },
    {
      id: 4,
      src: environmentalProject,
      title: 'Environmental Assessment Team',
      category: 'Environment'
    },
    {
      id: 5,
      src: communityProject,
      title: 'Regional Planning Meeting',
      category: 'Events'
    },
    {
      id: 6,
      src: waterProject,
      title: 'Water Quality Testing',
      category: 'Testing'
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Image Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Visual documentation of our ongoing work and community partnerships across the nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-card-hover transition-all duration-300"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-foreground text-sm mb-1">{image.title}</h3>
                    <span className="text-xs text-muted-foreground">{image.category}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="secondary"
              size="sm"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10"
            >
              <X className="w-4 h-4" />
            </Button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-bold text-foreground mb-1">{selectedImage.title}</h3>
              <span className="text-sm text-muted-foreground">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;