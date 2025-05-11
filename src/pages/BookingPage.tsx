import { useState, useEffect, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoomById } from '../data/rooms';
import { useAuth } from '../contexts/AuthContext';
import Loader from '../components/ui/Loader';

const BookingPage = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [room, setRoom] = useState(roomId ? getRoomById(roomId) : undefined);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!room) {
      navigate('/rooms', { replace: true });
      return;
    }
    
    if (!room.available) {
      navigate(`/rooms/${roomId}`, { replace: true });
      return;
    }
    
    document.title = `Book ${room.name} | Cozy Hotel`;
    
    // Set default dates (today and tomorrow)
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    setCheckIn(formatDate(today));
    setCheckOut(formatDate(tomorrow));
    
    // Set default guests
    setGuests(room.capacity >= 1 ? 1 : room.capacity);
  }, [room, roomId, navigate]);
  
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const calculateNumberOfNights = () => {
    if (!checkIn || !checkOut) return 0;
    
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };
  
  const calculateTotalPrice = () => {
    const nights = calculateNumberOfNights();
    return room ? room.price * nights : 0;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!checkIn || !checkOut) {
      setError('Please select check-in and check-out dates');
      return;
    }
    
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    
    if (start >= end) {
      setError('Check-out date must be after check-in date');
      return;
    }
    
    if (guests < 1 || (room && guests > room.capacity)) {
      setError(`Number of guests must be between 1 and ${room?.capacity}`);
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, this would be an API call to create a booking
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful booking
      navigate('/profile', { 
        state: { 
          bookingSuccess: true,
          roomName: room?.name,
          checkIn,
          checkOut,
          totalPrice: calculateTotalPrice()
        } 
      });
    } catch (err) {
      setError('Failed to create booking. Please try again.');
      setIsSubmitting(false);
    }
  };
  
  if (!room) {
    return <Loader />;
  }
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-serif">Book Your Stay</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <img 
                  src={room.images[0]} 
                  alt={room.name}
                  className="w-full md:w-64 h-48 object-cover rounded-lg flex-shrink-0"
                />
                
                <div>
                  <h2 className="text-xl font-bold mb-2">{room.name}</h2>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <span className="text-gray-600">Capacity:</span>
                      <span className="ml-1 font-medium">{room.capacity} Guests</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">Bed:</span>
                      <span className="ml-1 font-medium">{room.bed}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">Price:</span>
                      <span className="ml-1 font-medium">${room.price}/night</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {error && (
                <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="check-in" className="block text-gray-700 text-sm font-medium mb-2">
                      Check-in Date
                    </label>
                    <input
                      id="check-in"
                      type="date"
                      className="input"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={formatDate(new Date())}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="check-out" className="block text-gray-700 text-sm font-medium mb-2">
                      Check-out Date
                    </label>
                    <input
                      id="check-out"
                      type="date"
                      className="input"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || formatDate(new Date())}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-gray-700 text-sm font-medium mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      className="input"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      required
                    >
                      {[...Array(room.capacity)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input bg-gray-100"
                      value={user?.email || ''}
                      disabled
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="special-requests" className="block text-gray-700 text-sm font-medium mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="special-requests"
                    className="input h-32 resize-none"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Let us know if you have any special requests..."
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-bold mb-3">Booking Summary</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Room:</span>
                      <span>{room.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-in:</span>
                      <span>{checkIn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Check-out:</span>
                      <span>{checkOut}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nights:</span>
                      <span>{calculateNumberOfNights()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span>{guests}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold">${calculateTotalPrice()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => navigate(`/rooms/${roomId}`)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;