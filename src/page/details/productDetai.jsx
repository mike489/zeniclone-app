import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    const res = await axios.get(
      `https://spotlightmedia.amanueld.info/api/posts/${id}`
    );
    setData(res.data);
  }

  if (!data) {
    return <div className="flex flex-col items-center ">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto mt-5">
      <div
        key={data._id}
        className={`row-span-4 col-span-2 w-full group cursor-pointer overflow-hidden flex flex-col items-start space-y-3 relative`}
      >
        <img
          src={data.thumbnail?.original_url}
          alt=""
          title={data.title}
          className="h-fit w-full object-cover  group-hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );
}

export default ProductDetail;
