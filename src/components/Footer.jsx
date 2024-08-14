import { Container, Row, Col } from "react-bootstrap";
import Logo from "./svgs/logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pdb-footer mt-sm-3 py-4 bg-body-tertiary text-center">
      <Container>
        <Row>
          <Col>
            <div
              className="pb-3 mx-auto text-body-emphasis"
              style={{ maxWidth: "5rem" }}
            >
              <Logo />
            </div>
            <h4>
              Copyright <i className="bi bi-c-circle"></i> phillip-db{" "}
              {currentYear}
            </h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
