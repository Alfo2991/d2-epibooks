import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.book.image} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;