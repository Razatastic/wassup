import React from "react";
import { Container } from "reactstrap";
import StatusSummary from "./StatusSummary";
import { Link } from "react-router-dom";

const StatusList = ({ statuses }) => (
  <Container>
    {/* If statuses exist, then map them. Otherwise, don't. */}
    {statuses &&
      statuses.map(status => (
        <Link to={"/status/" + status.id} key={status.id}>
          <StatusSummary status={status} key={status.id} />
        </Link>
      ))}
  </Container>
);

export default StatusList;
