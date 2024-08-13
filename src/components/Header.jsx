import { Container, Nav, Navbar } from "react-bootstrap";
import ThemeIcon from "./ThemeIcon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary rounded-2">
      <Container>
        <Navbar.Brand as={Link} to="/">
          phillip-db
        </Navbar.Brand>
        <ThemeIcon />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
