import React from "react";
import { Container } from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Home({ auth }) {
  if (auth.uid) return <Redirect to="/dashboard" />;
  return (
    <Container>
      <div className="text-center h1" style={{ marginTop: 100 }}>
        Sup brah?
      </div>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Home);
