import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const projects = [
    {
      title: 'PetWell Services',
      description: 'A comprehensive web application for pet owners to access all pet-related services on a single platform. Features include appointment booking, pet health records, service provider listings, and community forums.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
      github: 'https://github.com/if-sourabhsawant/PetWellService-Application',
      demo: '#',
      image: '/images/Home.jpg'
    },
    {
      title: 'Ayurvedic Clinic Management System',
      description: 'A complete clinic management solution for Ayurvedic practitioners. Includes patient records, appointment scheduling, treatment plans, inventory management, and billing features.',
      technologies: ['Java', 'Spring Boot', 'React.js', 'Hibernate', 'MySQL'],
      github: 'https://github.com/if-sourabhsawant',
      demo: '#',
      image: '/images/Home2.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">Projects</span>
        </motion.h2>
        
        <motion.p 
          className="text-darkText mb-12 max-w-2xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of the projects I've worked on. Each project reflects my skills and experience in different technologies.
        </motion.p>
        
        <motion.div 
          className="space-y-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image */}
              <motion.div 
                className="w-full md:w-3/5 relative aspect-video bg-tertiary rounded-md overflow-hidden shadow-xl card-hover"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(100, 255, 218, 0.2)"
                }}
              >
                {project.image.includes('/images/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-secondary/20 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-lightText">
                      <span className="text-sm">Project Screenshot</span>
                    </div>
                  </>
                )}
              </motion.div>
              
              {/* Project Info */}
              <div className={`w-full md:w-2/5 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-secondary font-medium mb-2">Featured Project</h3>
                <h4 className="text-2xl font-bold text-lightText mb-4 hover:text-secondary transition-colors duration-300">{project.title}</h4>
                
                <motion.div 
                  className="bg-tertiary p-6 rounded-md shadow-md mb-4 backdrop-blur-sm card-hover"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-darkText">{project.description}</p>
                </motion.div>
                
                <ul className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <li 
                      key={techIndex} 
                      className="text-darkText text-sm bg-primary/80 px-3 py-1 rounded-full border border-secondary/20 hover:border-secondary transition-colors duration-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                
                <div className={`flex gap-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lightText hover:text-secondary transition-colors duration-300 transform hover:scale-110"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub size={22} />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lightText hover:text-secondary transition-colors duration-300 transform hover:scale-110"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="https://github.com/if-sourabhsawant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 