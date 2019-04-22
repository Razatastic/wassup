import React from "react";
import { Button, Container, Row } from "reactstrap";
import Dashboard from "../components/dashboard/Dashboard";

const Home = () => (
  <Container>
    <Row>
      <div className="float-right" style={{ margin: 20 }}>
        <Button style={{ margin: 5 }} color="primary">
          New Status
        </Button>
        <Button style={{ margin: 5 }} color="danger">
          Delete
        </Button>
      </div>
    </Row>
    <Row>
      <Dashboard />
    </Row>
  </Container>
);

export default Home;
