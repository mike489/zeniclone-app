import React, { useState, useEffect } from "react";
import axios from "axios";
// import SimplePagination from "../../componets/pagination";
import { CustomSpinner } from "../../componets/spinner";
// import SimplePagination from "../../componets/pagination";
import Button from "../../componets/Button";

const BolgPage = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, [counter]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://spotlightmedia.amanueld.info/api/posts?page=${counter}`
      );
      setPostData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div>
        <CustomSpinner />
      </div>
    );
  }

  return (
    <main>
      <div className="pt-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mt-5 gap-3">
          {postData?.posts?.data?.map((item, index) => (
            <div
              className="overflow-hidden shadow-lg cursor-pointer group hover:bg-opacity-100 transition duration-500 ease-in-out"
              key={item.id}
            >
              <div className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out ">
                <div className="flex flex-col items-center justify-center absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                  <h4 className="text-xl font-semibold tracking-tight text-white mt-5">
                    {item.title}
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
        <Button
          onPrev={() => setCounter((prev) => (prev > 1 ? prev - 1 : prev))}
          onNext={() => setCounter((prev) => prev + 1)}
        />
      </div>
    </main>
  );
};

export default BolgPage;
