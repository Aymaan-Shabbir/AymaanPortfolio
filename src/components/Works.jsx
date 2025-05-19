"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const worksData = [
  {
    title: "Programmer Analyst Intern",
    company: "Cognizant.",
    duration: "May 2025 - Present",
    image: "https://i.ibb.co/H0qgv96/cogni.jpg",
    location: "Hybrid",
    technologies: ["Software Development"],
  },
  {
    title: "Deep Learning Intern.",
    company: "Ardent Computech",
    duration: "Jan 2024 - Mar 2024",
    image: "https://i.ibb.co/20skKJGQ/Ardent.jpg",
    description: "Worked on designing and developing CNN algorithms.",
    location: "Kolkata",
    technologies: ["Python", "TensorFlow", "Keras"],
  },
  {
    title: "Mentor - Technical Head.",
    company: "Xplorica",
    duration: "Aug 2024 - Present",
    image: "https://i.ibb.co/5hD0D9Xw/xplorica.png",
    description:
      "Guided students in technical projects and mentored them in various domains.",
    location: "FIEM, Kolkata",
    technologies: ["Mentorship", "Project Guidance"],
  },
  {
    title: "Core Committee - Technical Head.",
    company: "Xplorica",
    duration: "Aug 2023 - July 2024",
    image: "https://i.ibb.co/5hD0D9Xw/xplorica.png",
    description:
      "Managed technical teams, gave Web Development workshops and developed the annual fest website.",
    location: "FIEM, Kolkata",
    technologies: ["Dev Bootcamps", "Team Coordination", "Technical Planning"],
  },
  {
    title: "Coordinator.",
    company: "Xplorica",
    duration: "March 2023 - July 2023",
    image: "https://i.ibb.co/5hD0D9Xw/xplorica.png",
    description:
      "Managed technical events and coordinated the annual tech fest.",
    location: "FIEM, Kolkata",
    technologies: ["Event Management", "Leadership"],
  },
];

function Works() {
  const ref = useRef(null);

  return (
    <motion.div
      id="works"
      ref={ref}
      className="w-full min-h-screen flex flex-col items-center py-20 px-5 md:px-10"
      style={{
        backgroundImage: 'url("/theogbg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl w-full relative">
        <h1 className="projName text-3xl text-center mb-10 mt-4 text-red-800">
          -Work Timeline-
        </h1>

        <div className="absolute top-0 left-5 md:left-10 w-1 h-full bg-gray-600"></div>

        {worksData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="relative flex flex-col md:flex-row items-start mb-12"
          >
            <motion.div className="absolute left-[3px] md:left-[32px] top-1/2 -translate-y-1/2 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white shadow-md" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-3/4 ml-auto relative p-6 rounded-lg shadow-lg border border-gray-700 bg-[#B3AD87] bg-opacity-50 text-white transition-all duration-300"
            >
              <div className="relative z-10">
                <img
                  src={work.image}
                  alt={`${work.company} logo`}
                  className="h-30 w-60 object-contain m-2 p-1"
                />
                <h3 className="projName text-xl font-bold text-red-800">
                  {work.title}
                </h3>
                <h4 className="aProf text-lg font-bold text-red-800">
                  {work.company}
                </h4>
                <p className="aProf text-sm font-semibold">
                  {work.duration} - {work.location}
                </p>
                {work.description && (
                  <p className="aProf mt-2 font-semibold">{work.description}</p>
                )}
                {work.technologies && (
                  <div className="mt-3 flex flex-wrap gap-2 boast font-semibold">
                    {work.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="aProf bg-gray-800 text-white px-3 py-1 rounded-full text-sm transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Works;
