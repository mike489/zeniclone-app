import React from "react";
import Logo_spot from "../assets/Logo_spot.webp";
import Selector from "./Footer_Button";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

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
      <footer className="bg-stone-950 py-4 mt-8 text-white pl-4 md:pl-10 font-primary">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src={Logo_spot} alt="" />
            <div className="flex items-center gap-2 flex-wrap font-normal">
              {data.map((item) => (
                <div className="flex items-center gap-2" key={item}>
                  <div className="bg-gray-300 h-3 w-[1px]" />
                  <p className="whitespace-nowrap">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0 md:pr-28">
            <div>
              <p className="text-white font-semibold text-[28px]">
                Find your local Zenith
              </p>
              <Selector />
            </div>
            <div className="mt-10">
              <p className="md:mt-0 mt-4">Contact with us</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com">
                  <FaFacebook size={24} color="#1877F2" />
                </a>
                <a href="https://www.twitter.com">
                  <FaTwitter size={24} color="#1DA1F2" />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram size={24} color="#E4405F" />
                </a>
                <a href="https://www.linkedin.com">
                  <FaLinkedin size={24} color="#0077B5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-400 text-center mt-4">
          &copy; {new Date().getFullYear()} Spotlight. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
