import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const signedIn = false;

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black"
            }}
          >
            wassup?
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          {signedIn ? <SignedInLinks /> : <SignedOutLinks />}
        </Collapse>
      </Navbar>
    </div>
  );
}
