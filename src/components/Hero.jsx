import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaChevronDown, FaDownload, FaEye, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-24 relative pb-16">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Animated Code Terminal */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-2/5 hidden lg:block">
        <motion.div 
          className="relative bg-[#1E1E3F] rounded-lg shadow-2xl overflow-hidden border border-secondary/30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ aspectRatio: '16/9' }}
        >
          {/* Terminal Header */}
          <div className="bg-[#191932] px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-white/70 text-xs mx-auto">sourabh@portfolio ~ </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-4 font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="text-green-400">$ </span>
              <TypeAnimation
                sequence={[
                  'npm create vite@latest portfolio -- --template react',
                  1000,
                  '',
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                speed={50}
                className="text-white"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="text-white/80 mt-2"
            >
              <div className="text-yellow-300">Creating a new React project...</div>
              <div className="mt-1">✓ Project created!</div>
              <div className="mt-1">✓ Installing dependencies...</div>
              <div className="mt-1">✓ Done!</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.5 }}
              className="mt-3"
            >
              <span className="text-green-400">$ </span>
              <TypeAnimation
                sequence={[
                  'cd portfolio',
                  500,
                  'cd portfolio\nnpm run dev',
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                speed={50}
                className="text-white whitespace-pre"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6, duration: 0.5 }}
              className="text-white/80 mt-2"
            >
              <div className="text-green-400">VITE v4.4.9 ready in 237 ms</div>
              <div className="text-white">
                <span className="text-green-400">➜</span> Local: <span className="text-cyan-400 underline">http://localhost:5173/</span>
              </div>
              <div className="text-white">
                <span className="text-green-400">➜</span> Network: <span className="text-cyan-400 underline">http://192.168.1.5:5173/</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 7.5, duration: 0.5 }}
              className="mt-3"
            >
              <span className="text-green-400">$ </span>
              <TypeAnimation
                sequence={[
                  'echo "Hello, I\'m Sourabh Sawant"',
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={0}
                speed={50}
                className="text-white"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 9, duration: 0.5 }}
              className="text-secondary mt-2 font-bold"
            >
              Hello, I'm Sourabh Sawant
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 10, duration: 0.5 }}
              className="mt-3"
            >
              <span className="text-green-400">$ </span>
              <TypeAnimation
                sequence={[
                  '_',
                ]}
                wrapper="span"
                cursor={true}
                repeat={1}
                speed={50}
                className="text-white"
              />
            </motion.div>
          </div>
          
          {/* Reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/10 pointer-events-none"></div>
          
          {/* Scan line effect */}
          <motion.div 
            className="absolute inset-0 bg-white/[0.02] h-[2px] w-full pointer-events-none"
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </motion.div>
      </div>
      
      <div className="max-w-5xl relative z-10">
        <motion.p 
          className="text-secondary mb-2 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-lightText mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="gradient-text">Sourabh Sawant.</span>
        </motion.h1>
        
        <motion.div
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-darkText mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              'I build web applications.',
              1000,
              'I develop software solutions.',
              1000,
              'I create digital experiences.',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        
        <motion.p 
          className="text-darkText max-w-xl mb-8 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm a <span className="highlight">software developer</span> specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="projects" smooth={true} duration={800}>
            <button className="btn-primary animate-pulse-custom">
              <span className="flex items-center gap-2">
                <FaEye /> View My Work
              </span>
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            <button className="btn-primary animate-pulse-custom">
              <span className="flex items-center gap-2">
                <FaEnvelope /> Contact Me
              </span>
            </button>
          </Link>
          <a 
            href="/documents/Sourabh%20Sawant%20Resume.pdf" 
            download="Sourabh_Sawant_Resume"
            className="btn-primary animate-pulse-custom"
          >
            <span className="flex items-center gap-2">
              <FaDownload /> Download Resume
            </span>
          </a>
        </motion.div>
        
        <motion.div 
          className="flex mt-8 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="https://github.com/if-sourabhsawant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightText hover:text-secondary transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub size={30} />
          </a>
          <a 
            href="https://www.linkedin.com/in/sourabh-sawant19" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lightText hover:text-secondary transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={30} />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Link to="about" smooth={true} duration={800} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-secondary hover:text-secondary/80 transition-colors"
          >
            <FaChevronDown size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero; 