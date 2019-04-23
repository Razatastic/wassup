import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { Dashboard, PostButton } from "../components/dashboard";
import StatusModal from "../components/status/StatusModal";

function Home() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <Container>
      <Row>
        <PostButton setButtonClicked={setButtonClicked} />
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
