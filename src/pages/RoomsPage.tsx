import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAvailableRooms } from '../data/rooms';
import { Bed, Users, DotSquare as SquareFootage, ArrowRight } from 'lucide-react';

const RoomsPage = () => {
  const [rooms, setRooms] = useState(getAvailableRooms());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Rooms | Cozy Hotel';
    setIsLoaded(true);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 bg-gray-900">
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            opacity: 0.6
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Our Rooms</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Experience comfort and luxury in our thoughtfully designed accommodations.
            </p>
          </div>
        </div>
      </div>

      {/* Rooms List */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={room.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
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
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 text-primary-600 mr-1" />
                    <span className="text-sm text-gray-600">{room.bed}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-primary-600 mr-1" />
                    <span className="text-sm text-gray-600">{room.capacity} Guests</span>
                  </div>
                  <div className="flex items-center">
                    <SquareFootage className="h-4 w-4 text-primary-600 mr-1" />
                    <span className="text-sm text-gray-600">{room.size} sq ft</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-primary-600 font-bold">₦{room.price} <span className="text-gray-500 font-normal text-sm">per night</span></div>
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
      </div>
    </div>
  );
};

export default RoomsPage;