import { useState, useEffect, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | Cozy Hotel';
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Validate form
    if (!name || !email || !message) {
      setError('Please fill out all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real app, this would be an API call to send the message
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 bg-gray-900">
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            opacity: 0.6
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Contact Us</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              We're here to help and answer any questions you might have.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-3xl font-bold font-serif mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Please feel free to contact us using the information below or fill out the form to send us a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-gray-600"> Estate, 18/20 Okunola Cres Rd, Fatimo Bintu Solebo St, Ikorodu</p>
                  <p className="text-gray-600">Lagos, 104101</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+ (234) 903 187 0456 (Main)</p>
                  <p className="text-gray-600">+ (234) 903 187 0456 (Reservations)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">esquireresorts@gmail.com</p>
                  <p className="text-gray-600">reservations@Esquirehotelresort.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                  <p className="text-gray-600">Reception: 24/7</p>
                  <p className="text-gray-600">Restaurant: 6:30 AM - 10:30 PM</p>
                  <p className="text-gray-600">Bar: 11:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold font-serif mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6 animate-fade-in">
                  <h3 className="font-bold mb-2">Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
                  <button 
                    className="mt-4 text-primary-600 font-medium hover:text-primary-800"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="input"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      className="input h-32 resize-none"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please write your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn-primary py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map (in a real app this would be an iframe with Google Maps) */}
        <div className="mt-16 h-80 bg-gray-300 rounded-lg overflow-hidden shadow-md">
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <p className="text-gray-600">Map would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;