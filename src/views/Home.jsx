import Jumbotron from "../components/Jumbotron";
import ProjectCard from "../components/ProjectCard";
import { Row, Stack, Container } from "react-bootstrap";

import projectsJSON from "../assets/text/projects.json";

const Home = () => {
  const projects = [...projectsJSON];
  return (
    <Stack gap={3}>
      <Jumbotron />
      <Container>
        <Row xs={1} sm={2} md={4} className="justify-content-center">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </Row>
      </Container>
    </Stack>
  );
};

export default Home;
