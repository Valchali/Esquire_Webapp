import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services, iconMap } from '../../data/services';

const ServiceHighlights = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('service-highlights');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only display the first 4 services on the homepage
  const highlightedServices = services.slice(0, 4);

  return (
    <section id="service-highlights" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Our Services
          </h2>
          <p className="text-gray-600">
            From comfortable accommodation to fine dining, we provide a range of services to make your stay exceptional and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightedServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className={`text-center transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-primary-50 p-5 rounded-full inline-flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;