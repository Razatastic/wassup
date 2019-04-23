import React from "react";
import { Container, Row, Col } from "reactstrap";
import Notifications from "./Notifications";
import StatusList from "../status/StatusList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Dashboard = props => {
  const { statuses } = props;

  return (
    <Container>
      <Row>
        <Col sm="12" md="7">
          <StatusList statuses={statuses} />
        </Col>
        <Col sm="12" md={{ size: 4, offset: 1 }}>
          <Notifications />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    // statuses: state.status.statuses
    statuses: state.firestore.ordered.statuses
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "statuses" }])
)(Dashboard);
