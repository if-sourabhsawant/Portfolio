import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-8 px-4 md:px-12 lg:px-24 border-t border-darkText/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-secondary mb-2 gradient-text">Sourabh Sawant</h2>
            <p className="text-darkText">Software Developer</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a 
              href="https://github.com/if-sourabhsawant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText hover:text-secondary transition-colors duration-300"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/sourabh-sawant19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText hover:text-secondary transition-colors duration-300"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:sourabhsawant4191@gmail.com" 
              className="text-lightText hover:text-secondary transition-colors duration-300"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-darkText/20 mt-6 pt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-darkText text-sm">
            &copy; {currentYear} Sourabh Sawant. All rights reserved.
          </p>
          <p className="text-darkText text-xs mt-2 flex items-center justify-center">
            Designed & Built with <FaHeart className="text-red-500 mx-1 animate-pulse" size={12} /> using React & Vite
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 