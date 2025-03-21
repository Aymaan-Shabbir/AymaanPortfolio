import React from "react";

import Hero from "./Hero";

function Home() {
  return (
    <div id="Home" className="w-full min-h-screen bg-[#bb2b2b]  pt-20 pb-10">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-30 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23f440340e'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z' stroke-width='1' stroke='hsla(47,80.9%,61%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-0.23)' fill='url(%23a)'/></svg>")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <Hero />
    </div>
  );
}

export default Home;
