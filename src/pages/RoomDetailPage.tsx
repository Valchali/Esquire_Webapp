import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getRoomById } from '../data/rooms';
import { Bed, Users, DotSquare as SquareFootage, Check } from 'lucide-react';
import Loader from '../components/ui/Loader';

const RoomDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState(id ? getRoomById(id) : undefined);
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!room) {
      navigate('/rooms', { replace: true });
      return;
    }
    
    document.title = `${room.name} | Esquire Hotel And Resort`;
    setIsLoaded(true);
  }, [room, navigate]);

  if (!room) {
    return <Loader />;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Image Gallery */}
          <div className="relative h-96 md:h-[500px] bg-gray-900">
            <img 
              src={room.images[currentImage]} 
              alt={room.name}
              className="w-full h-full object-cover"
            />
            
            {/* Thumbnails */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-16 w-16 rounded-md overflow-hidden border-2 ${
                    currentImage === index ? 'border-secondary-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${room.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold font-serif mb-2">{room.name}</h1>
                <p className="text-gray-600 max-w-3xl">{room.description}</p>
              </div>
              <div className="mt-4 md:mt-0 bg-primary-50 p-4 rounded-lg">
                <div className="text-primary-600 font-bold text-2xl">${room.price}</div>
                <div className="text-gray-500">per night</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Bed className="h-6 w-6 text-primary-600 mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Bed Type</div>
                  <div className="font-medium">{room.bed}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-primary-600 mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Capacity</div>
                  <div className="font-medium">{room.capacity} {room.capacity > 1 ? 'Guests' : 'Guest'}</div>
                </div>
              </div>
              <div className="flex items-center">
                <SquareFootage className="h-6 w-6 text-primary-600 mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Room Size</div>
                  <div className="font-medium">{room.size} sq ft</div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Room Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-secondary-500 mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {room.available ? (
                <Link 
                  to={`/booking/${room.id}`}
                  className="btn btn-primary"
                >
                  Book This Room
                </Link>
              ) : (
                <button 
                  className="btn bg-gray-300 text-gray-600 cursor-not-allowed"
                  disabled
                >
                  Currently Unavailable
                </button>
              )}
              <Link 
                to="/rooms"
                className="btn btn-outline"
              >
                Back to All Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;