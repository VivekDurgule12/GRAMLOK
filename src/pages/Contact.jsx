import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Send message to WhatsApp
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    // Create a WhatsApp message
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here is my message: ${message}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp API link (Replace with your number)
    const whatsappLink = `https://wa.me/918317284314?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 m-20 md:m-20">
      <motion.h1
          className="text-5xl font-extrabold text-center mb-10 text-primary font-poppins max-w-5xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-dark mb-6">Send us a Message</h2>
            <form onSubmit={sendToWhatsApp} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark">Name</label>
                <input 
                  type="text" id="name" value={formData.name} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark">Email</label>
                <input 
                  type="email" id="email" value={formData.email} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark">Message</label>
                <textarea 
                  id="message" rows="4" value={formData.message} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-primary bg-amber-700 hover:bg-orange-600 text-white font-bold py-3 rounded-full transition duration-300">
                Send Message on WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-dark mb-6">Contact Information</h2>
            <div className="space-y-5">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-primary mr-3 text-lg" />
                <p className="text-dark">GRAMLOK FRUITS AND EXPORTS, Phaltan, Maharashtra, India</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-primary mr-3 text-lg" />
                <a href="tel:+918317284314" className="text-dark hover:text-primary transition duration-300">+91 8317284314</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary mr-3 text-lg" />
                <a href="mailto:gramlokfruits@gmail.com" className="text-dark hover:text-primary transition duration-300">gramlokfruits@gmail.com</a>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-green-500 mr-3 text-lg" />
                <a href="https://wa.me/918317284314" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-green-600 transition duration-300">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Social Media */}
            <h4 className="text-lg font-semibold text-dark mt-6">Follow Us On:</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-primary hover:text-secondary transition duration-300" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-primary hover:text-secondary transition duration-300" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>

            {/* Business Inquiry */}
            <p className="text-lg text-dark leading-relaxed mt-6">
              For inquiries, bulk orders, and business collaborations, feel free to contact us!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
