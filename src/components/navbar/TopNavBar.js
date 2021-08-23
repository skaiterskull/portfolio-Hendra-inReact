import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import "./topNavbar.css";
import logo from "../../assets/img/logo-removebg-preview.png";

export const TopNavBar = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="navBar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} width="80px" alt="logo"></img>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  fs-3 fw-bold text-info">
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link>Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
