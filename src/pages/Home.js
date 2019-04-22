import React, { useState } from "react";
import { Button, Container, Row } from "reactstrap";
import Dashboard from "../components/dashboard/Dashboard";
import StatusModal from "../components/status/StatusModal";

function Home() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <Container>
      <Row>
        <Container
          className="float-right"
          style={{ margin: 20, marginBottom: 2 }}
        >
          <Button
            style={{ margin: 5 }}
            color="primary"
            onClick={() => setButtonClicked(true)}
          >
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
      <StatusModal
        buttonClicked={buttonClicked}
        closeModal={() => setButtonClicked(false)}
      />
    </Container>
  );
}

export default Home;
