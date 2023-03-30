import React from "react";
import SingleBook from "./SingleBook";
import fantasy from "../data/coverbooks/fantasy.json";

const BookList = () => {
  return (
    <div>
      {fantasy.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </div>
  );
};

export default BookList;