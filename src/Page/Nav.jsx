import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // تغيير Link إلى NavLink
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from '../assets/NewKeetaLogo.jpeg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? "py-3 bg-white/70 backdrop-blur-xl border-b border-black/10 shadow-lg"
        : "py-5 bg-transparent"
    }`}>
      
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-medium relative group transition-colors duration-300 ${
                    isActive ? "text-[#D4AC0D]" : "text-[#121212] hover:text-[#D4AC0D]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {/* underline animation: يظهر عرض كامل لو اللينك نشط */}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#D4AC0D] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}

          {/* Button */}
          <button className="bg-[#121212] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#D4AC0D] hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div
          className="md:hidden text-[#121212] text-3xl cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-10 z-[49]"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-4xl font-bold transition-all duration-300 ${
                      isActive ? "text-[#D4AC0D] scale-110" : "text-[#121212]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}

            <button className="mt-6 bg-[#121212] text-white px-8 py-3 rounded-full font-bold hover:bg-[#D4AC0D] hover:text-black transition-all">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;