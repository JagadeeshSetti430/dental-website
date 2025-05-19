import { useState } from "react";

function FAQ() {
      const [openIndex, setOpenIndex] = useState(null);
      const faqs = [
        { q: "What are your hours?", a: "Mon-Fri: 9AM-5PM, Sat: 10AM-2PM" },
        { q: "Do you accept insurance?", a: "Yes, we accept most major insurance plans." },
      ];

      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

      return (
        <div className="container mx-auto my-8">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-2 bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}>
                {faq.q}
              </button>
              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <p className="p-2">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

export default FAQ;