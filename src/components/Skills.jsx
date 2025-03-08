import { motion } from 'framer-motion';
import { FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiDotnet, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <FaJava size={40} className="text-secondary mb-2" /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={40} className="text-secondary mb-2" /> },
    { name: 'React.js', icon: <FaReact size={40} className="text-secondary mb-2" /> },
    { name: '.NET', icon: <SiDotnet size={40} className="text-secondary mb-2" /> },
    { name: 'MySQL', icon: <SiMysql size={40} className="text-secondary mb-2" /> },
    { name: 'Database Design', icon: <FaDatabase size={40} className="text-secondary mb-2" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-12 lg:px-24 bg-primary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">Skills</span>
        </motion.h2>
        
        <motion.p 
          className="text-darkText mb-12 max-w-2xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I've worked with a variety of technologies in the web development world.
          Here are some of the <span className="highlight">key technologies</span> I've been working with recently:
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item flex flex-col items-center justify-center text-center p-6 card-hover backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 25px -5px rgba(100, 255, 218, 0.2)",
                borderColor: "#64ffda" 
              }}
            >
              <div className="animate-float">
                {skill.icon}
              </div>
              <h3 className="text-lightText font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-lightText mb-4 border-l-4 border-secondary pl-3">Other Skills & Tools</h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 text-darkText">
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> Git & GitHub
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> RESTful APIs
            </li>
            
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> Agile/Scrum
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> HTML/CSS
            </li>
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> JavaScript
            </li>
          
            <li className="flex items-center">
              <span className="text-secondary mr-2">▹</span> Docker
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 