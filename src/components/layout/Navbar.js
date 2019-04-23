import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import logo from "../../assets/logo.png";
import { connect } from "react-redux";

const signedIn = false;

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand tag={Link} to="/">
          <img src={logo} alt="logo" style={{ width: 120 }} />
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          {signedIn ? <SignedInLinks /> : <SignedOutLinks />}
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(NavigationBar);
