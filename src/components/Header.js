import React from "react";
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
          <Navbar.Brand href="/dashboard" id="home_link">PhoneBook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard" id="dashboard_link">Home</Nav.Link>
              <NavDropdown
                title="Option"
                id="navbar-header"
                className="right navbar-header"
              >
                <NavDropdown.Item href="/profile" id="profile_link" to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/logout" id="logout_link" to="/logout">
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
