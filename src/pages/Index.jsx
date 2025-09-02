import Header from '../components/Header';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import FederalMandate from '../components/FederalMandate';
import WhatWeDo from '../components/WhatWeDo';
import Events from '../components/Events';
import LatestFromField from '../components/LatestFromField';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <FederalMandate />
      <WhatWeDo />
      <Events />
      <LatestFromField />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default Index;