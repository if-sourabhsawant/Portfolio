import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-12 lg:px-24 bg-primary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary"></span>
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-72 h-72 rounded-full overflow-hidden mb-6 shadow-xl border-4 border-secondary/20">
              <img 
                src="/images/profile%20photo.jpg" 
                alt="Sourabh Sawant" 
                className="w-full h-full object-cover"
                style={{ 
                  objectPosition: "center 10%",
                  transform: "scale(1.1)" 
                }}
              />
            </div>
            <h3 className="text-xl font-bold text-secondary mt-4">Sourabh Sawant</h3>
            <p className="text-lightText/80 text-center mt-2">Software Developer</p>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-darkText mb-6 text-lg">
              I'm a <span className="highlight">software developer</span> with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With a background in computer science and a 
              keen eye for design, I strive to build applications that are not only technically sound 
              but also intuitive and accessible.
            </p>
            
            <p className="text-darkText mb-6 text-lg">
              My journey in web development started with HTML, CSS, and JavaScript, and has evolved to 
              include modern frameworks like React and tools like Vite and Tailwind CSS. I'm constantly 
              learning and exploring new technologies to enhance my skill set.
            </p>
            
            <p className="text-darkText text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or enjoying outdoor activities. I believe in continuous learning and am always 
              looking for new challenges to tackle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 