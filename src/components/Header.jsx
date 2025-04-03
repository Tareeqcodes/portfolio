// Header.jsx
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          DevPortfolio
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05, color: '#60a5fa' }}
              whileTap={{ scale: 0.95 }}
              className={`px-2 py-1 text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800/95 p-4"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-left font-medium rounded-md ${
                  activeSection === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;