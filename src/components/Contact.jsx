// ContactSection.jsx
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-5"
    >
      <motion.h2 
        className="text-3xl md:text-4xl text-justify font-bold mb-12 md:text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Get In <span className="text-blue-400">Touch</span>
      </motion.h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="text-gray-600">
            Feel free to reach out to me for any questions or opportunities. I'll get back 
            to you as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-gray-700 rounded-lg">
                <FiMail className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-400">tareeqcodes@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-gray-700 rounded-lg">
                <FiPhone className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-400">+2349124498160</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-gray-700 rounded-lg">
                <FiMapPin className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-400">KN, Nigeria</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <h4 className="font-bold text-blue-400 mb-3">Follow Me</h4>
            <div className="flex space-x-4 ">
              {['Github', 'LinkedIn', 'Twitter'].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg- p-8 rounded-xl border border-gray-700/50"
        >
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full text-white bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full text-white bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full text-white bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message" 
                rows="5"
                className="w-full text-white bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;