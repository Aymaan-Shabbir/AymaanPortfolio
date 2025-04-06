"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Contact() {
  const ref = useRef(null);

  return (
    <div
      id="contact"
      ref={ref}
      className=" overflow-hidden w-full min-h-screen flex flex-col items-center py-20 px-5 md:px-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/theogbg.jpg')" }}
    >
      <div className="max-w-2xl w-full relative">
        {/* Contact Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 relative"
        >
          <h2 className="name text-3xl font-bold text-red-800 my-4">
            Contact Me
          </h2>
          <p className="aProf text-red-800 font-semibold">
            Fill out the form below to get in touch!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          data-aos="zoom-in-up"
          action="https://getform.io/f/bgdpqvka"
          method="POST"
          className="w-full p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-lg bg-white/20 text-white transition-all duration-300 hover:bg-white/30 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4">
            <label className="aProf block text-red-800">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-[#B3AD87] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label className="aProf block text-red-800">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-[#B3AD87] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div className="mb-4">
            <label className="aProf block text-red-800">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 bg-[#B3AD87] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-yellow-400"
            ></textarea>
          </div>

          <input type="hidden" name="_gotcha" style={{ display: "none" }} />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="aProf cursor-pointer w-full bg-yellow-400 text-black font-bold py-3 rounded-lg transition-all duration-300 hover:bg-yellow-500"
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
