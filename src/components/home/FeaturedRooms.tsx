import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedRooms } from '../../data/rooms';
import { ArrowRight } from 'lucide-react';

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState(getFeaturedRooms());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('featured-rooms');
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

  return (
    <section id="featured-rooms" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Featured Rooms
          </h2>
          <p className="text-gray-600">
            Experience comfort and luxury in our carefully designed rooms. Each room is equipped with modern amenities to ensure your stay is memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={room.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden room-card">
                <img 
                  src={room.images[0]} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="room-overlay absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    to={`/rooms/${room.id}`}
                    className="px-6 py-2 bg-white text-primary-600 font-medium rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-primary-600 font-bold">${room.price} <span className="text-gray-500 font-normal text-sm">per night</span></div>
                  <Link 
                    to={`/rooms/${room.id}`}
                    className="text-primary-600 font-medium flex items-center hover:text-primary-800 transition-colors duration-300"
                  >
                    Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/rooms" className="btn btn-outline">
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;