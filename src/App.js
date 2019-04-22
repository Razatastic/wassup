import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { Home, Profile, NoMatch } from "./pages";
import StatusDetails from "./components/status/StatusDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/status/:id" component={StatusDetails} />
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default App;
