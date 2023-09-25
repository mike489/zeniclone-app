import React from "react";
import mainLog from "../assets/zenith-logo.png";
import Selector from "./Button";
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
      <footer className="bg-[#505D65] py-4 mt-8 text-white pl-4 md:pl-10 font-primary">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
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
          <div className="w-full md:w-auto mt-4 md:mt-0 pr-28">
            <div>
              <p className="text-white font-semibold text-[28px]">
                Find your local Zenith
              </p>
              <Selector />
            </div>
            <div className="mt-10">
              <p className="m">Contact with us</p>
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
          &copy; {new Date().getFullYear()} My Bookstore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
