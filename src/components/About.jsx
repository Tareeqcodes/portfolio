import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../assets/img1.jpg';
import Resume from '../assets/Resume.pdf';
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 text-center"
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About <span className="text-blue-400">Me</span>
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/3"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-blue-500 rounded-lg rotate-6"></div>
            <img 
              src={img1}
              alt="Tariq"
              className="relative z-10 w-full h-full object-cover rounded-lg border-4 border-gray-700"
            />
          </div>
        </motion.div>
        
        <motion.div
          className="md:w-2/3 text-justify px-5 space-y-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold">Who I Am</h3>
          <p className="text-gray-500 leading-relaxed tracking-normal">
            I'm a passionate Frontend and Backend-as-a-Service developer with over X years of 
            experience creating modern web applications. I specialize in React, Node.js, 
            and various BaaS platforms like Firebase, AWS Amplify, and Supabase.
          </p>
          
          <p className="text-gray-500 leading-relaxed">
            My journey in web development started when... [add your personal story here].
            Since then, I've worked with various startups and companies to build scalable,
            user-friendly applications that solve real-world problems.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="font-medium text-blue-400">Name:</h4>
              <p>Tariq Auwal</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-400">Email:</h4>
              <p className='text-sm'>tareeqcodes@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-400">From:</h4>
              <p>KN</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-400">Experience:</h4>
              <p>3+ Years</p>
            </div>
          </div>
          
          <Link 
            to={Resume}
            target="_blank"
            download="Resume.pdf"
            className="inline-block mt-2 px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Download CV
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;