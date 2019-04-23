import React from "react";
import { Container } from "reactstrap";
import { StatusSummary, LoadingIcon } from "./";
import { Link } from "react-router-dom";

const StatusList = ({ statuses }) => {
  if (statuses) {
    return (
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
  }
  return <LoadingIcon />;
};

export default StatusList;
