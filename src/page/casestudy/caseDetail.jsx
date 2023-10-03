import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const CaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://spotlightmedia.amanueld.info/api/case-studies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {data?.posts?.data?.slice(0, 12)?.map((item, index) => (
        <div
          onClick={() => navigate(`"/blog/case/"${item.id}`)}
          className="relative overflow-hidden shadow-lg cursor-pointer group hover:bg-opacity-100 transition duration-500 ease-in-out"
          key={item.id}
        >
          <img
            src={item?.thumbnail?.original_url}
            className="object-cover w-full h-60"
            alt="Flower and sky"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
            <img
              src={item.logo}
              alt="logo"
              className="mb-3 text-xl font-semibold tracking-tight text-white"
            />
          </div>

          <div className=" hover:bg-[rgba(0,143,188,0.7)] absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
              {item.title}
            </h4>
          </div>
        </div>
      ))}
    </main>
  );
};

export default CaseDetail;
