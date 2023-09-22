import React from "react";
import HeroImg from "../dirk-980.gif";

const Hero = () => {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="container mx-auto relative min-h-screen flex flex-col md:flex-row items-center justify-center p-5 md:p-10">
        <p className="text-sky-400 text-4xl md:text-5xl font-bold">
          Where Your Search Ends
        </p>
      </div>
    </main>
  );
};

export default Hero;
