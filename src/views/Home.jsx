import Jumbotron from "../components/Jumbotron";
import { Stack, Image, Container, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Stack gap={3} style={{ maxWidth: "75%" }}>
      <Jumbotron />
      <Container>
        <Row className="d-flex flex-wrap mx-2">
          <Col md={12} lg={8} className="text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              cursus lorem eget lectus ullamcorper scelerisque. Curabitur
              sollicitudin sollicitudin mi, vel ullamcorper felis.
            </p>
            <p>
              Aenean cursus tempor pretium. Praesent vitae viverra mauris. Donec
              metus est, interdum in leo et, accumsan vehicula lectus.
            </p>
            <p>
              Pellentesque pulvinar vel magna eget commodo. Pellentesque eu
              dictum ex, in gravida mi.
            </p>
          </Col>
          <Col md={6} lg={4} className="mx-md-auto">
            <Image
              className="mx-auto pb-rotate my-3"
              rounded
              loading="lazy"
              src="images/headshot.jpg"
              width={250}
              height={250}
            />
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default Home;
