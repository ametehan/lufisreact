import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import image from "./favicon.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={image}></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
