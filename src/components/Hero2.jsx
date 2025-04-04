import React from "react";
import "../index.css";
import bg from "../../public/thebg.jpg";
import ldrvd from "../../public/ldr.mp4";

function Hero2() {
  return (
    <div className="min-h-screen bg-[#9D9773] text-white relative overflow-hidden px-4 sm:px-6 md:px-8 py-10 text-shadow-all">
      {/* Main heading */}
      <div className="text-center mt-10 relative z-10 px-2">
        <h1 className="name text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-bold animate-fade-in transition-all duration-300 hover:scale-105 hover:text-[#fff7d6]">
          AYMAAN SHABBIR IBRAHIM
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl animate-fade-in">
          <span className="aProf font-bold">Full Stack </span>
          <span className="aProf italic">Engineer.</span>
          <br />
          Building seamless experiences,
          <span className="aProf text-red-500"> from front to back.</span>
        </p>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 rounded-3xl bg-[#9D9773] bg-opacity-70 z-0 shadow-2xl border border-[#9D9773] max-h-screen responsive-bg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          .responsive-bg {
            background-size: contain !important;
          }
        }
      `}</style>

      {/* Media & Links Section */}
      <div className="relative z-10 flex justify-between items-center w-full px-4 sm:px-10 md:px-20 mt-28 gap-4 flex-wrap">
        {/* Video on left */}
        <div className="w-44 h-28 sm:w-52 sm:h-32 md:w-64 md:h-36 lg:w-72 lg:h-40 rounded-2xl overflow-hidden border-2 border-white shadow-xl mt-10 sm:mt-12 transition-transform duration-300 hover:scale-105">
          <video
            src={ldrvd}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social links on right */}
        <div className="flex flex-wrap gap-4 text-xs sm:text-sm md:text-base font-semibold mt-10 sm:mt-12">
          <a
            href="https://leetcode.com/u/AymaanShabbir"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9D9773] aProf text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition-all shadow-md hover:shadow-lg hover:scale-105 hover:shadow-yellow-300"
          >
            LeetCode
          </a>
          <a
            href="https://github.com/Aymaan-Shabbir"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9D9773] aProf text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition-all shadow-md hover:shadow-lg hover:scale-105 hover:shadow-purple-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aymaan-shabbir-012417270/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9D9773] aProf text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition-all shadow-md hover:shadow-lg hover:scale-105 hover:shadow-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
