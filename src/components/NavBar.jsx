import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const resumeLink =
    "https://drive.google.com/file/d/1-SfVxu-v-_uRh2UmJXNFwNSbhutlMyLB/view?usp=drivesdk";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 left-0 z-20 flex flex-col items-center">
      <div className="w-[90vw] md:w-[60vw] h-[10vh] flex items-center justify-between mt-5 px-5 rounded-lg bg-transparent">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-between text-[#F3D545] gap-10 text-3xl md:gap-5 md:text-2xl sm:gap-3 sm:text-sm">
          {["skills", "projects", "works", "contact"].map((section) => (
            <li
              key={section}
              className="hover:bg-[#F3D545] hover:text-[#aa0505] p-3 rounded-lg drop-shadow-[2px_2px_0px_#000] transition-all"
            >
              <Link to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}.
              </Link>
            </li>
          ))}
          {/* Resume Button */}
          <li className="hover:bg-[#F3D545] hover:text-[#aa0505] p-3 rounded-lg drop-shadow-[2px_2px_0px_#000] transition-all">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              Resume.
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F3D545] text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden flex flex-col items-center bg-[#F3D545] text-[#aa0505] absolute w-full left-0 mt-2 py-5 rounded-lg shadow-lg"
        >
          {["skills", "projects", "works", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="navSM block py-3 w-full text-center text-lg hover:bg-[#521414] hover:text-[#F3D545] transition-all"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}.
            </Link>
          ))}
          {/* Resume Button in Mobile Menu */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="navSM block py-3 w-full text-center text-lg hover:bg-[#521414] hover:text-[#F3D545] transition-all"
          >
            Resume.
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
