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

const NavigationBar = ({ signOut, profile }) => (
  <Nav className="ml-auto" navbar>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {profile.firstName + " " + profile.lastName}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to="/profile">
          Profile
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={signOut}>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Nav>
);

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
