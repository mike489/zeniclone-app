import React from "react";
import HeroImg from "../dirk-980.gif";
import mainLog from "../assets/zenith-logo.png"
const Hero = () => {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="container mx-auto relative min-h-screen flex flex-col md:flex-row items-center justify-center p-5 md:p-10">
        <p className="text-sky-400 text-4xl md:text-5xl font-bold">
        <img src={mainLog} alt="" />
        </p>
      </div>
    </main>
  );
};

export default Hero;
