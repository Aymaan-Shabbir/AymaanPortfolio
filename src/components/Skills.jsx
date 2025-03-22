import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiExpress,
  SiShadcnui,
  SiBootstrap,
  SiNodedotjs,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    description: "Tools I use to craft beautiful and responsive applications.",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Shadcn/ui", icon: <SiShadcnui /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Backend",
    description: "Building fast and scalable backend solutions.",
    skills: [
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Languages",
    description: "Languages I use to write efficient and scalable code.",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Others",
    description: "Additional tools and platforms I work with.",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "CI/CD", icon: "⚙️" },
      { name: "Git", icon: <FaGit /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vercel", icon: <IoLogoVercel /> },
    ],
  },
];

const quotes = [
  "The lesson is that you can still make mistakes and be forgiven.",
  "Worrying is like praying for something that you don’t want to happen.",
  "Listen, smile, agree, and then do whatever you were gonna do anyway.",
];

function Skills() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [colorTheme, setColorTheme] = useState("#521414");
  const skillsRef = useRef(null);

  useEffect(() => {
    const element = skillsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setColorTheme("#521414"), 500);
        } else {
          setColorTheme("#290A0A");
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleNextQuote = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <div
      ref={skillsRef}
      id="skills"
      className="w-full min-h-screen py-15 flex flex-col items-center transition-all duration-[1000ms]"
      style={{
        backgroundColor: colorTheme,
        color: colorTheme === "#F3D545" ? "#290A0A" : "#F3D545",
      }}
    >
      {/* Skills Grid */}
      <div className="skillCard grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl m-3">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="bg-[#1e1e1e] p-6 rounded-lg shadow-md border-2 border-transparent"
            whileHover={{
              scale: 1.05,
              rotate: 1.5,
              boxShadow: "0px 0px 20px rgba(255, 214, 90, 0.8)",
              borderColor: "#FFD65A",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
            <p className="text-gray-400 mb-4">{category.description}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="quote mt-6 flex flex-col items-center flex-wrap overflow-hidden">
        <motion.p
          key={quoteIndex}
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-base sm:text-sm xs:text-xs italic text-center px-4 max-w-xs sm:max-w-sm leading-relaxed"
        >
          {`“${quotes[quoteIndex]}”`}
        </motion.p>

        <button
          onClick={handleNextQuote}
          className="quoteBTN mt-4 px-4 py-2 bg-[#FFD65A] text-[#aa0505] rounded-lg font-semibold hover:bg-[#aa0505] hover:text-[#F3D545] transition"
        >
          Jarvis?
        </button>
      </div>
    </div>
  );
}

export default Skills;
