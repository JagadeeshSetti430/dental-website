import { Link } from "react-router-dom";

function Header() {
      return (
        <header>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Dental Services</h1>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline text-white">Home</Link></li>
              <li><Link to="/about" className="hover:underline text-white">About Us</Link></li>
              <li><Link to="/services" className="hover:underline text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:underline text-white">Contact Us</Link></li>
            </ul>
          </div>
        </nav>
        </header>
      );
    }
export default Header;