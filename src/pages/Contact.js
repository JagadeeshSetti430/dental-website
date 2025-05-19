import FAQ from "../components/FAQ";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


   // Contact Us Page
function Contact() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [errors, setErrors] = useState({});
      const navigate = useNavigate();

      const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.subject) newErrors.subject = 'Subject is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', formData)
          .then(() => {
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setErrors({});
            navigate('/');
          })
          .catch((error) => console.error('Error submitting form:', error));
      };

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
          setErrors({ ...errors, [e.target.name]: null });
        }
      };

      return (
        <div className="container mx-auto my-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <div>
                <label className="block mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  aria-required="true"/>
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="mt-4">
                <label className="block mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  aria-required="true"/>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="mt-4">
                <label className="block mb-1" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  aria-required="true"/>
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>
              <div className="mt-4">
                <label className="block mb-1" htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="4"
                  aria-required="true">
                  </textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button
                onClick={handleSubmit}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Send Message
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p>Phone: 7777777777</p>
              <p>Email: dentalservice@gmail.com</p>
              <p>Address: 123 Dental Services, Smart City, SC 12345.</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Find Us</h3>
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3938087.7600317644!2d77.833272!3d15.441944750825282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747639734802!5m2!1sen!2sin" 
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Clinic Location">
            </iframe>
            </div>
          </div>
          <FAQ />
        </div>
      );
    }
export default Contact;