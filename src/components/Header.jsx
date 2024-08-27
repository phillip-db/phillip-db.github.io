import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
import ThemeIcon from "./icons/ThemeIcon";
import { Link, NavLink } from "react-router-dom";
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
        <Navbar.Brand as={Link} to="/" onClick={() => window.scrollTo(0, 0)}>
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
          <Offcanvas.Header closeButton className="pb-0">
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand-lg"
              className="text-body-emphasis"
            >
              phillip-db
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="pt-0">
            <hr />
            <Nav className="bd-navbar-nav text-muted">
              <NavLink
                to="/"
                onClick={handleClose}
                className={({ isActive, isPending, isTransitioning }) =>
                  "nav-link ".concat(
                    isActive ? "fw-bold text-body-emphasis" : ""
                  )
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                onClick={handleClose}
                className={({ isActive, isPending, isTransitioning }) =>
                  "nav-link ".concat(
                    isActive ? "fw-bold text-body-emphasis" : ""
                  )
                }
              >
                Projects
              </NavLink>
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
                <div className="nav-vr vr mx-2 p-0" style={{ minWidth: 1 }} />
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
