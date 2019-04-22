import React from "react";
import { Container, Row, Col } from "reactstrap";
import Notifications from "./Notifications";
import StatusList from "../status/StatusList";

const Dashboard = () => (
  <Container>
    <Row>
      <Col sm="12" md="7">
        <StatusList />
      </Col>
      <Col sm="12" md={{ size: 4, offset: 1 }}>
        <Notifications />
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
