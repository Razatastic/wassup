import React from "react";
import { Container, Jumbotron } from "reactstrap";
import moment from "moment";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { LoadingIcon } from "./";
import { Redirect } from "react-router-dom";

// Detailed view of status (displayed alone)
const StatusDetails = ({ status, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;

  if (status) {
    return (
      <Container>
        <Jumbotron style={{ margin: 40 }}>
          <h1 className="display-6">{status.title}</h1>
          <div className="lead">
            {status.authorFirstName} {status.authorLastName}
          </div>
          <div>
            <span style={{ fontSize: 14, color: "gray" }}>
              {moment(status.createdAt.toDate()).calendar()}
            </span>
          </div>
          <hr className="my-3" />
          <p>{status.content}</p>
        </Jumbotron>
      </Container>
    );
  } else {
    return <LoadingIcon />;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const statuses = state.firestore.data.statuses;
  const status = statuses ? statuses[id] : null;
  return {
    status: status,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "statuses" }])
)(StatusDetails);
