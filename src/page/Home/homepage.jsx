import React, { useEffect, useState } from "react";
import Hero from "../../componets/Hero";

import { BiChevronDown } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import CaseCard from "../../componets/caseCard";
import { CustomSpinner } from "../../componets/spinner";
// import NavBar from "../../componets/NavBar";

const Homepage = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://spotlightmedia.amanueld.info/api/posts/"
      );
      setPostData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return <CustomSpinner />;
  }
  return (
    <body>
      <Hero />
      <CaseCard />
      <section>
        <div className="flex flex-row items-center justify-between mt-14 max-w-7xl mx-auto">
          <h1 className="font-normal text-zinc-700 text-[48px]">
            Thought Leadership
          </h1>
          <div className="flex" key={setPostData?._id}>
            <button
              onClick={() => navigate(`/blog/article/${setPostData.id}`)}
              type="button"
              className="flex items-center px-3 py-2 text-base sm:text-lg font-normal text-[#09C5FF] focus:outline-none bg-white border-2 border-[#09C5FF] hover:bg-[#09C5FF] hover:text-white focus:z-10 focus:ring-10"
            >
              Read More <BiChevronDown size={30} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto mt-5">
          {postData?.posts?.data?.slice(0, 3)?.map((item, index) => (
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
              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out pr-10 pl-3">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 max-w-7xl mx-auto mt-10">
          {postData?.posts?.data?.slice(0, 3)?.map((item, index) => (
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
              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out pr-10 pl-3">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </body>
  );
};

export default Homepage;
