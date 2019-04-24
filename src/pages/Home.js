import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Greeting from "../components/animated/Greeting";
import Footer from "../components/layout/Footer";

function Home({ auth }) {
  if (auth.uid) return <Redirect to="/dashboard" />;
  return (
    <div className="animated-text-container">
      <Greeting />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Home);
