import FAQ from "../components/FAQ";

function About() {
      return (
        <div className="container mx-auto my-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <h3 className="text-xl font-semibold mb-2">Our Clinic</h3>
          <p>Founded in 2000, Dental has served Smart City for over two decades.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Our Team</h3>
          <p>Dr. ABCD, EFGH, leads our team with 25 years of experience.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Our Mission</h3>
          <p>To provide compassionate, high-quality dental care for all.</p>
          <FAQ />
        </div>
      );
    }
export default About;