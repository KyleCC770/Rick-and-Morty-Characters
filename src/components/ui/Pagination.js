import React from "react";

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      <button className="btn" onClick={goToNextPage}>
        Previous
      </button>
      <button className="btn" onClick={goToPrevPage}>
        Next
      </button>
    </div>
  );
}
