import React from "react";
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const NavigationBar = ({ signOut }) => (
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
        <DropdownItem onClick={signOut}>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Nav>
);

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavigationBar);
