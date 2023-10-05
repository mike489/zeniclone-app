import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import parse from "html-react-parser";
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
    <div>
      <div key={caseData?._id}>
        <div
          style={{ position: "relative", textAlign: "center", color: "white" }}
        >
          <img
            className="w-full h-[500]"
            src={caseData?.case_study?.thumbnail?.original_url}
            alt={caseData?.case_study?.insight}
            style={{ filter: "brightness(50%)" }}
          />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            {caseData?.case_study?.title}
          </h1>
        </div>

        <div className="mt-10 font-[400] pl-5 pr-80">
          {caseData?.case_study?.insight &&
            parse(caseData?.case_study?.insight)}
        </div>
        <div className="mt-10 font-[400] pl-5 pr-80">
          {caseData?.case_study?.opportunity &&
            parse(caseData?.case_study?.opportunity)}
        </div>
        <div className="mt-10 font-[400] pl-5 pr-80">
          {caseData?.case_study?.execution &&
            parse(caseData?.case_study?.execution)}
        </div>
        <div className="mt-10 font-[400] pl-5 pr-80">
          {caseData?.case_study?.results &&
            parse(caseData?.case_study?.results)}
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
