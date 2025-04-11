
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import img3 from '../assets/img3.jpg'; 

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-10 px-5 md:px-16 justify-between min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-400">Tariq</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600">
          Frontend & BaaS Developer
        </h2>
        <p className="text-gray-500 max-w-lg">
        I specialize in building clean, responsive interfaces and scalable backends using React and BaaS tools like Firebase and Appwrite. Let's build something impactful.
        </p>
        
        <div className="flex space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <a 
              href="/contact"
              className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
            Contact Me
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
             <a
              href="/work"
               className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800 transition-colors"
             >
               View Work
             </a>
          </motion.div>
        </div>
        
        <div className="flex space-x-4 pt-4 pl-1">
          {[
            { icon: <FiGithub />, url: 'https://github.com/Tareeqcodes' },
            { icon: <FiLinkedin />, url: 'www.linkedin.com/in/tariqauwal' },
            { icon: <FiTwitter />, url: 'https://x.com/tariqauwal' },
            { icon: <FiMail />, url: 'mailto:tariqauwal020@gmail.com' }
          ].map((social, index) => (
            <motion.div
              key={index}
              href={social.url}
              whileHover={{ y: -5, color: '#60a5fa' }}>
            <a 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 hover:text-blue-400 transition-colors duration-300"
            >
            {social.icon}
            </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <div className="relative w-64 h-80 md:w-80 md:h-full">
          <div className="absolute inset-0 border-4 border-blue-400 rounded-full opacity-20 animate-spin-slow"></div>
          <div className="absolute inset-4 border-4 border-purple-500 rounded-full opacity-20 animate-spin-slow-reverse"></div>
          <img 
            src={img3}
            alt="Tariq"
            fill
            priority
            className="relative z-10 w-full h-full rounded-lg object-cover  border-4 border-orange-900"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;