import Jumbotron from "../components/Jumbotron";
import InfoCard from "../components/InfoCard";
import { Row, Stack, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Stack gap={3}>
      <Jumbotron />
      <Container>
        <Row xs={1} sm={2} md={4} className="justify-content-center">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </Row>
      </Container>
    </Stack>
  );
};

export default Home;
