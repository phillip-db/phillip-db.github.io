import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import ThemeIcon from "./icons/ThemeIcon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="mb-4 sticky-top bd-navbar bg-body-tertiary border-bottom"
    >
      <Container className="bd-gutter">
        <Navbar.Brand as={Link} to="/">
          phillip-db
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          placement="end"
          scroll="true"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="bd-navbar-nav">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <hr />
            <Nav className="ms-md-auto">
              <Button
                href="https://github.com/phillip-db"
                target="_blank"
                className="mx-1"
              >
                <i className="bi bi-github"></i>
              </Button>
              <Button
                href="https://github.com/phillip-db"
                target="_blank"
                className="mx-1"
              >
                <i className="bi bi-github"></i>
              </Button>
              <ThemeIcon />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
