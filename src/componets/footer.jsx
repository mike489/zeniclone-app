import React from "react";
import mainLog from "../assets/zenith-logo.png";
import Selector from "./Button";

const Footer = () => {
  const data = [
    "Cookies",
    "Privacy ",
    "Modern Slavery Statement",
    "Gender Pay Gap 2022",
    "Cookies Settings",
  ];

  return (
    <div>
      <footer className="bg-[#505D65] py-4 mt-8 text-white pl-4 md:pl-10 font-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" sm:flex-row space-y-5 sm:space-y-0 sm:space-x-2 mb-10">
            <div>
              <img src={mainLog} alt="" />
              <div className="flex items-center gap-2 flex-wrap font-normal">
                {data.map((item) => (
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-300 h-3 w-[1px]" />
                    <p className="whitespace-nowrap">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4 w-full mt-10">
            <p className="text-white font-bold text-[28px]">
              Find your local Zenith
            </p>

            <Selector />

            <div>
              <p>contact with us</p>
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-center mt-4">
          &copy; {new Date().getFullYear()} My Bookstore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
