import React from "react";

// Certificate data: image src and link
const certifications = [
  {
    title: "Software Engineer , HackerRank Oct-2025",
    image: "https://i.ibb.co/p6YRvqqF/software-engineer-certificate-1.jpg",
    link: "https://www.hackerrank.com/certificates/iframe/5e2119af8e86",
  },
  {
    title: "SQL Intermediate , HackerRank Jan-2025",
    image: "https://i.ibb.co/S4rwPwSN/css-certificate-1.jpg",
    link: "https://www.hackerrank.com/certificates/iframe/eaba68386b59",
  },
  {
    title: "CSS Beginners(basics) ,  HackerRank Sept-2023",
    image: "https://i.ibb.co/27K05DYH/css-certificate-3.jpg",
    link: "https://www.hackerrank.com/certificates/iframe/5294c7b39d5f",
  },
];

function Certifications() {
  return (
    <div
      id="certifications"
      className="w-full min-h-screen py-16 flex flex-col items-center text-[#F3D545] aProf"
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
        Certifications
      </h2>

      {/* Grid of Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#7E7B40] p-6 rounded-xl shadow-lg border-2 border-transparent flex flex-col justify-between items-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-yellow-400 text-xl font-semibold mb-4 text-center">
              {cert.title}
            </h3>
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-64 object-cover rounded-lg border border-gray-700 mb-4"
            />
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#FFD65A] text-black font-semibold rounded-lg hover:bg-red-800 hover:text-[#F3D545] transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
