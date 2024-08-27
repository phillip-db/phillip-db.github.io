import projectsJSON from "../assets/text/projects.json";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [...projectsJSON];
  return (
    <Container>
      <Row xs={1} sm={2} md={4} className="justify-content-center">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
