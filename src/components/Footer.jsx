import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Logo from "./svgs/Logo";
import { ProjectsContext } from "../contexts/ProjectsContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const projects = useContext(ProjectsContext);

  return (
    <footer className="pdb-footer mt-3 pt-5 pb-2 bg-body-tertiary text-center">
      <Container>
        <Row>
          <Col sm={4} className="text-xs-center">
            <div className="d-flex pb-3 mx-auto text-body-emphasis justify-content-center">
              <span style={{ maxWidth: "3rem", marginLeft: "-0.3rem" }}>
                <Logo />
              </span>
              <p className="my-auto">phillip-db</p>
            </div>
            <p className="text-muted text-start text-center">
              Built with{" "}
              <a
                className="footer-link text-body-emphasis"
                href="https://react.dev/"
                target="_blank"
              >
                React
              </a>
              ,{" "}
              <a
                className="footer-link text-body-emphasis"
                href="https://vitejs.dev/"
                target="_blank"
              >
                Vite
              </a>
              , and{" "}
              <a
                className="footer-link text-body-emphasis"
                href="https://react-bootstrap.netlify.app/"
                target="_blank"
              >
                React Bootstrap
              </a>
              .
            </p>
          </Col>
          <Col className="mt-1">
            <h5>Links</h5>
            <ul className="footer-link-list list-unstyled">
              <li className="mb-2">
                <Link className="footer-link text-muted" to="/">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link text-muted" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="mt-1">
            <h5>Projects</h5>
            <ul className="footer-link-list list-unstyled">
              {projects.map((proj) => (
                <li className="mb-2" key={proj.id}>
                  <Link
                    className="footer-link text-muted"
                    to={proj.src}
                    target="_blank"
                  >
                    {proj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <p className="mt-2">
          Copyright <i className="bi bi-c-circle"></i> {currentYear} phillip-db
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
