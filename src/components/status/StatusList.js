import React from "react";
import { Container } from "reactstrap";
import StatusSummary from "./StatusSummary";
import { map } from "rsvp";

const StatusList = ({ statuses }) => (
  <Container>
    {statuses &&
      statuses.map(status => <StatusSummary status={status} key={status.id} />)}
  </Container>
);

export default StatusList;
