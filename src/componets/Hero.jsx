import React from "react";
import HeroImg from "../dirk-980.gif";
import Logo_spot from "../assets/Logo_spot.webp";

const Hero = () => {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="container mx-auto relative min-h-screen flex flex-col md:flex-row items-center justify-center p-5 md:p-10">
        <p className="text-sky-400 text-4xl md:text-5xl font-bold">
          <img src={Logo_spot} alt="" />
        </p>
      </div>
    </main>
  );
};

export default Hero;
