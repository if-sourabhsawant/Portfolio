import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className={`fixed w-full h-20 flex justify-between items-center px-4 md:px-12 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold text-secondary">SS.</h1>
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <motion.ul 
        className="hidden md:flex space-x-8"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={itemVariants}>
          <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
        </motion.li>
      </motion.ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={25} className="text-lightText" /> : <FaTimes size={25} className="text-lightText" />}
      </div>

      {/* Mobile Menu */}
      <div className={`${nav ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} transition-all duration-300 ease-in-out absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center md:hidden`}>
        <ul className="text-center space-y-8">
          <li className="text-2xl">
            <Link onClick={closeMenu} to="home" smooth={true} duration={500} className="nav-link">Home</Link>
          </li>
          <li className="text-2xl">
            <Link onClick={closeMenu} to="about" smooth={true} duration={500} className="nav-link">About</Link>
          </li>
          <li className="text-2xl">
            <Link onClick={closeMenu} to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
          </li>
          <li className="text-2xl">
            <Link onClick={closeMenu} to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
          </li>
          <li className="text-2xl">
            <Link onClick={closeMenu} to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar; 