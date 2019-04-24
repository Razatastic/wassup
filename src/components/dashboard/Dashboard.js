import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Notifications from "./Notifications";
import StatusList from "../status/StatusList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import StatusModal from "../../components/status/StatusModal";
import { PostButton } from "./";

const Dashboard = ({ statuses, auth, notifications }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <Container>
      <Row>
        <PostButton setButtonClicked={setButtonClicked} />
      </Row>
      <Row>
        <Col sm="12" md="7">
          <StatusList statuses={statuses} />
        </Col>
        <Col sm="12" md={{ size: 4, offset: 1 }}>
          <Notifications notifications={notifications} />
        </Col>
      </Row>
      <StatusModal
        buttonClicked={buttonClicked}
        closeModal={() => setButtonClicked(false)}
      />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    // statuses: state.status.statuses
    statuses: state.firestore.ordered.statuses,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "statuses" },
    { collection: "notifications", limit: 3 }
  ])
)(Dashboard);
