import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import P1 from '../assets/P1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

const projects = [
  {
    title: "BukHive",
    description: "A full-stack Web3 application that revolutionizes how students interact with their university environment. With Bukhive, students can access departmental PDFs, book hostels seamlessly, and earn tokens that unlock a world of exclusive benefits and purchases.",
    tags: ["React", "Firebase", "Appwrite", "Node.js"],
    github: "https://github.com/Tareeqcodes/Edusphere",
    live: "https://edusphere-git-main-tareeq-s-projects.vercel.app/",
    image: P1
  },
  {
    title: "Huddle-landing-page",
    description: "A well design single page.",
    tags: ["Html5", "Css", "JavaScript"],
    github: "https://github.com/Tareeqcodes/huddle-landing-page-with-single-introductory-section-master",
    live: "https://tareeqcodes.github.io/huddle-landing-page-with-single-introductory-section-master/",
    image: p2
  },
  {
    title: "Portfolio Template",
    description: "A intro-component with signup-form which includes trail logic .",
    tags: ["Html5", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Tareeqcodes/intro-component-with-signup-form-master",
    live: "https://tareeqcodes.github.io/intro-component-with-signup-form-master/",
    image: p3
  },
];
const Project = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-5" id='projects'
    >
      <motion.h2 
        className="text-3xl md:text-4xl text-justify md:text-center font-bold mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-blue-400">Projects</span>
      </motion.h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2 py-2 bg-gray-700 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <Link 
                  to={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-200 hover:text-blue-400"
                >
                  <FiGithub className="mr-1" /> Code
                </Link>
                <Link 
                  to={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-200 hover:text-blue-400"
                >
                  <FiExternalLink className="mr-1" /> Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link 
        to={"/work"}
        className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          View All Projects
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Project;