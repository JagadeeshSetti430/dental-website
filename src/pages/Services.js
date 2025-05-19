import { useState } from "react";
import FAQ from "../components/FAQ";

function Services() {
      const [openIndex, setOpenIndex] = useState(null);
      const services = [
        {
          title: "Teeth Cleaning",
          desc: "Professional cleaning to keep your smile bright.",
          details: "Includes scaling and polishing for optimal oral health."
        },
        {
          title: "Fillings",
          desc: "Restore damaged teeth with durable fillings.",
          details: "Composite fillings for a natural look."
        },
        {
          title: "Whitening",
          desc: "Brighten your smile with safe whitening treatments.",
          details: "In-office or take-home kits available."
        },
        {
          title: "Braces",
          desc: "Straighten teeth with traditional or clear braces.",
          details: "Customized treatment plans for all ages."
        },
        {
          title: "Implants",
          desc: "Replace missing teeth with secure implants.",
          details: "Surgical placement with high success rates."
        },
        {
          title: "Root Canal",
          desc: "Save infected teeth with root canal therapy.",
          details: "Pain-free procedure with modern techniques."
        },
      ];

      const toggleService = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

      return (
        <div className="container mx-auto my-8">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="p-4 border rounded">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
                <button
                  className="text-blue-600 hover:underline mt-2"
                  onClick={() => toggleService(index)}
                  aria-expanded={openIndex === index}
                >
                  {openIndex === index ? 'Hide Details' : 'Show Details'}
                </button>
                <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                  <p className="p-2">{service.details}</p>
                </div>
              </div>
            ))}
          </div>
          <FAQ/>
        </div>
      );
    }
export default Services;