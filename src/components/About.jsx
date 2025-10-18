import React from "react";
import AymaanImg from "../assets/aymaan.jpg";

function About() {
  return (
    <div
      id="about"
      className="w-full min-h-screen py-16 flex flex-col items-center text-[#F3D545] aProf m-0"
      style={{
        backgroundImage: `url('/theogbg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Heading */}
      <h2 className="text-4xl sm:text-3xl font-bold mb-10 text-red-800 text-center name">
        About Me
      </h2>

      {/* Card */}
      <div className="bg-[#7E7B40] p-8 rounded-xl shadow-lg border-2 border-transparent flex flex-col md:flex-row items-center max-w-5xl hover:scale-105 transition-transform duration-300">
        {/* Image */}
        <div className="w-44 h-44 md:w-48 md:h-48 mb-6 md:mb-0 md:mr-8 rounded-full overflow-hidden border-2 border-[#FFD65A]">
          <img
            src={AymaanImg}
            alt="Aymaan Shabbir"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-white text-base sm:text-sm leading-relaxed space-y-4">
          <p>
            I am <strong>Aymaan Shabbir</strong>, a Full Stack Engineer
            currently working as a{" "}
            <strong className="text-red-800">
              Programmer Analyst Trainee at Cognizant
            </strong>{" "}
            since May 2025. I build web applications that combine clean design
            with solid functionality and optimal performance.
          </p>
          <p>
            Passionate about solving real-world problems through code, I
            continuously enhance my skills in web development, data structures,
            algorithms, and AI/ML. I enjoy experimenting with new technologies,
            optimizing systems, and creating scalable applications.
          </p>
          <p>
            My approach is simple: write clean, maintainable code and build
            solutions that are functional, reliable, and impactful for users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
