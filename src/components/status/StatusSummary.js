import React from "react";
import { Card, CardTitle, CardSubtitle, CardText } from "reactstrap";
import moment from "moment";

// Summarized verision of status (displayed on home page)
const StatusSummary = ({ status }) => (
  <Card body style={{ margin: 10 }}>
    <CardTitle className="h4">{status.title}</CardTitle>
    <CardSubtitle>{status.content}</CardSubtitle>
    <CardText style={{ marginTop: 5, fontSize: 12, color: "gray" }}>
      Created by: {status.authorFirstName} {status.authorLastName}
      {" ~ "}
      {moment(status.createdAt.toDate()).calendar()}
    </CardText>
  </Card>
);

export default StatusSummary;
