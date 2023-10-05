import axios from "axios";
import React, { useEffect, useState } from "react";
// import { BiChevronDown, BiChevronRight, BiChevronsRight } from "react-icons/bi";
import { useParams } from "react-router";
import SimplePagination from "../../componets/pagination";
import { CustomSpinner } from "../../componets/spinner";

const Articilepage = () => {
  const [caseData, setCaseData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCase();
  }, [id]);

  async function fetchCase() {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://spotlightmedia.amanueld.info/api/case-studies"
      );
      setCaseData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return <CustomSpinner />;
  }

  return (
    <main>
      <h1 className="font-bold mt-5 text-2xl">Last Article</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mt-5">
        {caseData?.case_studies?.data?.slice(0, 9)?.map((item, index) => (
          <div
            className="relative overflow-hidden shadow-lg cursor-pointer group hover:bg-opacity-100 transition duration-500 ease-in-out"
            key={item.id}
          >
            <img
              src={item?.thumbnail?.original_url}
              className="object-cover w-full h-60"
              alt="Flower and sky"
            />

            <div className="hover:bg-[rgba(0,143,188,0.7)] absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out ">
              <div className="flex flex-col items-center justify-center absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                <img
                  src={item?.logo?.original_url}
                  alt="logo"
                  className="text-xl font-semibold tracking-tight text-white w-1/5"
                />
                <h4 className="text-xl font-semibold tracking-tight text-white mt-5">
                  {item.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-5">
        <SimplePagination />
      </div>
      {/* <button
      type="button"
      className="flex items-center px-3 py-2 gap-3 text-base sm:text-lg font-normal  text-[#09C5FF] focus:outline-none bg-white border-2 border-[#09C5FF] hover:bg-[#09C5FF] hover:text-white focus:z-10 focus:ring-10"
      >
      Next <BiChevronRight size={30} width={30} className="" />
      </button>; */}
    </main>
  );
};

export default Articilepage;
