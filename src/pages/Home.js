import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

function Home() {
      return (
        <div>
          <div className="bg-blue-100 p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to Dental Services</h2>
            <p className="mb-4">Your trusted dental care provider for a healthy smile.</p>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Book Appointment
            </Link>
          </div>
          <div className="container mx-auto my-8">
            <h3 className="text-2xl font-bold mb-4">About Our Services</h3>
            <p>We provide dental care with a focus on patient comfort.</p>
            <h3 className="text-2xl font-bold mt-8 mb-4">Our Services</h3>
            <p>From cleanings to cosmetic dentistry, we cover all your dental needs.</p>
          </div>
          <FAQ />
        </div>
      );
    }
export default Home;
