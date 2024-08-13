import { Container, Nav, Navbar } from "react-bootstrap";
import ThemeIcon from "./ThemeIcon";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary rounded-2">
      <Container>
        <Navbar.Brand href="#Home">phillip.db</Navbar.Brand>
        <ThemeIcon />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
