import React from "react";
import { Button, Container, Row } from "reactstrap";
import Dashboard from "../components/dashboard/Dashboard";

const Home = () => (
  <Container>
    <Row>
      <Container
        className="float-right"
        style={{ margin: 20, marginBottom: 2 }}
      >
        <Button style={{ margin: 5 }} color="primary">
          New Status
        </Button>
        <Button style={{ margin: 5 }} color="danger">
          Delete
        </Button>
      </Container>
    </Row>
    <Row>
      <Dashboard />
    </Row>
  </Container>
);

export default Home;
