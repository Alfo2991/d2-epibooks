import React, { useState } from "react";
import SingleBook from "./SingleBook";
import fantasy from "../data/coverbooks/fantasy.json";

const BookList = () => {
  const [cercaLibro, setcercaLibro] = useState("");

  const filterBookList = (book) => {
    return book.title.toLowerCase().includes(cercaLibro.toLowerCase());
  };

  return (
    <div>
      {}
      <input
        type="text"
        placeholder="Cerca un libro"
        value={cercaLibro}
        onChange={(e) => setcercaLibro(e.target.value)}
      />
      {}
      {fantasy.filter(filterBookList).map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </div>
  );
};

export default BookList;
