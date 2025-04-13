import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDatabase } from 'react-icons/fa';
import { SiFirebase, SiGraphql, SiJavascript, SiTypescript, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-400" />, level: 95 },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, level: 90 },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 70 },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-100" />, level: 80 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 85 },
  { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" />, level: 75 },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: 90 },
  { name: 'AWS', icon: <FaAws className="text-orange-500" />, level: 70 },
  { name: 'SQL/NoSQL', icon: <FaDatabase className="text-blue-300" />, level: 80 },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-5" id='skills'
    >
      <motion.h2 
        className="text-3xl md:text-4xl text-justify md:text-center font-bold mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-blue-400">Skills</span>
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 flex flex-col items-center"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>
              <span className="text-xs text-gray-400 mt-1">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <p className="text-gray-300">
              I create responsive, accessible, and performant user interfaces using modern 
              React ecosystem tools like Next.js, TypeScript, and state management libraries.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-4">BaaS Development</h3>
            <p className="text-gray-300">
              I implement scalable backend solutions using BaaS platforms like Firebase, 
              Supabase, and AWS Amplify, focusing on security, performance, and cost optimization.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;