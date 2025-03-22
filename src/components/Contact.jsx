"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

  return (
    <motion.div
      id="contact"
      ref={ref}
      animate={{ backgroundColor: isInView ? "#521414" : "#F3D545" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full min-h-screen flex flex-col items-center py-20 px-5 md:px-10 transition-colors duration-500"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="projName text-3xl font-bold text-yellow-400">
            Contact Me
          </h2>
          <p className="boast text-yellow-300 font-semibold">
            Fill out the form below to get in touch!
          </p>
        </motion.div>

        <motion.form
          action="https://getform.io/f/bgdpqvka"
          method="POST"
          className="w-full p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-lg bg-white/10 text-white transition-all duration-300 hover:bg-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4">
            <label className=" boast block text-yellow-400">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-[#521414] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label className="boast block text-yellow-400">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-[#521414] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label className="boast block text-yellow-400">Message</label>
            <input
              type="text"
              name="message"
              required
              className="w-full p-3 bg-[#521414] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <input type="hidden" name="_gotcha" style={{ display: "none" }} />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg transition-all duration-300 hover:bg-yellow-500"
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
