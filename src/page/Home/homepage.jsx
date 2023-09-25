import React, { useEffect, useState } from "react";
import Hero from "../../componets/Hero";

import { ImageData } from "../../constant/data";
import Footer from "../../componets/footer";
import { BiChevronDown } from "react-icons/bi";

const Homepage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://31.220.18.115:5000/api/property/featured/user/home-page")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <Hero />

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {ImageData.map((item) => (
          <div
            className="relative overflow-hidden shadow-lg cursor-pointer group hover:bg-opacity-100 transition duration-500 ease-in-out"
            key={item.id}
          >
            <img
              src={item.image}
              className="object-cover w-full h-60"
              alt="Flower and sky"
            />
            <div className=" hover:bg-[rgba(0,143,188,0.7)] absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </main>
      <section>
        <div className="flex items-start justify-center mt-20">
          <h1 className="font-normal text-zinc-700 text-[48px]">
            Thought Leadership
          </h1>
        </div>

        <div className="grid grid-flow-col grid-rows-5 gap-4 mt-10 max-w-7xl mx-auto">
          {data?.slice(0, 3)?.map((item, index) => (
            <div
              key={item._id}
              className={`${
                index == 0
                  ? "row-span-4 col-span-2 w-full"
                  : index == 1
                  ? "row-span-2"
                  : "row-span-2"
              } group cursor-pointer overflow-hidden flex flex-col items-start space-y-3 relative`}
            >
              <img
                src={item?.images[0]?.url}
                alt=""
                className="h-fit w-full object-cover  group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4 max-w-7xl mx-auto">
          {data?.slice(0, 3)?.map((item, index) => (
            <div
              key={item._id}
              className={`${
                index == 0
                  ? "basis-1/4  w-full"
                  : index == 1
                  ? "basis-1/4"
                  : "basis-1/2"
              } group cursor-pointer overflow-hidden flex flex-col items-start space-y-3 relative`}
            >
              <img
                src={item?.images[0]?.url}
                alt=""
                className="h-64  w-full object-cover  group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </section>
      <div className="flex flex-col items-center mt-10">
        <button
          type="button"
          className=" flex flex-row items-center py-3 px-5 mb-2 text-lg font-normal text-[#09C5FF] focus:outline-none bg-white border-2 border-[#09C5FF] hover:bg-[#09C5FF] hover:text-white focus:z-10 focus:ring-10  "
        >
          Read More
          <BiChevronDown size={40} />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
