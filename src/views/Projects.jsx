import { Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { ProjectsContext } from "../contexts/ProjectsContext";
import { useContext } from "react";

const Projects = () => {
  const projects = useContext(ProjectsContext);

  return (
    <Container>
      <Row xs={1} sm={2} md={4} className="justify-content-left mx-auto">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
