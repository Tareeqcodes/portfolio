import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: scrolled ? 1 : 0,
        y: scrolled ? 0 : -20
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 p-4 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'pointer-events-none'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-bold text-2xl text-blue-400">Devtareeq</span>
        <div className=" hidden md:block space-x-6">
          <a href="#about" className="text-gray-300 text-xl font-semibold hover:text-white">About</a>
          <a href="#skills" className="text-gray-300 text-xl font-semibold hover:text-white">Skills</a>
          <a href="#projects" className="text-gray-300 text-xl font-semibold hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 text-xl font-semibold hover:text-white">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;