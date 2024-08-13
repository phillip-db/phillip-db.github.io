import { Card, Button } from "react-bootstrap";
const InfoCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="card-img"
        variant="top"
        src=""
        width="100"
        height="180"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
