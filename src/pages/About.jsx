import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { FaCheckCircle, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa'; // Added icons
import { motion } from 'framer-motion';

const About = () => {
  // Animation Variants
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

  const productCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
  };


  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Header />
      <main className="flex-grow px-6 py-16 mt-20 md:m-20"> {/* Added responsive margin */}
        <motion.h1
          className="text-5xl font-extrabold text-center mb-10 text-primary font-poppins max-w-5xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          About Us
        </motion.h1>

        {/* Welcome Section */}
        <motion.section
  className="mb-16 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
  variants={sectionVariants}
  initial="hidden"
  animate="visible"
>
  <h2 className="text-3xl font-semibold text-dark mb-4 font-poppins flex items-center">
    <FaLeaf className="text-green-500 mr-2" />
    Welcome to GRAMLOK Fruits and Exports
  </h2>

  <p className="text-lg leading-relaxed text-gray-700">
    GRAMLOK Fruits and Exports is a trusted name in premium fruit farming, trading, and exports. 
    Established in 2018 by Ganesh Hariram Pawar, our company is committed to delivering the finest quality, naturally grown fruits to markets in India and across the globe. 
    We blend traditional farming expertise with modern technology to ensure exceptional freshness, taste, and nutritional value.
  </p>

  <p className="text-lg leading-relaxed text-gray-700 mt-4">
    Our journey began with a vision to promote sustainable agriculture and support local farmers by providing them with a global platform to showcase their produce. 
    Over the years, we have built a strong supply chain, ensuring that our fruits maintain their authenticity, rich flavor, and premium quality from farm to consumer. 
  </p>

  <h3 className="text-2xl font-semibold text-dark mt-6 font-poppins">Why Choose Us?</h3>
  <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mt-3">
    <li><strong>Premium Quality Assurance:</strong> Every fruit is carefully handpicked, ensuring freshness and superior taste.</li>
    <li><strong>Sustainable Farming Practices:</strong> We adhere to environmentally friendly methods to promote long-term agricultural health.</li>
    <li><strong>Global Export Network:</strong> Our efficient logistics ensure timely delivery to markets worldwide.</li>
    <li><strong>Direct Farmer Partnerships:</strong> We work closely with farmers to maintain quality and ensure fair pricing.</li>
    <li><strong>Advanced Processing & Packaging:</strong> Our state-of-the-art facilities preserve natural flavor and extend shelf life.</li>
  </ul>

  <p className="text-lg leading-relaxed text-gray-700 mt-6">
    At GRAMLOK Fruits and Exports, we are dedicated to bringing you nature’s best harvest—fresh, nutritious, and ethically sourced. 
    Whether you are a distributor, retailer, or an individual seeking premium farm-fresh produce, we are here to serve your needs with uncompromising quality.
  </p>
</motion.section>


        {/* Our Mission Section */}
        <motion.section
          className="mb-16 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg" // Added styling
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
              'Build lasting relationships with our customers and partners based on trust and transparency.' // Added a point
            ].map((text, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-700" // Changed text color
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                custom={index} // Pass index for delay
                whileHover="hover"
              >
                <FaCheckCircle className="text-accent mr-3 text-xl" /> {/* Increased icon size */}
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Our Products Section */}
        <motion.section
          className="mb-16 max-w-5xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-dark mb-6 font-poppins">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Increased gap */}
            {[
              {
                title: 'Mangoes',
                description: 'We offer a variety of premium, handpicked mangoes known for their exquisite flavor and aroma.',
                items: ['Alphonso', 'Keshar', 'Dusheri', 'Langda'],
                image: 'images/mango/hapush.png'
              }, {
                title: 'Guava',
                description: 'Our farm-fresh guavas are packed with vitamins and antioxidants, offering a delightful taste and numerous health benefits.',
                image: 'images/guava/sardar guava.png'
              }, {
                title: 'Chikoo',
                description: 'Enjoy the naturally sweet and energy-boosting Chikoo, a fruit with a uniquely smooth texture and rich flavor.',
                image: 'images/otherFruits/chiku.png'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300" // Added rounded-2xl
                variants={productCardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                <div className="relative group"> {/* Added relative for overlay */}
                    <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md mb-4" />  {/* Increased image height */}
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-[#0003] bg-opacity-20 flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <p className="text-white text-2xl font-bold">{product.title}</p>
                    </div>
                </div>
                {/* <h3 className="text-2xl font-semibold text-primary mb-3 font-poppins">{product.title}</h3> Increased font size */}
                <p className="text-gray-700 mb-4">{product.description}</p>  {/* Changed text color */}
                {product.items && (
                  <ul className="list-disc list-inside mt-2 text-gray-700">  {/* Changed text color */}
                    {product.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Location Section (Responsive Map) */}
        <motion.section
          className="mb-16 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg" // Added styling
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-dark mb-6 font-poppins flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> {/* Added Icon */}
            Location
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4"> {/* Changed text color */}
            Based in Phaltan, Maharashtra, our strategic location ensures efficient logistics and enables us to provide a smooth and timely distribution of fresh fruits to our valued customers.
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

        {/* Privacy Policy Section */}
        <motion.section
          className="mb-12 max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg"  // Added styling
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-dark mb-6 font-poppins">Privacy Policy</h2>
          <ul className="space-y-4">
            {[
              'We collect minimal data necessary to enhance your user experience.',
              'Your personal information will never be shared with third parties without your consent.',
              'We use cookies and analytics solely for the purpose of website improvements and performance monitoring.'
            ].map((policy, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-700"  // Changed text color
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                <FaCheckCircle className="text-accent mr-3 text-xl" /> {/* Increased icon size */}
                {policy}
              </motion.li>
            ))}
          </ul>
          <p className="text-lg mt-4 text-gray-700"> {/* Changed text color */}
            For any privacy-related concerns or inquiries, please contact us at <a href="mailto:gramlokfruits@gmail.com" className="text-blue-600 hover:text-blue-800">gramlokfruits@gmail.com</a>.
          </p>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default About;