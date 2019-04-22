import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/signup">
          Sign Up
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/login">
          Log In
        </NavLink>
      </NavItem>
    </Nav>
  );
}
