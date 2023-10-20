import axios from "axios";
import React, { useEffect, useState } from "react";
// import { BiChevronDown, BiChevronRight, BiChevronsRight } from "react-icons/bi";

import SimplePagination from "../../componets/pagination";
import { CustomSpinner } from "../../componets/spinner";

const Articilepage = () => {
  const [caseData, setCaseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => (prev > 1 ? prev - 1 : prev));
  };

  useEffect(() => {
    fetchCase();
  }, [counter]);

  async function fetchCase() {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://spotlightmedia.amanueld.info/api/case-studies?page=${counter}`
      );
      setCaseData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  if (loading) {
    return <CustomSpinner />;
  }

  return (
    <main className="">
      <div className="pt-20 max-w-7xl mx-auto">
        <h1 className="font-bold  text-2xl ">Last Article</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mt-5 gap-3">
          {caseData?.case_studies?.data?.map((item, index) => (
            <div
              className="overflow-hidden shadow-lg cursor-pointer group hover:bg-opacity-100 transition duration-500 ease-in-out"
              key={item.id}
            >
              <div className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out ">
                <div className="flex flex-col items-center justify-center absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                  <h4 className="text-xl font-semibold tracking-tight text-white mt-5">
                    {/* {item.title} */}
                  </h4>
                </div>
              </div>
              <img
                src={item?.thumbnail?.original_url}
                className="object-cover w-full h-60"
                alt="Flower and sky"
              />
            </div>
          )) || []}
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <SimplePagination
          onNext={handleIncrement}
          onPrev={handleDecrement}
          counter={counter}
        />
        {counter}
        <button onClick={() => setCounter((prev) => prev + 1)}>Next</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>Prev</button>
      </div>
    </main>
  );
};

export default Articilepage;
