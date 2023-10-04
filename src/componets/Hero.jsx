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
        <img src={Logo_spot} alt="" />
      </div>
    </main>
  );
};

export default Hero;
