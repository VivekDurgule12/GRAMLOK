import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { FaCheckCircle, FaLeaf, FaTruck, FaGlobe, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Header />
      <main className="flex-grow px-4 py-12 mt-20 md:px-12">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-primary font-poppins max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        >
          About Gramlok Naturals
        </motion.h1>

        {/* Welcome & Mission */}
        <motion.section
          className="mb-12 max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-dark mb-3 flex items-center">
            <FaLeaf className="text-green-500 mr-2" /> Who We Are
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Gramlok Naturals brings farm-fresh authenticity from Maharashtra directly to your home. 
            We cultivate Hapus mangoes in Devgad & Ratnagiri and Keshar mangoes in Satara using natural farming practices. 
            Our offerings include premium fruits, grains, staples, and other natural products, maintaining purity, sustainability, and trust in every delivery.
          </p>
        </motion.section>

        {/* Highlights / Statistics */}
        <motion.section
          className="mb-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: <FaCertificate className="text-4xl text-green-600" />, title: 'GI Certified Mangoes', subtitle: 'Devgad & Ratnagiri Alphonso' },
            { icon: <FaTruck className="text-4xl text-green-600" />, title: 'Farm-to-Export', subtitle: 'Fresh from our farms to global markets' },
            { icon: <FaGlobe className="text-4xl text-green-600" />, title: 'Global Delivery', subtitle: 'Serving Middle East, Europe, Asia-Pacific' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"
              variants={sectionVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-2 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Vision & Values */}
        <motion.section
          className="mb-12 max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-dark mb-3 font-poppins">Our Vision</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            To become a trusted global brand for authentic Indian mangoes, fruits, and natural products.
          </p>

          <h3 className="text-xl font-semibold text-dark mb-3 font-poppins">Our Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            {['Sustainability', 'Authenticity', 'Trust', 'Quality'].map((value, i) => (
              <motion.div
                key={i}
                className="bg-green-50 p-3 rounded-xl shadow font-semibold text-green-700"
                variants={listItemVariants}
                custom={i}
              >
                {value}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          className="mb-12 max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-semibold text-dark mb-4 font-poppins">Why Choose Gramlok Naturals?</h2>
          <ul className="space-y-2">
            {[
              'GI Certified Devgad Alphonso & Keshar Mangoes',
              'Direct-from-farm sourcing with no middlemen',
              'Naturally ripened, chemical-free fruits',
              'International-grade packaging & reliable logistics',
              'Global delivery network ensuring freshness',
            ].map((text, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-700 text-sm md:text-base"
                variants={listItemVariants}
                custom={index}
                whileHover="hover"
              >
                <FaCheckCircle className="text-accent mr-2 md:mr-3 text-lg md:text-xl" />
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="bg-yellow-100 py-10 text-center rounded-2xl shadow-lg max-w-4xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl md:text-2xl font-bold text-green-700">Partner With Us</h3>
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            Experience the real taste of India’s finest fruits and natural products.
          </p>
         
        </motion.section>
      </main>
    </div>
  );
};

export default About;
