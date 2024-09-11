import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { ProjectsContext } from "../contexts/ProjectsContext";
import { useContext } from "react";
import { ProjectsColorContext } from "../contexts/ProjectsColorContext";

const Projects = () => {
  const projects = useContext(ProjectsContext);
  const colors = useContext(ProjectsColorContext);

  return (
    <Container>
      <Row xs={1} sm={1} md={2} lg={2} xl={3} className="px-auto">
        {projects.map((proj) => (
          <Col key={proj.id} className="my-3">
            <ProjectCard project={proj} colors={colors} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
