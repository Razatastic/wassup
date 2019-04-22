import React from "react";
import { Container } from "reactstrap";
import StatusSummary from "./StatusSummary";

const StatusList = () => (
  <Container>
    <StatusSummary />
    <StatusSummary />
    <StatusSummary />
  </Container>
);

export default StatusList;
