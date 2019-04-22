import React from "react";
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          John Doe
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <Link to="/profile">Profile</Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
}
