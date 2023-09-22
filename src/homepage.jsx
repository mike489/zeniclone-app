import React from "react";
import Hero from "./componets/Hero";

import { ImageData } from "./constant/data";
import Footer from "./componets/footer";

const Homepage = () => {
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
        <div className="flex justify-evenly mt-4">
          <div className="grid grid-cols-1 ">
            <img
              src="https://www.zenithmedia.com/wp-content/uploads/2023/09/venti-views-6QDvwq2Fjsc-unsplash-1800x1054.jpg"
              width={850}
              alt=""
            />
          </div>
          <div className="grid grid-cols-1">
            <div>
              <img
                src="https://www.zenithmedia.com/wp-content/uploads/2023/09/venti-views-6QDvwq2Fjsc-unsplash-1800x1054.jpg"
                width={400}
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.zenithmedia.com/wp-content/uploads/2023/09/venti-views-6QDvwq2Fjsc-unsplash-1800x1054.jpg"
                width={400}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap">
          <div className="w-full md:w-3/4">
            <img
              src="https://www.zenithmedia.com/wp-content/uploads/2023/01/OURWORK-270x240.jpg"
              alt=""
            />
          </div>
          <div className="w-full md:w-3/4">
            <img
              src="https://www.zenithmedia.com/wp-content/uploads/2023/01/OURWORK-270x240.jpg"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/4">
            <img
              src="https://www.zenithmedia.com/wp-content/uploads/2023/09/meds-thougth-piece.jpeg"
              width={600}
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
