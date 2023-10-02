import React, { useEffect, useState } from "react";
import Hero from "../../componets/Hero";

import { ImageData } from "../../constant/data";
import Footer from "../../componets/footer";
import { BiChevronDown } from "react-icons/bi";


import { Link, useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://spotlightmedia.amanueld.info/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data?.posts?.data);

  // const getProducts = (state) => state.products.products;

  // const selectProducts = createSelector([getProducts], (products) => products);

  // const products = useSelector((state) => state.products.products || []);
  // const products = useSelector(selectProducts);

  // const Product = data?.posts?.data.map((item) => (
  //   <Link to={`/DetailPage/${item.id}`} key={item.id}>
  //     <ProductCard
  //       imageSrc={`https://spotlightmedia.amanueld.info/api/posts${item?.thumbnail?.original_url}`}
  //       content={item.slug}
  //       name={item.title}
  //     />
  //   </Link>
  // ));

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto mt-5">
          {data?.posts?.data?.slice(0, 3)?.map((item, index) => (
            <div
              onClick={() => navigate(`/blog/details/${item.id}`)}
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
                src={item?.thumbnail?.original_url}
                alt=""
                className="h-full w-full object-cover  group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 max-w-7xl mx-auto mt-10">
          {data?.posts?.data?.slice(0, 3)?.map((item, index) => (
            <div
              onClick={() => navigate(`/blog/details/${item.id}`)}
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
                src={item?.thumbnail?.original_url}
                alt=""
                className="h-64  w-full object-cover  group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center mt-5">
          <button
            type="button"
            className="flex items-center px-3 py-2 text-base sm:text-lg font-normal text-[#09C5FF] focus:outline-none bg-white border-2 border-[#09C5FF] hover:bg-[#09C5FF] hover:text-white focus:z-10 focus:ring-10"
          >
            Read More <BiChevronDown size={30} />
          </button>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
