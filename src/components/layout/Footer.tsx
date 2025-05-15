import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Esquire Hotel And Resort</h3>
            <p className="mb-4">
              Experience unparalleled hospitality, comfort, and convenience at our cozy establishment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-white transition-colors duration-300">Rooms</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Premium Lodging</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Restaurant & Bar</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Secure Parking</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Sports Viewing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-300">Laundry Services</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-secondary-400" />
                <span> Estate, 18/20 Okunola Cres Rd, Fatimo Bintu Solebo St, Lagos</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-secondary-400" />
                <span>+ (234) 903 187 0456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-secondary-400" />
                <span>esquireresorts@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center">
          <p>© {currentYear} Esquire Hotel And Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;