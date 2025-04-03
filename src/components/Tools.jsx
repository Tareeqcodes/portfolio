import { motion } from 'framer-motion';
import { 
  FaGitAlt, 
  FaGithub, 
  FaDocker,
  FaFigma,
  FaNpm,
  FaYarn,
  FaTrello
} from 'react-icons/fa';
import {
  SiWebpack,
  SiPostman,
  SiFramer
} from 'react-icons/si';

const Tools = () => {
  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-orange-600" />, proficiency: "Advanced" },
    { name: "GitHub", icon: <FaGithub className="text-gray-100" />, proficiency: "Advanced" },
    { name: "GitHub Desktop", icon: <FaGithub className="text-purple-500" />, proficiency: "Advanced" },
    { name: "Webpack", icon: <SiWebpack className="text-blue-300" />, proficiency: "Intermediate" },
    { name: "Framer Motion", icon: <SiFramer className="text-blue-500" />, proficiency: "Intermediate" },
    { name: "Docker", icon: <FaDocker className="text-blue-500" />, proficiency: "Advanced" },
    { name: "Postman", icon: <SiPostman className="text-orange-500" />, proficiency: "Intermediate" },
    { name: "Figma", icon: <FaFigma className="text-purple-500" />, proficiency: "Intermediate" },
    { name: "npm", icon: <FaNpm className="text-red-500" />, proficiency: "Advanced" },
    { name: "Yarn", icon: <FaYarn className="text-blue-400" />, proficiency: "Advanced" },
    { name: "Trello", icon: <FaTrello className="text-blue-400" />, proficiency: "Intermediate" },
    
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-900/50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-blue-400">Tools</span> & Technologies
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            The development tools and platforms I use daily to build amazing applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)"
              }}
              className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h3 className="font-medium text-center">{tool.name}</h3>
              {tool.proficiency && (
                <span className="text-xs text-blue-400 mt-1">{tool.proficiency}</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-200 text-sm"
        >
          <p className='text-xl font-semibold'>Always learning and adding new tools to my workflow</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Tools;