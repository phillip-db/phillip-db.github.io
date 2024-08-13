import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import ThemeIcon from "./icons/ThemeIcon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="sticky-top bd-navbar bg-body-tertiary">
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
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <hr />
            <Nav>
              <div className="justify-content-enter">
                <ThemeIcon />
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
