import React from "react";
import { Card, Button } from "react-bootstrap";

function MyCard() {
  return (
    <Card
      style={{
        width: "18rem",
        borderRadius: "10px",
        marginTop: "10px",
      }}
    >
      <Card.Img
        style={{ borderRadius: "10px" }}
        variant="top"
        src="https://akcdn.detik.net.id/community/media/visual/2019/07/02/34dbb988-a877-44c1-9e14-6e849403ddf2.jpeg?w=770&q=90/60px80"
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
}

export default MyCard;
