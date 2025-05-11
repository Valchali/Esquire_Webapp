import { useEffect, useState } from 'react';
import { services, iconMap } from '../data/services';

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services | Cozy Hotel';
    setIsLoaded(true);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 bg-gray-900">
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            opacity: 0.6
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Our Services</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Experience premium hospitality with our range of services designed for your comfort and convenience.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="container-custom py-16">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            At Esquire Hotel, we pride ourselves on delivering exceptional services that cater to all your needs. From comfortable accommodation to fine dining and entertainment, we ensure a memorable stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center">
                      <div className="bg-white rounded-full p-2 mr-3">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Promise */}
        <div className="mt-16 bg-primary-50 rounded-xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-6">Our Service Promise</h2>
            <p className="text-lg text-gray-700 mb-8">
              We are committed to providing you with the highest level of service and ensuring your stay with us is comfortable, enjoyable, and memorable. Our dedicated staff is available 24/7 to assist you with any requests.
            </p>
            <a 
              href="/contact" 
              className="btn btn-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;