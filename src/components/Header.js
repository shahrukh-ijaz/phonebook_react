import React, { Component } from "react";
import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
    return (
      <div className="header">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="sticky"
        >
          <Navbar.Brand href="/dashboard">PhoneBook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard">Home</Nav.Link>
              <NavDropdown
                title="Option"
                id="basic-nav-dropdown"
                className="right"
              >
                <NavDropdown.Item href="/profile" to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/logout" to="/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}
export default Header;
