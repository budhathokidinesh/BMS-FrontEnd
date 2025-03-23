import React from "react";
import "./Recommendation.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import CustomCard from "../CustomCard/CustomCard";

const Recommendation = () => {
  return (
    <div className="mt-4">
      <SectionTitle title={"Recommendation"} />
      <div className="d-flex gap-2 justify-content-center flex-wrap">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};

export default Recommendation;
