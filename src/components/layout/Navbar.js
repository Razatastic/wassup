import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";

const NavbarC = () => {
  return (
    <Navbar color="light" light expand="md">
      <div className="container">
        <Link to="/" className="">
          Home
        </Link>
      </div>
    </Navbar>
  );
};

export default NavbarC;
