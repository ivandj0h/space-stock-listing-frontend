import React from "react";
import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "./components/MyCard";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <MyCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
