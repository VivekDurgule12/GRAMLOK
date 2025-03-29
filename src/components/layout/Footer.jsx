import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="bg-[#ffffff] -700 py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-start">
            <img
              src={logo}
              alt="Gramlok Fruits and Exports Logo"
              className="h-16 mb-4"
            />
            <p className="font-bold text-lg font-poppins ">
              GRAMLOK FRUITS & EXPORTS
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins text-black">
              Contact Us
            </h3>
            <div className="flex items-center mb-2">
              <FaPhone className="text-black mr-2 text-lg" />
              <a
                href="tel:+918317284314"
                className="text-black hover:text-black transition duration-300"
              >
                +918317284314
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-black mr-2 text-lg" />
              <a
                href="mailto:gramlokfruits@gmail.com"
                className="text-black hover:text-black transition duration-300"
              >
                gramlokfruits@gmail.com
              </a>
            </div>
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="text-black mr-2 text-lg mt-1" />
              <p className="text-sm text-black">
                GRAMLOK FRUITS AND EXPORTS, Phaltan, Maharashtra, India
              </p>
            </div> 
             
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins text-black">
              Quick Links
            </h3>
            <ul>
              <li>
                <a
                  href="/"
                  className="text-black hover:text-black transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-black hover:text-black transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-black hover:text-black transition duration-300"
                >
                  Contact
                </a>
              </li>
              {/* <li><a href="/products" className="hover:text-green-400 transition duration-300">Products</a></li>  You can uncomment when needed*/}
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins text-black">
              Follow Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.instagram.com/gramlok_fruits_and_exports/"
                className="text-white hover:text-green-400 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} color="black"/>
              </a>
              <a
                href="https://www.linkedin.com/company/gramlok-globle-exim/"
                className="text-green-700 hover:text-green-400 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} color="black"/>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61573057093253"
                className="text-black hover:text-green-400 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} color="black"/>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm border-t border-gray-600 pt-4 text-black">
          © {new Date().getFullYear()} GRAMLOK FRUITS AND EXPORTS. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;