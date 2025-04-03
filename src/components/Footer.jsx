// Footer.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Devtareeq
            </h2>
            <p className="text-gray-400 mt-2">Frontend & BaaS Developer</p>
          </div>
          
          <div className="flex space-x-6">
            {[
              { icon: <FiGithub />, url: '#' },
              { icon: <FiLinkedin />, url: '#' },
              { icon: <FiTwitter />, url: '#' },
              { icon: <FiMail />, url: '#' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ y: -5, color: '#60a5fa' }}
                className="text-xl text-gray-400"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Tariq. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;