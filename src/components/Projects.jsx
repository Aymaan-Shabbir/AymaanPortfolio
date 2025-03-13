import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
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
    title: "Kolroam",
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
    image: "/kolroam.png",
  },
  {
    title: "KalkatiaLang",
    description:
      "A programming language built on typescript, filled with kolkata based slang and humour.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Aymaan-Shabbir/KalkatiaLang",
    website: "https://kalkatialang.netlify.app",
    image: "/blogwiz.png",
  },
  {
    title: "BlogWiz",
    description: "Another seamless blog application.",
    techStack: ["React", "Appwrite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Aymaan-Shabbir/BlogWiz",
    website: "https://blogwiz-asi.netlify.app/",
    image: "/blogwiz.png",
  },
  {
    title: "Playlist Predator",
    description: "Another tool which calculates youtube playlist durations",
    techStack: ["React", "Algorithms", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Aymaan-Shabbir/Playlist-Predator",
    website: "https://ppredator.netlify.app/",
    image: "/blogwiz.png",
  },
];

const experimentalProjects = [
  {
    title: "FYLE",
    description: "A landing page for FYLE.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/aichatbot.png",
    website: "https://fylelanding.netlify.app/",
    github: "https://github.com/Aymaan-Shabbir/FYLE_LANDING",
  },
  {
    title: "Chorus",
    description: "A landing page for a music school.",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
    image: "/cryptotracker.png",
    website: "http://chorus-asi.netlify.app/",
    github: "https://github.com/Aymaan-Shabbir/Chorus",
  },
  {
    title: "Dharamtalla",
    description: "Esplanade in a nutshell",
    techStack: ["React.js", "JavaScript", "Tailwind"],
    image: "/cryptotracker.png",
    website: "https://dharamtalla.netlify.app/",
    github: "https://github.com/Aymaan-Shabbir/Dharamtallaa",
  },
  {
    title: "TaskEngine",
    description: "Just another toDo app.",
    techStack: ["React.js", "JavaScript", "Tailwind"],
    image: "/cryptotracker.png",
    website: "https://todoo-asi.netlify.app/",
    github: "https://github.com/Aymaan-Shabbir/toDoo",
  },
  {
    title: "CurseXchange",
    description: "Just another currency-converter app.",
    techStack: ["React.js", "JavaScript", "Tailwind"],
    image: "/cryptotracker.png",
    website: "https://cursexchange.netlify.app/",
    github: "https://github.com/Aymaan-Shabbir/currency-converter",
  },
  {
    title: "HexaKey",
    description: "Just another password generator app.",
    techStack: ["React.js", "JavaScript", "Tailwind"],
    image: "/cryptotracker.png",
    github: "https://github.com/Aymaan-Shabbir/pwgen",
  },
];

function Projects() {
  const [showExperimental, setShowExperimental] = useState(false);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <div
      id="projects"
      ref={ref}
      className="w-full min-h-screen pt-25 pb-15 flex flex-col items-center transition-colors duration-1000 text-white"
      style={{ backgroundColor: isInView ? "#aa0505" : "#F3D545" }}
    >
      <motion.h2
        className="text-2xl font-bold mb-5 animHead text-[#F3D545] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Production Level Applications.
      </motion.h2>

      <div className="projCard grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl p-3 m-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1e1e1e] py-3 px-3 rounded-lg shadow-md transition-transform hover:scale-105"
            whileHover={{
              scale: 1.01,
              rotate: 1.3,
              boxShadow: "0px 0px 20px rgba(255, 214, 90, 0.8)",
              borderColor: "#FFD65A",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className=" h-24 md:h-32 w-full bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="projName text-3xl sm:text-xl font-semibold mt-2 text-[#F3D545]">
              {project.title}
            </h3>
            <p className="projP text-white text-sm mb-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
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
        className="boast mt-6 px-6 py-3 bg-[#F3D545] text-red-700 rounded-lg text-md font-semibold hover:bg-red-700 hover:text-[#F3D545] transition-all"
      >
        {showExperimental
          ? "Stop boasting.."
          : "Tired? click to see some projects which i developed when i got bored.."}
      </button>

      {showExperimental && (
        <div className="projCard mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {experimentalProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1e1e1e] py-3 px-3 rounded-lg shadow-md transition-transform hover:scale-105"
              whileHover={{
                scale: 1.01,
                rotate: 1.3,
                boxShadow: "0px 0px 20px rgba(255, 214, 90, 0.8)",
                borderColor: "#FFD65A",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="h-36 md:h-48 w-full bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="projName text-3xl sm:text-xl font-semibold mt-4 text-[#F3D545]">
                {project.title}
              </h3>
              <p className="projP text-[#F3D545]-400 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded text-sm"
                  >
                    {techLogos[tech] || null} {tech}
                  </span>
                ))}
              </div>
              <div className="flex  mt-4 gap-3 justify-center">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-2 py-1 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm"
                  >
                    <FaGithub /> Github
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-2 py-1 gap-2 bg-blue-600 text-white rounded-lg text-sm  hover:bg-blue-500 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          <h2 className="text-center m-auto italic text-[#F3D545] text-lg">
            "These are just some Front-End exercises."
          </h2>
        </div>
      )}
    </div>
  );
}

export default Projects;
