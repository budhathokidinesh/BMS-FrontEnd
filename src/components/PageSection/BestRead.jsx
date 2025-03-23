import React from "react";
import "./BestRead.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import CustomCard from "../CustomCard/CustomCard";
import { useSelector } from "react-redux";

const BestRead = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);
  let books = [];
  if (publicBooks.length) {
    const sorted = [...publicBooks].sort(
      (a, b) => new Date(b.averageRating) - new Date(a.averageRating)
    );
    books = sorted.slice(0, 4);
  }
  return (
    <div className="mt-4">
      <SectionTitle title={"Best Read"} />
      <div className="d-flex gap-2 justify-content-center flex-wrap">
        {books.map((book) => (
          <CustomCard key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BestRead;
