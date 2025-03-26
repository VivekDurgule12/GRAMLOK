import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { FaCheckCircle, FaShippingFast, FaAward, FaUsers, FaQuoteLeft ,FaPhoneAlt  } from 'react-icons/fa';
import { motion } from 'framer-motion';
import banner1 from "../images/banner/banner1.png";
import banner2 from "../images/banner/banner2.png";
import banner3 from "../images/banner/banner3.png";
import banner4 from "../images/banner/banner4.png";


const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [banner1, banner2, banner3, banner4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: <FaShippingFast size={48} className="text-primary" />, title: 'Fast & Reliable Shipping', description: 'We ensure your order arrives quickly and safely.' },
    { icon: <FaAward size={48} className="text-primary" />, title: 'Premium Quality Fruits', description: 'We source only the finest organic fruits.' },
    { icon: <FaUsers size={48} className="text-primary" />, title: 'Exceptional Customer Service', description: 'Our team is here to assist you anytime.' },
  ];

  // const categorizedProducts = {
  //   'Mango Varieties': [
  //     { id: 'alphonso', name: 'Hapus (Alphonso)', image: '/alphonso.jpg', description: 'Sourced from Konkan, original and natural.' },
  //     { id: 'kesar', name: 'Kesar', image: '/kesar.jpg', description: 'Vibrant orange pulp, sweet and tangy.' },
  //     { id: 'dussehri', name: 'Dussehri', image: '/dussehri.jpg', description: 'Juicy, smooth, and fiberless.' },
  //     { id: 'langda', name: 'Langda', image: '/langda.jpg', description: 'Rich aroma and sweet taste.' },
  //     { id: 'lalbagh', name: 'Lalbagh', image: '/lalbagh.jpg', description: 'Popular for its unique flavor.' },
  //     { id: 'badam-benisha', name: 'Badam Benisha', image: '/badam-benisha.jpg', description: 'Sweet and nutty taste.' },
  //   ],
  //   'Guava Varieties': [
  //     { id: 'sardar-guava', name: 'Sardar Guava', image: '/sardar-guava.jpg', description: 'Large, sweet, and aromatic.' },
  //     { id: 'pink-taiwan-guava', name: 'Pink Taiwan Guava', image: '../', description: 'Rich in flavor and nutrition.' },
  //   ],
  //   'Other Fruits': [
  //     { id: 'chikoo', name: 'Chikoo', image: '/chikoo.jpg', description: 'Soft, sweet, and nutrient-rich.' },
  //   ]
  // };

  const categorizedProducts = {
    'Mango Varieties': [
      { id: 'alphonso', name: 'Hapus (Alphonso)', image: 'src/images/mango/hapush.png', description: 'Sourced from Konkan, original and natural.' },
      { id: 'kesar', name: 'Kesar', image: 'src/images/mango/kesar mango.png', description: 'Vibrant orange pulp, sweet and tangy.' },
      { id: 'dussehri', name: 'Dussehri', image: 'src/images/mango/dasheri mango.png', description: 'Juicy, smooth, and fiberless.' },
      { id: 'langda', name: 'Langda', image: 'src/images/mango/langra mango.png', description: 'Rich aroma and sweet taste.' },
      { id: 'lalbagh', name: 'Lalbagh', image: 'src/images/mango/lalbag mango.png', description: 'Popular for its unique flavor.' },
      { id: 'badam-benisha', name: 'Badam Benisha', image: 'src/images/mango/badam banisha mango.png', description: 'Sweet and nutty taste.' },
    ],
    'Guava Varieties': [
      { id: 'sardar-guava', name: 'Sardar Guava', image: 'src/images/guava/sardar guava.png', description: 'Large, sweet, and aromatic.' },
      { id: 'pink-taiwan-guava', name: 'Pink Taiwan Guava', image: 'src/images/guava/pink taiwan guava.png', description: 'Rich in flavor and nutrition.' },
    ],
    'Other Fruits': [
      { id: 'chikoo', name: 'Chikoo', image: 'src/images/otherFruits/chiku.png', description: 'Soft, sweet, and nutrient-rich.' },
    ]
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Image Showcase */}
        <section className="relative bg-black text-center text-white py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              key={currentImage}
              src={heroImages[currentImage]} 
              alt="Hero Background" 
              className="w-full h-full object-cover transition-opacity  brightness-50 " 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 container mx-auto px-4"
          >
            <h1 className="text-6xl font-extrabold mb-6">Taste the Essence of Freshness</h1>
            <p className="text-2xl mb-8">Delivering farm-fresh organic fruits directly to your doorstep.</p>


            <a
      href="tel:+918317284314"
      className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    >
      {/* Background Glow Effect */}
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-orange-800 via-yellow-400 to-orange-500 opacity-50 blur-xl"></span>
      </span>

      {/* Phone Icon with Hover Rotation */}
      <FaPhoneAlt className="mr-2 text-xl transition-transform transform group-hover:rotate-12" />

      {/* Button Text */}
      <span className="relative text-white">Call Now</span>
    </a>

          </motion.div>
        </section>

        {/* Product Showcase Section */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-10">Our Premium Selection</h2>
            {Object.keys(categorizedProducts).map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-3xl font-semibold mb-6 border-b-4 border-primary pb-2 inline-block">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {categorizedProducts[category].map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transition-transform transform hover:shadow-xl"
                    >
                      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-lg mb-4" />
                      <h3 className="text-2xl font-semibold mt-2 text-gray-800">{product.name}</h3>
                      <p className="text-lg text-gray-600 mt-2">{product.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Gallery Section */}
                {/* Gallery Section */}
                <section className="py-16 b">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-10">Fruit Gallery</h2>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {[
                { id: 1, src: '/gallery1.jpg', alt: 'Fresh Alphonso Mangoes' },
                { id: 2, src: '/gallery2.jpg', alt: 'Juicy Guavas' },
                { id: 3, src: '/gallery3.jpg', alt: 'Organic Chikoo' },
                { id: 4, src: '/gallery4.jpg', alt: 'Mango Plantation' },
                { id: 5, src: '/gallery5.jpg', alt: 'Freshly Harvested Fruits' },
                { id: 6, src: '/gallery6.jpg', alt: 'Fruit Packing for Delivery' },
                { id: 7, src: '/gallery7.jpg', alt: 'Seasonal Mango Varieties' },
                { id: 8, src: '/gallery8.jpg', alt: 'Farm-Fresh Fruits in Baskets' },
              ].map((image) => (
                <motion.div
                  key={image.id}
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-lg shadow-md bg-white break-inside-avoid"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>


           

      </main>
      <Footer />
    </div>
  );
};

export default Home;
