"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const worksData = [
  {
    title: "GT Engineer.",
    company: "LTI Mindtree.",
    duration: "Mar 2025 - Present",
    image: "https://i.ibb.co/271Y9GVM/lti.jpg",
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
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

  return (
    <motion.div
      id="works"
      ref={ref}
      animate={{ backgroundColor: isInView ? "#521414" : "#290A0A" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full min-h-screen flex flex-col items-center py-20 px-5 md:px-10 transition-colors duration-500"
    >
      <div className="max-w-4xl w-full relative">
        <h1 className="projName text-3xl text-center mb-10 mt-4 text-yellow-400">
          -Work Timeline-
        </h1>

        <div className="absolute top-0 left-5 md:left-10 w-1 h-full bg-gray-600 block"></div>

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

            {/* Content Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-3/4 ml-auto relative p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-lg bg-white/10 text-white transition-all duration-300 hover:bg-white/20 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
              />

              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10">
                <img
                  src={work.image}
                  alt=""
                  className="h-30 w-60 object-contain m-2 p-1"
                />
                <h3 className="projName text-xl font-bold text-yellow-400 transition-colors duration-300 hover:text-white">
                  {work.title}
                </h3>
                <h4 className="boast text-lg font-bold text-yellow-500 transition-colors duration-300 hover:text-gray-100">
                  {work.company}
                </h4>
                <p className="boast text-sm text-gray-800 font-semibold">
                  {work.duration} - {work.location}
                </p>
                <p className=" boast mt-2 text-gray-800 font-semibold transition-colors duration-300 hover:text-gray-200">
                  {work.description}
                </p>
                {work.technologies && (
                  <div className="mt-3 flex flex-wrap gap-2 boast font-semibold">
                    {work.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-yellow-400 hover:text-black"
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
