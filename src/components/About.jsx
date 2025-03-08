import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="pt-12 pb-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-secondary rounded-md transform translate-x-5 translate-y-5 z-0"></div>
              
              {/* Image container */}
              <div className="absolute inset-0 bg-tertiary rounded-md overflow-hidden shadow-md z-10">
                <img 
                  src="/images/profile photo.jpg" 
                  alt="Sourabh Sawant" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-darkText mb-4">
              Hello! I'm Sourabh, a passionate software developer with a strong foundation in building web applications and software solutions. My journey in technology began with a curiosity about how digital products work and evolved into a career focused on creating efficient, user-friendly applications.
            </p>
            <p className="text-darkText mb-4">
              I specialize in both frontend and backend development, with expertise in technologies like Java, Spring Boot, React.js, .NET, and MySQL. I enjoy solving complex problems and turning ideas into reality through clean, maintainable code.
            </p>
            <p className="text-darkText mb-4">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enhancing my skills through continuous learning. I believe in creating software that not only meets technical requirements but also provides an exceptional user experience.
            </p>
            <p className="text-darkText">
              I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or just have a chat about technology!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 