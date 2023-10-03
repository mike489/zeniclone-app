import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { CustomSpinner } from "../../componets/spinner";

function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://spotlightmedia.amanueld.info/api/posts/${id}`
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  if (loading) {
    return <CustomSpinner />;
  }
  // console.log(data?.case_studies);
  return (
    <div>
      <div key={data?._id}>
        <img
          className="w-full"
          src={data?.post?.thumbnail?.original_url}
          alt={data?.post?.content}
          title={data?.post?.title}
        />

        <h1 className="flex flex-col items-center font-medium mt-10">
          {data?.post?.title}
        </h1>
        <div className="mt-10 font-[400] pl-5 pr-80">
          {data?.post?.content && parse(data?.post?.content)}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
