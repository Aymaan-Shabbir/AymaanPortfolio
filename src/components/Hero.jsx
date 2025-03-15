import { motion } from "framer-motion";

import aymaan from "../assets/aymaan.jpeg";
import techGif from "../assets/tech-gif2.gif";

function Hero() {
  return (
    <div className="relative h-[60%] flex flex-col items-center justify-center text-center bg-[#aa0505] text-white z-10 flex-wrap">
      <motion.img
        src={techGif}
        alt="Tech Animation"
        className="absolute top-0 left-0 w-full h-full object-contain opacity-100 z-0 text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      />

      {/* Profile Image*/}
      <motion.img
        src={aymaan}
        alt="Aymaan Shabbir"
        className="aIMG w-40 h-40 rounded-full border-4 border-[#F3D545] shadow-xl hover:scale-110 transition-transform duration-500 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Name section*/}
      <motion.h1
        className="text-5xl font-bold text-[#F3D545] mt-3 drop-shadow-[4px_4px_0px_#000] group z-20"
        style={{
          fontFamily: "'Zen Dots', sans-serif",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 20px #FFD65A" }}
      >
        AYMAAN SHABBIR IBRAHIM
      </motion.h1>

      {/* About Section */}
      <motion.h1
        className="text-3xl bg-[#F3D545] text-[#aa0505] max-w-lg z-20 mt-3 font-bold p-1 border rounded-lg aPROF"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full Stack Engineer.
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300  max-w-2xl z-20 my-4 aPARA mx-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I craft high-performance, user-centric applications with a focus on
        scalability and maintainability. Passionate about clean architecture and
        intuitive UI/UX, I thrive on solving complex problems and optimizing
        solutions for efficiency and seamless user experience.
      </motion.p>

      {/* PROFILES*/}
      <motion.div
        className="mt-1 flex gap-4 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} className="aProfBTN">
          <a
            href="https://leetcode.com/u/AymaanShabbir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" bg-[#F3D545] text-[#aa0505] px-3  py-2 rounded-2xl text-lg font-semibold hover:bg-[#aa0505 transition hover:text-[#F3D545] hover:bg-[#aa0505] ">
              LeetCode
            </button>
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className="aProfBTN">
          <a
            href="https://github.com/Aymaan-Shabbir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" bg-[#FFD65A] text-[#aa0505] px-3 py-2  rounded-2xl text-lg font-semibold hover:bg-[#aa0505] hover:text-[#F3D545]  transition">
              GitHub
            </button>
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className="aProfBTN">
          <a
            href="https://linkedin.com/in/aymaan-shabbir-012417270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" bg-[#FFD65A] text-[#aa0505] px-3 py-2  rounded-2xl text-lg font-semibold hover:bg-[#aa0505] hover:text-[#F3D545]  transition">
              LinkedIn
            </button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
