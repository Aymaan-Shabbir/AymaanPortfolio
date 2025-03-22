"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const worksData = [
  {
    title: "Deep Learning Intern.",
    company: "Ardent Computech",
    duration: "Jan 2024 - Mar 2024",
    description:
      "Worked on designing and developing CNN algorithms for different fields.",
    location: "Kolkata",
    technologies: ["Python", "TensorFlow", "Keras"],
  },
  {
    title: "Mentor - Technical Head.",
    company: "Xplorica",
    duration: "Aug 2024 - Present",
    description:
      "Guided students in technical projects and mentored them in various domains.",
    location: "FIEM, Kolkata",
    technologies: ["Mentorship", "Project Guidance"],
  },
  {
    title: "Core Committee - Technical Head.",
    company: "Xplorica",
    duration: "Aug 2023 - July 2024",
    description:
      "Managed technical teams and developed the annual fest website.",
    location: "FIEM, Kolkata",
    technologies: ["Team Coordination", "Technical Planning"],
  },
  {
    title: "Coordinator.",
    company: "Xplorica",
    duration: "March 2023 - July 2023",
    description:
      "Managed technical events and workshops, ensuring smooth execution.",
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
      animate={{ backgroundColor: isInView ? "#521414" : "#F3D545" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full min-h-screen flex flex-col items-center py-20 px-5 md:px-10 transition-colors duration-500"
    >
      <div className="max-w-4xl w-full relative">
        {/* Vertical Timeline Line */}
        <div className="absolute top-0 left-5 md:left-10 w-1 h-full bg-gray-600 block"></div>

        {worksData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -150 }} // Start off-screen left
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible position
            viewport={{ amount: 0.2 }} // Trigger animation when 20% of the card is visible
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="relative flex flex-col md:flex-row items-start mb-12"
          >
            {/* Timeline Dot with Animation */}
            <motion.div
              className="absolute left-5 md:left-10 top-5 w-4 h-4 bg-yellow-400 rounded-full border border-white shadow-md block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ amount: 0.2 }} // Ensures it animates every time it enters view
              transition={{ duration: 0.3, ease: "easeOut" }}
            />

            {/* Content Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-3/4 ml-auto relative p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-lg bg-white/10 text-white transition-all duration-300 hover:bg-white/20 overflow-hidden"
            >
              {/* Shimmer Effect Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
              />

              {/* Background Blur */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-yellow-400 transition-colors duration-300 hover:text-white">
                  {work.title}
                </h3>
                <h4 className="text-lg font-bold text-yellow-500 transition-colors duration-300 hover:text-gray-100">
                  {work.company}
                </h4>
                <p className="text-sm text-gray-800 semibold">
                  {work.duration} - {work.location}
                </p>
                <p className="mt-2 text-gray-800 font-semibold transition-colors duration-300 hover:text-gray-200">
                  {work.description}
                </p>
                {work.technologies && (
                  <div className="mt-3 flex flex-wrap gap-2">
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
