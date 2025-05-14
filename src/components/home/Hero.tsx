import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-center bg-cover" 
        style={{ 
          backgroundImage:'url(/hotel-front.jpg)',
          //  'url(https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="container-custom h-full flex flex-col justify-center">
        <div className={`max-w-xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Experience Luxury & Comfort
          </h1>
          <p className="text-xl text-white mb-8">
            Welcome to Esquire Hotel, where warm hospitality meets exceptional service in a secure and relaxing environment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/rooms" className="btn btn-primary">
              Browse Rooms
            </Link>
            <Link to="/services" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-800">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-white text-sm mb-2">Scroll Down</div>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;