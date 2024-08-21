import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
import ThemeIcon from "./icons/ThemeIcon";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./svgs/Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showVr, setShowVr] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleVr = () => {
    setShowVr(!showVr);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <Navbar
      expand="lg"
      className="mb-4 sticky-top bd-navbar bg-body-tertiary border-bottom"
      data-bs-theme="dark"
    >
      <Container className="bd-gutter">
        <Navbar.Brand as={Link} to="/">
          <div style={{ width: "3rem" }}>
            <Logo />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          id="navbar-toggle"
          aria-controls="offcanvasNavbar-expand-lg"
          onClick={toggleMenu}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          placement="end"
          scroll="true"
          data-bs-theme="dark"
          show={menuOpen}
          onHide={handleClose}
          onExited={toggleVr}
          onEnter={toggleVr}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              phillip-db
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="bd-navbar-nav">
              <Nav.Link as={Link} to="/" onClick={handleClose}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleClose}>
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
                      href="https://www.linkedin.com/in/phillip-burleigh/"
                      id="social-button"
                      target="_blank"
                      active
                    >
                      <i className="bi bi-linkedin"></i>
                    </Nav.Link>
                  </Col>
                </Row>
              </Container>
              {showVr && (
                <div className="nav-vr vr mx-2 p-0" style={{ width: 1 }} />
              )}
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
