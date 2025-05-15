import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedRooms from '../components/home/FeaturedRooms';
import ServiceHighlights from '../components/home/ServiceHighlights';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Esquire Hotel And Resort | Premium Hospitality & Lodging';
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedRooms />
      <ServiceHighlights />
      <Testimonials />

      {/* Call to Action */}
      <section className="bg-primary-50 py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Experience Our Hospitality?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Book your stay now and enjoy our special offers. A comfortable and memorable experience awaits you at Esquire hotel and resort .
          </p>
          <a 
            href="/rooms" 
            className="btn btn-primary text-lg px-8 py-4"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;