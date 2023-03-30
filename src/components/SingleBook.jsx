import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Card>
      <Card.Img className=" mx-auto d-block img-fluid d-block w-50 " src={props.book.image} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;