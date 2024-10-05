import React from "react";

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center items-center">
      <button onClick={handlePrev} className="px-8" disabled={pageNo === 1}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <div className="font-bold mx-4">{pageNo}</div>
      <button onClick={handleNext} className="px-8">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
