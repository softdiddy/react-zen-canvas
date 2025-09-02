const Partners = () => {
  const partners = [
    { name: 'EPA', logo: 'EPA' },
    { name: 'DOT', logo: 'DOT' },
    { name: 'HUD', logo: 'HUD' },
    { name: 'USDA', logo: 'USDA' },
    { name: 'DOE', logo: 'DOE' },
    { name: 'FEMA', logo: 'FEMA' }
  ];

  return (
    <section className="py-12 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Our Federal Partners</h2>
          <p className="text-muted-foreground">Collaborating with key agencies for maximum impact</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-card flex items-center justify-center border">
                <span className="text-primary font-bold text-sm">{partner.logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;