import React from "react";
import { Button } from "reactstrap";

const Home = () => (
  <div style={{ margin: 20, float: "right" }}>
    <Button style={{ margin: 5 }} color="primary">
      New Status
    </Button>
    <Button style={{ margin: 5 }} color="danger">
      Delete
    </Button>
  </div>
);

export default Home;
