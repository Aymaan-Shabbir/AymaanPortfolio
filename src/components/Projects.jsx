"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiVercel,
  SiTailwindcss,
  SiReact,
  SiAppwrite,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const techLogos = {
  "Next.js": <SiNextdotjs className="text-white" />,
  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Vercel: <SiVercel className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-blue-400" />,
  React: <SiReact className="text-blue-400" />,
  Appwrite: <SiAppwrite className="text-pink-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-400" />,
};

const projects = [
  {
    title: "KolRoam",
    description: "A seamless social media and tour guide app.",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
    ],
    github: "https://github.com/Aymaan-Shabbir/KolRoam-2",
    website: "https://kolroam.vercel.app",
    image: "https://i.ibb.co/DfmYZ8Dh/klm.jpg",
  },

  {
    title: "KalkatiaLang",
    description:
      "A programming language built on typescript, filled with kolkata based slang and humour.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Aymaan-Shabbir/KalkatiaLang",
    website: "https://kalkatialang.netlify.app",
    image: "https://i.ibb.co/3y3S1JrF/k-Lang-2.jpg",
  },

  {
    title: "Playlist Predator",
    description: "Another tool which calculates youtube playlist durations.",
    techStack: ["React", "Algorithms", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Aymaan-Shabbir/Playlist-Predator",
    website: "https://ppredator.netlify.app/",
    image: "https://i.ibb.co/VpLKhpdL/ago.jpg",
  },
  {
    title: "BlogWiz",
    description: "Another seamless blog application.",
    techStack: ["React", "Appwrite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Aymaan-Shabbir/BlogWiz",
    website: "https://blogwiz-asi.netlify.app/",
    image: "https://i.ibb.co/ccBGVmjh/blz.jpg",
  },
];

const experimentalProjects = [
  {
    title: "FYLE",
    description: "A landing page for FYLE.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "https://i.ibb.co/kVdRVZdv/Screenshot-2025-03-23-040119.png",
    website: "https://fylelanding.netlify.app/",
    github: "https://github.com/Aymaan-Shabbir/FYLE_LANDING",
  },
  {
    title: "Chorus",
    description: "A landing page for a music school.",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
    image: "https://i.ibb.co/20Gj5rf2/Screenshot-2025-03-23-040313.png",
    website: "http://chorus-asi.netlify.app/",
    github: "https://github.com/Aymaan-Shabbir/Chorus",
  },
  {
    title: "Dharamtalla",
    description: "Esplanade in a nutshell.",
    techStack: ["React.js", "JavaScript", "Tailwind"],
    image: "https://i.ibb.co/bjQBKN52/Screenshot-2025-03-23-040336.png",
    website: "https://dharamtalla.netlify.app/",
    github: "https://github.com/Aymaan-Shabbir/Dharamtallaa",
  },
  {
    title: "TaskEngine",
    description: "Just another toDo app.",
    techStack: ["React.js", "JavaScript", "Tailwind"],
    image: "https://i.ibb.co/8nVJcwpY/Screenshot-2025-03-23-040350.png",
    website: "https://todoo-asi.netlify.app/",
    github: "https://github.com/Aymaan-Shabbir/toDoo",
  },
  {
    title: "CurseXchange",
    description: "Just another currency-converter app.",
    techStack: ["React.js", "JavaScript", "Tailwind"],
    image: "https://i.ibb.co/RTgJ9Jm8/Screenshot-2025-03-23-040419.png",
    website: "https://cursexchange.netlify.app/",
    github: "https://github.com/Aymaan-Shabbir/currency-converter",
  },
  {
    title: "HexaKey",
    description: "Just another password generator app.",
    techStack: ["React.js", "JavaScript", "Tailwind"],
    image: "https://i.ibb.co/gLq2bytN/Screenshot-2025-03-23-040502.png",
    github: "https://github.com/Aymaan-Shabbir/pwgen",
  },
];

function Projects() {
  const [showExperimental, setShowExperimental] = useState(false);

  return (
    <div
      id="projects"
      data-aos="fade-up"
      className="w-full min-h-screen pt-24 pb-16 flex flex-col items-center text-white bg-cover bg-center"
      style={{ backgroundImage: 'url("/theogbg.jpg")' }}
    >
      <motion.h2
        className="name text-2xl font-bold mb-5 text-red-800 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Production Level Applications.
      </motion.h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl px-3">
        {projects.map((project, index) => (
          <motion.div
            data-aos="zoom-in-right"
            key={index}
            className="bg-[#7E7B40] p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
            whileHover={{
              scale: 1.01,
              rotate: 1.3,
              boxShadow: "0px 0px 20px rgba(255, 214, 90, 0.8)",
              borderColor: "#FFD65A",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="h-40 w-full bg-[#7E7B40] rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="name text-xl font-semibold mt-3 text-yellow-500 ">
              {project.title}
            </h3>
            <p className="aProf text-white text-sm mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded text-xs"
                >
                  {techLogos[tech] || null} {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 items-center justify-center">
              <a
                href={project.github}
                className="flex items-center gap-2 px-2 py-1 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.website}
                className="flex items-center gap-2 px-2 py-1 bg-blue-600 rounded-lg hover:bg-blue-500 text-sm"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setShowExperimental(!showExperimental)}
        className="aProf mt-10 px-6 py-3 bg-[#F3D545] text-[#521414] rounded-lg text-md font-semibold hover:bg-[#611430] hover:text-[#F3D545] transition-all cursor-pointer"
      >
        {showExperimental
          ? "Stop boasting.."
          : "Tired? click to see some projects which I developed when I got bored.."}
      </button>

      {showExperimental && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl px-3">
          {experimentalProjects.map((project, index) => (
            <motion.div
              key={index}
              data-aos="zoom-in-left"
              className="bg-[#7E7B40] p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
              whileHover={{
                scale: 1.01,
                rotate: 1.3,
                boxShadow: "0px 0px 20px rgba(255, 214, 90, 0.8)",
                borderColor: "#FFD65A",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="h-36 w-full bg-[#7E7B40] rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="name text-xl font-semibold mt-3 text-[#F3D545]">
                {project.title}
              </h3>
              <p className="text-white text-sm mb-2 aProf">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded text-xs"
                  >
                    {techLogos[tech] || null} {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 items-center justify-center">
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-2 py-1 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    className="flex items-center gap-2 px-2 py-1 bg-blue-600 rounded-lg hover:bg-blue-500 text-sm"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
