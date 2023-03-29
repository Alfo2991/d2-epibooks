import React, { Component } from "react";
import { Row, Col, Card, Carousel, Button } from "react-bootstrap";
import fantasy from "../data/coverbooks/fantasy.json";
import history from "../data/coverbooks/history.json";
import horror from "../data/coverbooks/horror.json";
import romance from "../data/coverbooks/romance.json";
import scifi from "../data/coverbooks/scifi.json";


class AllTheBooks extends Component {
    state = {
      books: [...fantasy, ...history, ...horror, ...romance, ...scifi],
    };
  
    render() {
      return (
        <div >
          <h1>All The Books</h1>
          <Carousel>
            {this.state.books.map((book) => (
              <Carousel.Item key={book.asin}>
                <Row>
                  <Col>
                    <Card>
                      <Card.Img className=" mx-auto d-block img-fluid d-block w-50 " src={book.img} />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>{book.category}</Card.Text>
                        <Card.Text>${book.price}</Card.Text>
                        <Button variant="primary">Buy Now!</Button>
                      </Card.Body>
                    </Card>
                    
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      );
    }
  }
  
  export default AllTheBooks;