import React from 'react';
import logo from '../../assets/logo.png';
import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Enquiry from './Enquiry';
import { useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Enquiry', href: '/enquiry' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const location = useLocation();

  const handleNavClick = (href) => {
    if (href === '/products') {
      const section = document.getElementById('products');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = href;
    }
  };


  

  return (
    <Disclosure as="nav" className="bg-[#fff9f6] shadow-md py-4 fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <img src={logo} alt="Company Logo" className="h-12 md:h-16 mr-4" />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:space-x-6">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={classNames(
                        'relative text-lg font-medium transition duration-300 pb-1 cursor-pointer bg-transparent border-none',
                        isActive
                          ? 'text-primary font-bold border-b-2 border-primary'
                          : 'text-gray-700 hover:text-primary'
                      )}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <Disclosure.Button className="p-2 text-gray-700 hover:text-primary focus:outline-none">
                  {open ? <X size={24} /> : <Menu size={24} />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="sm:hidden bg-white shadow-md">
            <div className="space-y-2 px-4 pb-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Disclosure.Button
                    key={item.name}
                    as="button"
                    onClick={() => handleNavClick(item.href)}
                    className={classNames(
                      isActive
                        ? 'text-primary font-bold underline underline-offset-1'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary',
                      'block w-full text-left px-4 rounded-md text-lg font-medium transition duration-300'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
