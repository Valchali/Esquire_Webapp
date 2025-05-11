import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, LogOut } from 'lucide-react';

interface BookingSuccessState {
  bookingSuccess?: boolean;
  roomName?: string;
  checkIn?: string;
  checkOut?: string;
  totalPrice?: number;
}

interface Booking {
  id: string;
  roomName: string;
  roomImage: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  status: 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successDetails, setSuccessDetails] = useState<BookingSuccessState>({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'My Profile | Cozy Hotel';
    
    // Check if we have booking success information in location state
    const state = location.state as BookingSuccessState | null;
    if (state?.bookingSuccess) {
      setShowSuccessMessage(true);
      setSuccessDetails(state);
      
      // Create a new booking with this information
      const newBooking: Booking = {
        id: `booking-${Date.now()}`,
        roomName: state.roomName || 'Room',
        roomImage: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        checkIn: state.checkIn || '',
        checkOut: state.checkOut || '',
        totalPrice: state.totalPrice || 0,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      };
      
      setBookings(prev => [newBooking, ...prev]);
      
      // Clear the location state
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  
  useEffect(() => {
    // In a real app, we would fetch the user's bookings from the backend
    // For demo purposes, we'll create some mock bookings if the list is empty
    if (bookings.length === 0) {
      const mockBookings: Booking[] = [
        {
          id: 'booking-1',
          roomName: 'Deluxe Suite',
          roomImage: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          checkIn: '2025-01-15',
          checkOut: '2025-01-20',
          totalPrice: 1495,
          status: 'confirmed',
          createdAt: '2024-12-20T10:30:00Z',
        },
        {
          id: 'booking-2',
          roomName: 'Standard Double',
          roomImage: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          checkIn: '2024-11-05',
          checkOut: '2024-11-08',
          totalPrice: 447,
          status: 'completed',
          createdAt: '2024-10-15T15:45:00Z',
        }
      ];
      
      setBookings(mockBookings);
    }
  }, [bookings.length]);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  if (!user) {
    return null;
  }
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {showSuccessMessage && (
            <div className="mb-8 p-4 bg-green-100 text-green-800 rounded-lg animate-fade-in">
              <h3 className="font-bold text-lg mb-1">Booking Confirmed!</h3>
              <p>Your stay at {successDetails.roomName} has been successfully booked from {successDetails.checkIn} to {successDetails.checkOut}.</p>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-primary-700 p-6 text-white">
              <h1 className="text-2xl font-bold mb-2 font-serif">My Profile</h1>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <User className="h-12 w-12 text-primary-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-auto flex items-center px-4 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h3 className="font-bold mb-2">Member Since</h3>
                  <p>October 2024</p>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h3 className="font-bold mb-2">Total Stays</h3>
                  <p>{bookings.length}</p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 font-serif">My Bookings</h2>
          
          {bookings.length > 0 ? (
            <div className="space-y-6">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className={`p-3 text-white ${
                    booking.status === 'confirmed' ? 'bg-primary-600' :
                    booking.status === 'completed' ? 'bg-green-600' :
                    'bg-red-600'
                  }`}>
                    <div className="capitalize font-medium">{booking.status}</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img 
                        src={booking.roomImage} 
                        alt={booking.roomName}
                        className="w-full md:w-48 h-32 object-cover rounded-lg flex-shrink-0"
                      />
                      
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-2">{booking.roomName}</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                          <div>
                            <span className="text-gray-600">Check-in:</span>
                            <span className="ml-2 font-medium">{booking.checkIn}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Check-out:</span>
                            <span className="ml-2 font-medium">{booking.checkOut}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Total Price:</span>
                            <span className="ml-2 font-medium">${booking.totalPrice}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Booked on:</span>
                            <span className="ml-2 font-medium">
                              {new Date(booking.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        
                        {booking.status === 'confirmed' && (
                          <div className="flex gap-3">
                            <button className="btn btn-sm btn-outline">
                              Modify Booking
                            </button>
                            <button className="btn btn-sm text-red-600 bg-transparent border border-red-600 hover:bg-red-50">
                              Cancel Booking
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-600 mb-4">You don't have any bookings yet.</p>
              <button 
                onClick={() => navigate('/rooms')}
                className="btn btn-primary"
              >
                Browse Rooms
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;