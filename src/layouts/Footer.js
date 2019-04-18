import React from "react";
import { Container } from "reactstrap";
import { Nav, NavItem } from "reactstrap";
function Footer() {
  return (
    <footer>
      <Container id="footer">
        <Nav>
          <NavItem>
            <a className="nav-link" href="#banner">
              Home
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#keunggulan">
              Feature
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#misi">
              Mission
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#mentor">
              Become Mentor
            </a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#download">
              Download
            </a>
          </NavItem>
        </Nav>
        <div className="footer-text">
          <p>
            Copyright &copy;{" "} 2019 {" "}
            <span style={{ fontWeight: "600" }}>Cariilmu Online</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
