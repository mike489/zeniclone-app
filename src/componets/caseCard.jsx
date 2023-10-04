import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const CaseCard = () => {
  const [caseData, setCaseData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCase();
  }, []);

  async function fetchCase() {
    try {
      const res = await axios.get(
        "https://spotlightmedia.amanueld.info/api/case-studies"
      );
      setCaseData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {caseData?.case_studies?.data?.slice(0, 9)?.map((item, index) => (
        <div
          onClick={() => navigate(`/blog/case/${item.id}`)}
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
    </main>
  );
};

export default CaseCard;
