// ProjectsSection.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Firebase",
    tags: ["React", "Firebase", "Node.js"],
    github: "#",
    live: "#",
    image: "/project1.jpg"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    tags: ["React", "GraphQL", "AWS AppSync"],
    github: "#",
    live: "#",
    image: "/project2.jpg"
  },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
    image: "/project3.jpg"
  },
];

const Project = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-5"
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
                <a 
                  href={project.github}
                  className="flex items-center text-sm text-gray-400 hover:text-blue-400"
                >
                  <FiGithub className="mr-1" /> Code
                </a>
                <a 
                  href={project.live}
                  className="flex items-center text-sm text-gray-400 hover:text-blue-400"
                >
                  <FiExternalLink className="mr-1" /> Live Demo
                </a>
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
        <button className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          View All Projects
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Project;