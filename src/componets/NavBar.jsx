import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo_spot.webp";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 ">
      <div className="bg-stone-900 py-2 p-1 bg-opacity-20 absolute w-full justify-between">
        <div className="max-w-screen-xl flex flex-warp items-center justify-between p-4 h-14">
          <a href="/" className="flex items-center bg-opacity-0">
            <img src={Logo} alt="Logo" className="h-12 " />
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-stone-950 bg-blue-700 font-bold rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-stone-950 rounded font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-stone-950 rounded font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Article
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
