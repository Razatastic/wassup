import React from "react";
import { Container } from "reactstrap";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import moment from "moment";

const Notifications = () => (
  <Container>
    <h5>Notifications</h5>
    <ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading>Yoshi joined the party</ListGroupItemHeading>
        <ListGroupItemText>{moment(new Date()).calendar()}</ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  </Container>
);

export default Notifications;
