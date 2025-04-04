import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeLink =
    "https://drive.google.com/file/d/1-SfVxu-v-_uRh2UmJXNFwNSbhutlMyLB/view?usp=drivesdk";

  const menuItems = ["Skills", "Projects", "Works", "Contact"];

  return (
    <nav className="fixed top-5 right-5 z-50">
      {/* Circular Menu Button */}
      <motion.button
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
        className={`cursor-pointer w-16 h-16 flex items-center justify-center rounded-full border-4 border-[#9D9773] bg-black bg-opacity-60 backdrop-blur-md shadow-lg shadow-[#9D9773]`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes className="text-[#9D9773] text-3xl" />
        ) : (
          <FaBars className="text-[#9D9773] text-3xl" />
        )}
      </motion.button>

      {/* Expanding Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-10 right-10 w-56 h-56 bg-[#9D9773] bg-opacity-90 backdrop-blur-2xl rounded-full flex flex-col items-center justify-center shadow-xl shadow-[#9D9773]"
          >
            {menuItems.map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer aProf text-white text-md font-semibold uppercase tracking-wider hover:text-black transition-all transform hover:scale-110 my-1"
                  onClick={() => setIsOpen(false)}
                >
                  {section}
                </Link>
              </motion.div>
            ))}

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * menuItems.length }}
            >
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer aProf text-white text-md font-semibold uppercase tracking-wider hover:text-black transition-all transform hover:scale-110 my-1"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
