import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
  NavbarToggle,
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import БЦТайм from "./main.js";
import ОБизнесЦентре from "./about.js";
import Аренда from "./arenda.js";
import Контакты from "./contacts.js";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">БЦ Время</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">О бизнес-центре</Nav.Link>
              <Nav.Link href="/arenda">Аренда</Nav.Link>
              <Nav.Link href="/contacts">Контакты</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route path="/" element={<БЦТайм />} />
          <Route path="/about" element={<ОБизнесЦентре />} />
          <Route path="/arenda" element={<Аренда />} />
          <Route path="/contacts" element={<Контакты />} />
        </Routes>
      </Router>
    </>
  );
}

export default Header;
