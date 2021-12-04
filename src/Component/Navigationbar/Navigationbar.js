import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import notification from "../../images/notification";
import search from "../../images/search";
import woman from "../../images/woman";
import "./Navigationbar.css";

export default function Navigationbar() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand className="text-white ps-3" href="#home">
            <h3 className="text-white ms-3">Stake</h3>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <div className="search-box">
                <img
                  style={{ width: "1rem" }}
                  className="me-3"
                  src={search}
                  alt=""
                />
                <input
                  className="searchInput text-white"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </Nav.Link>
            <Nav.Link className="text-center" href="#link">
              <span className="text-white">Alia John</span>
              <br />
              <img style={{ width: "1.2rem" }} src={notification} alt="" />
            </Nav.Link>
            <Nav.Link href="#home">
              <img
                className="text-white"
                style={{ width: "2rem", borderRadius: "50%" }}
                src={woman}
                alt=""
              />
            </Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
}
