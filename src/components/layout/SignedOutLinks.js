import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function NavigationBar() {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>Sign Up</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>Log In</NavLink>
      </NavItem>
    </Nav>
  );
}
