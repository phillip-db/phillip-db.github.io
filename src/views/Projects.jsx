import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { ProjectsContext } from "../contexts/ProjectsContext";
import { useContext } from "react";

const Projects = () => {
  const projects = useContext(ProjectsContext);

  return (
    <Container>
      <Row xs={1} sm={1} md={2} lg={2} xl={3} className="px-auto">
        {projects.map((proj) => (
          <Col key={proj.id} className="my-3">
            <ProjectCard project={proj} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
