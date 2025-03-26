





import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
  FaAward,
  FaPhoneAlt,
  FaShippingFast,
  FaShoppingCart,
  FaTrash,
  FaUsers,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import banner1 from "../images/banner/banner1.png";
import banner2 from "../images/banner/banner2.png";
import banner3 from "../images/banner/banner3.png";
import banner4 from "../images/banner/banner4.png";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [banner1, banner2, banner3, banner4];
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPincode, setCustomerPincode] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Load cart from local storage on component mount
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        localStorage.removeItem("cart"); // Remove corrupted data
      }
    }
  }, []);

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const services = [
    {
      icon: <FaShippingFast size={48} className="text-primary" />,
      title: "Fast & Reliable Shipping",
      description: "We ensure your order arrives quickly and safely.",
    },
    {
      icon: <FaAward size={48} className="text-primary" />,
      title: "Premium Quality Fruits",
      description: "We source only the finest organic fruits.",
    },
    {
      icon: <FaUsers size={48} className="text-primary" />,
      title: "Exceptional Customer Service",
      description: "Our team is here to assist you anytime.",
    },
  ];

  const categorizedProducts = {
    "Mango Varieties": [
      {
        id: "alphonso",
        name: "Hapus (Alphonso)",
        image: "/images/mango/hapush.png",
        description: "Sourced from Konkan, original and natural.",
      },
      {
        id: "kesar",
        name: "Kesar",
        image: "/images/mango/kesar mango.png",
        description: "Vibrant orange pulp, sweet and tangy.",
      },
      {
        id: "dussehri",
        name: "Dussehri",
        image: "/images/mango/dasheri mango.png",
        description: "Juicy, smooth, and fiberless.",
      },
      {
        id: "langda",
        name: "Langda",
        image: "/images/mango/langra mango.png",
        description: "Rich aroma and sweet taste.",
      },
      {
        id: "lalbagh",
        name: "Lalbagh",
        image: "/images/mango/lalbag mango.png",
        description: "Popular for its unique flavor.",
      },
      {
        id: "badam-benisha",
        name: "Badam Benisha",
        image: "/images/mango/badam banisha mango.png",
        description: "Sweet and nutty taste.",
      },
    ],
    "Guava Varieties": [
      {
        id: "sardar-guava",
        name: "Sardar Guava",
        image: "/images/guava/sardar guava.png",
        description: "Large, sweet, and aromatic.",
      },
      {
        id: "pink-taiwan-guava",
        name: "Pink Taiwan Guava",
        image: "/images/guava/pink taiwan guava.png",
        description: "Rich in flavor and nutrition.",
      },
    ],
    "Other Fruits": [
      {
        id: "chikoo",
        name: "Chikoo",
        image: "/images/otherFruits/chiku.png",
        description: "Soft, sweet, and nutrient-rich.",
      },
    ],
  };

  const addToCart = (product) => {
    let quantityToAdd = productQuantities[product.id] || "1"; // Get quantity as string
    quantityToAdd = quantityToAdd.trim(); // Remove leading/trailing spaces

    if (
      quantityToAdd === "" ||
      isNaN(parseInt(quantityToAdd)) ||
      parseInt(quantityToAdd) <= 0
    ) {
      toast.error(
        "Please enter a valid quantity (greater than 0) to add to cart.",
        {
          position: "top-center",
        }
      );
      return;
    }

    quantityToAdd = parseInt(quantityToAdd); //Convert to number if its valid

    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex > -1) {
      // Item already exists in the cart, update the quantity
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += quantityToAdd;
      setCart(newCart);
      toast.success(`${quantityToAdd} dozen(s) of ${product.name} added to cart!`, {
        position: "top-center",
      });
    } else {
      // Item doesn't exist in cart, add it
      setCart([...cart, { ...product, quantity: quantityToAdd }]);
      toast.success(`${quantityToAdd} dozen(s) of ${product.name} added to cart!`, {
        position: "top-center",
      });
    }

    // Reset the quantity input for this product to empty string
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: "", // Reset to empty string
    }));
  };

  const removeFromCart = (productId) => {
    const productName = cart.find((item) => item.id === productId)?.name;
    setCart(cart.filter((item) => item.id !== productId));
    toast.error(`${productName} removed from cart!`, {
      position: "top-center",
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    const parsedQuantity = parseInt(newQuantity, 10);

    // if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
    if (parsedQuantity <= 0) {
      toast.error("Please enter a valid quantity (non-negative number).", {
        position: "top-center",
      });
      return;
    }

    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: parsedQuantity } : item
    );
    setCart(updatedCart);
    const productName = cart.find((item) => item.id === productId)?.name;
    // toast.info(
    //   `Quantity for ${productName} updated to ${parsedQuantity} dozen(s).`,
    //   {
    //     position: "top-center",
    //   }
    // );
  };

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) {
      toast.warn("Your cart is empty!", {
        position: "top-center",
      });
      return;
    }

    if (
      !customerName ||
      !customerAddress ||
      !customerPincode ||
      !customerNumber
    ) {
      toast.error("Please fill in all customer details.", {
        position: "top-center",
      });
      return;
    }

    if (customerNumber.length !== 10 || isNaN(customerNumber)) {
      toast.error("Please enter a valid 10-digit phone number.", {
        position: "top-center",
      });
      return;
    }

    if (customerPincode.length !== 6 || isNaN(customerPincode)) {
      toast.error("Please enter a valid 6-digit pincode.", {
        position: "top-center",
      });
      return;
    }
    let message = `New Order:\nCustomer Name: ${customerName}\nPhone Number: ${customerNumber}\nAddress: ${customerAddress}\nPincode: ${customerPincode}\n\nItems:\n`;
    cart.forEach((item) => {
      message += `- ${item.name} - ${item.quantity} Dozen(s)\n`;
    });
    message += `\nThank you!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "+918317284314";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    setCart([]);
    setCustomerAddress("");
    setCustomerName("");
    setCustomerPincode("");
    setCustomerNumber("");
    setShowCart(false);
    setProductQuantities({});
    toast.success("Order placed successfully! Check your WhatsApp.", {
      position: "top-center",
    });
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ToastContainer /> {/* Ensure ToastContainer is placed appropriately */}
      <main className="flex-grow">
        <section className="relative bg-black text-center text-white py-40 overflow-hidden">
          {/* Hero Section (Banner) */}
          <div className="absolute inset-0 z-0">
            <motion.img
              key={currentImage}
              src={heroImages[currentImage]}
              alt="Hero Background"
              className="w-full h-full object-cover transition-opacity brightness-50"
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


<div className="flex items-center justify-center h-[400px] sm:h-[500px] bg-[url('/your-image.jpg')] bg-cover bg-center text-center relative px-4">
      <div className="relative max-w-4xl p-8">
        
        {/* Smooth, faded, rounded blur effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 mx-auto w-[90%] h-[70%] rounded-[40%] bg-white/20 blur-[120px] opacity-60"
        ></motion.div>

        {/* Heading with gradient effect */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#ff6c12] to-green-500 text-transparent bg-clip-text drop-shadow-lg"
        >
          THE SWEETEST TEST OF NATURE
        </motion.h1>

        {/* Subtext with fade-in effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="relative text-lg sm:text-xl md:text-2xl text-white opacity-90"
        >
          Delivering farm-fresh organic fruits directly to your doorstep.
        </motion.p>
      </div>
    </div>


            <div className="flex justify-center items-center space-x-4">
              <a
                href="tel:+918317284314"
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-800 via-yellow-400 to-orange-500 opacity-50 blur-xl"></span>
                </span>
                <FaPhoneAlt className="mr-2 text-xl transition-transform transform group-hover:rotate-12" />
                <span className="relative text-white">Call Now</span>
              </a>
              <button
                onClick={toggleCart}
                className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-800 via-yellow-400 to-green-500 opacity-50 blur-xl"></span>
                </span>
                <FaShoppingCart className="mr-2 text-xl" />
                <span className="relative text-white">View Cart</span>
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-2/4 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        </section>

        {/* Product Listing Section */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4 text-center">
            <h2   className="text-4xl font-bold mb-10">
              Our Premium Selection
            </h2>
            {Object.keys(categorizedProducts).map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-3xl font-semibold mb-6 border-b-4 border-primary pb-2 inline-block">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {(categorizedProducts[category] || []).map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transition-transform transform hover:shadow-xl"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-64 h-64 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-2xl font-semibold mt-2 text-gray-800">
                        {/* {product.name} */}
                      </h3>
                      <p className="text-lg text-gray-600 mt-2">
                        {product.description}
                      </p>

                      {/* Quantity Input
                      <div className="flex items-center justify-center mt-4">
                        <label htmlFor={`quantity-${product.id}`} className="mr-2">
                          Quantity (Dozen):
                        </label>
                        <input
                          type="number"
                          id={`quantity-${product.id}`}
                          min="0"
                          className="w-20 p-2 border rounded text-center"
                          value={productQuantities[product.id] || ""}  //Set Default value is empty
                          onChange={(e) => {
                            setProductQuantities({
                              ...productQuantities,
                              [product.id]: e.target.value,
                            });
                          }}
                        />
                      </div> */}

                      <button
                        className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

            <section>
            <div className="flex justify-center items-center py-16 px-6 from-[#ff6c12] to-green-500 text-transparent bg-clip-text drop-shadow-lg">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Our Delivery Options
        </h2>

        <p className="text-lg text-gray-700 text-center mb-8">
          At <span className="font-semibold text-[#ff6c12]">Gramlok Fruits and Exports</span>, we ensure farm-fresh fruit deliveries with care and efficiency. Whether local or international, our shipping options are tailored to meet your needs.
        </p>

        {/* Delivery Options Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Domestic Delivery */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Domestic Delivery (India)</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Standard Shipping:</strong> 3-5 business days</li>
              <li><strong>Express Shipping:</strong> 1-2 business days (for select locations)</li>
              <li><strong>Bulk Orders:</strong> Custom delivery arrangements available</li>
            </ul>
          </div>

          {/* International Shipping */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">International Shipping</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Air Freight:</strong> Fast delivery for premium quality assurance</li>
              <li><strong>Sea Freight:</strong> Cost-effective option for bulk shipments</li>
              <li><strong>Custom Packaging:</strong> Ensuring freshness throughout transit</li>
            </ul>
          </div>

        </div>

        

        {/* Contact Section */}
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-gray-800">
            For custom shipping solutions or bulk inquiries, <span className="text-[#ff6c12]"><Link to="/contact" className="text-[#ff6c12] hover:underline">
              contact us today
            </Link>.</span>
          </p>
        </div>
      </div>
    </div>
            </section>
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#000000ac] z-50 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between py-2 border-b"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          min="0"
                          className="w-20 p-2 border rounded text-center"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, e.target.value)
                          }
                        />
                        <span> Dozen(s)</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Customer Details</h3>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded mb-3"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full p-2 border rounded mb-3"
                value={customerNumber}
                onChange={(e) => setCustomerNumber(e.target.value)}
                required
              />

              <textarea
                placeholder="Your Address"
                className="w-full p-2 border rounded mb-3"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Pincode"
                className="w-full p-2 border rounded mb-3"
                value={customerPincode}
                onChange={(e) => setCustomerPincode(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={toggleCart}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={generateWhatsAppMessage}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-400"
                disabled={
                  cart.length === 0 ||
                  !customerName ||
                  !customerAddress ||
                  !customerPincode ||
                  !customerNumber
                }
              >
                Place Order on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;