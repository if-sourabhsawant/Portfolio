import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // We're just using this to show the loading state
    // Formspree will handle the actual form submission
    setIsSubmitting(true);
  };

  const inputVariants = {
    focus: { 
      borderColor: "#64ffda",
      boxShadow: "0 0 0 2px rgba(100, 255, 218, 0.2)" 
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-12 lg:px-24 bg-primary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">Contact Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-lightText mb-6 border-l-4 border-secondary pl-3">Get In Touch</h3>
            <p className="text-darkText mb-8 text-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <FaPhone className="text-secondary" />
                </div>
                <a href="tel:+917972720487" className="text-darkText hover:text-secondary transition-colors duration-300">
                  +91 7972720487
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <FaEnvelope className="text-secondary" />
                </div>
                <a href="mailto:sourabhsawant4191@gmail.com" className="text-darkText hover:text-secondary transition-colors duration-300">
                  sourabhsawant4191@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <FaGithub className="text-secondary" />
                </div>
                <a 
                  href="https://github.com/if-sourabhsawant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-darkText hover:text-secondary transition-colors duration-300"
                >
                  github.com/if-sourabhsawant
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <FaLinkedin className="text-secondary" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/sourabh-sawant19" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-darkText hover:text-secondary transition-colors duration-300"
                >
                  linkedin.com/in/sourabh-sawant19
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="backdrop-blur-sm"
          >
            <form 
              ref={formRef} 
              action="https://formspree.io/f/myzeglyy" 
              method="POST"
              onSubmit={handleSubmit} 
              className="space-y-6 p-6 bg-tertiary/50 rounded-lg shadow-lg"
            >
              <div>
                <label htmlFor="name" className="block text-lightText mb-2 font-medium">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/50 border border-darkText/30 rounded-md px-4 py-3 text-lightText focus:outline-none transition-colors duration-300"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lightText mb-2 font-medium">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/50 border border-darkText/30 rounded-md px-4 py-3 text-lightText focus:outline-none transition-colors duration-300"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lightText mb-2 font-medium">Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-primary/50 border border-darkText/30 rounded-md px-4 py-3 text-lightText focus:outline-none transition-colors duration-300"
                  whileFocus="focus"
                  variants={inputVariants}
                ></motion.textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="inline-block h-5 w-5 border-t-2 border-b-2 border-secondary rounded-full animate-spin mr-2"></span>
                ) : (
                  <FaPaperPlane className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 