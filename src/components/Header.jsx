import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
import ThemeIcon from "./icons/ThemeIcon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="mb-4 sticky-top bd-navbar bg-body-tertiary border-bottom"
      data-bs-theme="dark"
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
          data-bs-theme="dark"
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
              <Container fluid>
                <Row className="justify-content-center nav-buttons-other">
                  <Col>
                    <Nav.Link
                      href="https://github.com/phillip-db"
                      id="social-button"
                      target="_blank"
                      active
                    >
                      <i className="bi bi-github"></i>
                    </Nav.Link>
                  </Col>
                  <Col>
                    <Nav.Link
                      href="https://github.com/phillip-db"
                      id="social-button"
                      target="_blank"
                      active
                    >
                      <i className="bi bi-linkedin"></i>
                    </Nav.Link>
                  </Col>
                </Row>
              </Container>
              <div className="vr mx-2 p-0 d-none d-lg-flex" />
              <hr />
              <div className="align-self-center">
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
