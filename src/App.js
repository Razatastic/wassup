import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { Home, Profile, NoMatch } from "./pages";
import { SignIn, SignUp } from "./components/auth";
import { StatusDetails, CreateStatus } from "./components/status";
import { Dashboard } from "./components/dashboard";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/status/:id" component={StatusDetails} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/create" component={CreateStatus} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default App;
