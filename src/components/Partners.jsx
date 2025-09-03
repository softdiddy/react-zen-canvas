const Partners = () => {
  const partners = [
    { name: 'webflow' },
    { name: 'Relume' },
    { name: 'webflow' },
    { name: 'Relume' },
    { name: 'webflow' },
    { name: 'Relume' },
    { name: 'webflow' },
    { name: 'Relume' },
    { name: 'webflow' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg">
            We've worked with great companies [social proof to build credibility]
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-12 gap-y-8 items-center justify-items-center max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground/60">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;