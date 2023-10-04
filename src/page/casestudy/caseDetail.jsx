import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CustomSpinner } from "../../componets/spinner";

const CaseDetail = () => {
  const { id } = useParams();
  const [caseData, setCaseData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://spotlightmedia.amanueld.info/api/case-studies/${id}`
      );
      setCaseData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <CustomSpinner />;
  }

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      <div
        className="relative overflow-hidden shadow-lg cursor-pointer group hover:bg-opacity-100 transition duration-500 ease-in-out"
        key={caseData?._id}
      >
        <img
          src={caseData?.case_study?.thumbnail?.original_url}
          className="object-cover w-full h-60"
          alt="Flower and sky"
        />

        <div className="absolute inset-0 flex flex-col justify-center  opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
          <div className="hover:bg-[rgba(0,143,188,0.7)] absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out ">
            <img
              src={caseData?.case_study?.logo?.original_url}
              alt="logo"
              className="mb- text-xl font-semibold tracking-tight text-white w-2/5"
            />
            <h4 className="mb- text-xl font-semibold tracking-tight text-white">
              {caseData.title}
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaseDetail;
