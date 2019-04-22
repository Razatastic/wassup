import React from "react";
import { Container, Jumbotron } from "reactstrap";
import moment from "moment";

function StatusDetails(props) {
  const id = props.match.params.id;
  return (
    <Container>
      <Jumbotron style={{ margin: 40 }}>
        <h1 className="display-5">Post {id}</h1>
        <div className="lead">John Doe</div>
        <div>
          <span style={{ fontSize: 14, color: "gray" }}>
            {moment().format("lll")}
          </span>
        </div>
        <hr className="my-3" />
        <p>I don't want to go anywhere, lol.</p>
      </Jumbotron>
    </Container>
  );
}

export default StatusDetails;
