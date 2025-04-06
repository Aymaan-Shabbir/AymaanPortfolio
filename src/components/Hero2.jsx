"use client";
import React, { useState } from "react";
import "../index.css";
import bg from "/thebg.jpg";
import ldrvd from "/ldr.mp4";
import hoverBg from "/thebgvid.mp4";
import aymaan from "/aymaan22.jpg";

function Hero2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen  bg-[#9D9773] text-white relative overflow-hidden px-4 sm:px-6 md:px-8 py-10 text-shadow-all animate-slide-up">
      {/* Hover Video Background */}
      <video
        src={hoverBg}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover rounded-3xl z-[1] transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Static Background Image - hidden when hovered */}
      {!isHovered && (
        <div
          className="absolute inset-0 rounded-3xl bg-[#9D9773] bg-opacity-70 z-[2] shadow-2xl border border-[#9D9773] max-h-screen responsive-bg zoom-bg"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .responsive-bg {
            background-size: contain !important;
          }
        }
      `}</style>

      {/* Foreground Content */}
      <div className="relative z-[3] text-center mt-10 px-2">
        <h1 className="name text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-bold animate-fade-in fade-delay-100 ">
          AYMAAN SHABBIR IBRAHIM
        </h1>
        <p className="aProf mt-4 text-sm sm:text-base md:text-lg lg:text-2xl animate-fade-in fade-delay-200">
          <span className="aProf font-bold typewriter">
            Full Stack Engineer
          </span>
          <br />
          Building seamless experiences,
          <span className="aProf text-red-500"> from front to back.</span>
        </p>
      </div>

      <div className="relative z-[3] flex justify-between items-center w-full px-4 sm:px-10 md:px-20 mt-28 gap-4 flex-wrap">
        <div
          data-aos="zoom-up-right"
          className="w-44 h-28 sm:w-52 sm:h-32 md:w-64 md:h-36 lg:w-72 lg:h-40 rounded-2xl overflow-hidden border-2 border-white shadow-xl mt-10 sm:mt-12 transition-transform duration-300 hover:scale-105 animate-fade-in fade-delay-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <img
              src={aymaan}
              alt="Hovered Image"
              className="w-full h-full object-contain "
            />
          ) : (
            <video
              src={ldrvd}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="font-bold">
          {!isHovered ? (
            <p className="aProf text-red-800 font-bold text-xs sm:text-sm mt-2 animate-pulse w-44 sm:w-52 md:w-64 lg:w-72 text-center">
              ⚠️ Do not hover over the video.
            </p>
          ) : (
            <p className="aProf text-red-800 font-bold text-lg sm:text-sm mt-2 animate-pulse w-44 sm:w-52 md:w-64 lg:w-72 text-center">
              The Dreams .
            </p>
          )}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 text-xs sm:text-lg md:text-base font-semibold mt-10 sm:mt-12 animate-fade-in fade-delay-400">
          {[
            {
              name: "LeetCode",
              url: "https://leetcode.com/u/AymaanShabbir",
              shadow: "yellow-300",
            },
            {
              name: "GitHub",
              url: "https://github.com/Aymaan-Shabbir",
              shadow: "purple-300",
            },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/aymaan-shabbir-012417270/",
              shadow: "blue-400",
            },
          ].map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#C2BC9B] aProf text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all shadow-md hover:shadow-lg hover:scale-105 hover:shadow-${link.shadow} border-1 border-black hover-glow hover:text-red-800`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce z-[3]">
        ↓
      </div>
    </div>
  );
}

export default Hero2;
