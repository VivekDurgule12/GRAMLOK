import React from 'react';
import logo from '../../assets/logo.png';
import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow-md py-4 fixed w-full z-50">
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
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary',
                      'text-lg font-medium transition duration-300'
                    )}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
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
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-primary',
                    'block px-4 py-2 rounded-md text-lg font-medium transition duration-300'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
