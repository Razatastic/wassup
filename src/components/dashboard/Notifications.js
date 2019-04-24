import React from "react";
import { Container } from "reactstrap";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import moment from "moment";

const Notifications = ({ notifications }) => (
  <Container>
    <h5>Notifications</h5>
    <ListGroup>
      {notifications &&
        notifications.map(item => (
          <ListGroupItem key={item.id}>
            <ListGroupItemHeading className="h6">
              <span style={{ color: "#3D9970" }}>{item.user}</span>{" "}
              {item.content}
            </ListGroupItemHeading>
            <ListGroupItemText>
              {moment(item.time.toDate()).fromNow()}
            </ListGroupItemText>
          </ListGroupItem>
        ))}
    </ListGroup>
  </Container>
);

export default Notifications;
