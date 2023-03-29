import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyFooter() {
  return (
    <Card className="text-center">
      <Card.Header>See More</Card.Header>
      <Card.Body>
        <Card.Title>EpiBooks!</Card.Title>
        <Card.Text>
          We do NOT give books for free, we share knowledge.
        </Card.Text>
       
      </Card.Body>
      <Card.Footer className="text-muted">®EpiBooks!</Card.Footer>
    </Card>
  );
}

export default MyFooter;