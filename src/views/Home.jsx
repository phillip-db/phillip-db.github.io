import Jumbotron from "../components/Jumbotron";
import { Stack, Image, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack gap={3} style={{ maxWidth: "75%" }}>
      <Jumbotron />
      <Container>
        <Row className="d-flex flex-wrap mx-2">
          <Col md={12} lg={8} className="text-start">
            <p>
              Software developer and UIUC graduate based in the Chicago area
              with a passion for problem solving.
            </p>
            <p>
              I currently work in Chicago for RedMane Technology as a Cúram
              developer, helping create solutions for social program management.
              Previously I worked at Shade Inc. and developed scripts for
              previewing 3D assets (see my <Link to="/projects">Projects</Link>
              ).
            </p>
            <p>
              Casual pianist and long-time music enjoyer, aspiring game
              developer, and novice fitness enthusiast.
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
