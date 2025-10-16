import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { FaCheckCircle, FaMapMarkerAlt, FaLeaf, FaUsers, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
  };

  // Team members data
  const leaders = [
    { name: "Mr. Ganesh Pawar", role: "Founder", img: "/images/ganesh.jpg" },
    { name: "Mr. Atharv Pawar", role: "Founder & CEO", img: "/images/atharv.png" },
    { name: "Mr. Anuj Pawar", role: "Co - Founder", img: "/images/anuj.jpg" },
    { name: "Mr. Om Kale", role: "Partner", img: "/images/omkale.png" },
  ];

  const developers = [
    { name: "Vivek Durgule", role: "Developer", img: "/images/sahil.jpg" },
    { name: "Nikhil Malave", role: "Developer", img: "/images/nikhil.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Header />
      <main className="flex-grow px-6 py-16 mt-20 md:m-20">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-10 text-primary font-poppins max-w-5xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          About Us
        </motion.h1>

        {/* --- TEAM SECTION --- */}
        <motion.section
          className="mb-16 max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-dark mb-10 font-poppins flex items-center justify-center">
            <FaUsers className="text-blue-500 mr-3" /> Meet Our Core Team
          </h2>

          {/* Leaders in 2-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
            {leaders.map((person, index) => (
              <motion.div
                key={index}
                className="bg-light rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-5 border-4 border-primary"
                />
                <h3 className="text-2xl font-semibold text-dark">{person.name}</h3>
                <p className="text-gray-600 text-lg">{person.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Developers Section */}
          <h3 className="text-2xl font-semibold text-dark mb-8 font-poppins flex items-center justify-center">
            <FaCode className="text-green-500 mr-2" /> Development Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {developers.map((dev, index) => (
              <motion.div
                key={index}
                className="bg-light rounded-2xl shadow-sm p-6 text-center hover:shadow-lg transition duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="w-28 h-28 object-cover rounded-full mx-auto mb-3 border-2 border-accent"
                />
                <h4 className="text-lg font-semibold text-dark">{dev.name}</h4>
                <p className="text-gray-600">{dev.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          className="mb-16 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-dark mb-6 font-poppins">Our Mission</h2>
          <ul className="space-y-4">
            {[
              'Deliver premium-quality fruits that consistently meet global standards.',
              'Promote sustainable farming practices and empower local farmers.',
              'Ensure freshness, authenticity, and exceptional taste in every fruit we supply.',
              'Build lasting relationships with our customers and partners based on trust and transparency.',
            ].map((text, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-700"
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                <FaCheckCircle className="text-accent mr-3 text-xl" />
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Location Section */}
        <motion.section
          className="mb-16 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-dark mb-6 font-poppins flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" />
            Location
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Based in Phaltan, Maharashtra, our strategic location ensures efficient logistics and enables us
            to provide a smooth and timely distribution of fresh fruits to our valued customers.
          </p>
          <div className="relative w-full h-96 md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              className="absolute inset-0 w-full h-full"
              title="Phaltan Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30358.849603004677!2d74.42737335180664!3d17.985426023234453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a536389a5081%3A0xa82576e60258a6bf!2sPhaltan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1742820795611!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.section>

        {/* Privacy Policy */}
        <motion.section
          className="mb-12 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-dark mb-6 font-poppins">Privacy Policy</h2>
          <ul className="space-y-4">
            {[
              'We collect minimal data necessary to enhance your user experience.',
              'Your personal information will never be shared with third parties without your consent.',
              'We use cookies and analytics solely for the purpose of website improvements and performance monitoring.',
            ].map((policy, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-700"
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                <FaCheckCircle className="text-accent mr-3 text-xl" />
                {policy}
              </motion.li>
            ))}
          </ul>
          <p className="text-lg mt-4 text-gray-700">
            For any privacy-related concerns or inquiries, please contact us at{" "}
            <a href="mailto:gramlokfruits@gmail.com" className="text-blue-600 hover:text-blue-800">
              gramlokfruits@gmail.com
            </a>.
          </p>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
