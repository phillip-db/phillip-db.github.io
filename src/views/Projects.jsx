import projectsJSON from "../assets/text/projects.json";
import gitProjectsJSON from "../assets/text/github_projects_list.json";
import gitInfoJSON from "../assets/text/github_projects_info.json";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

const Projects = () => {
  const [projects, setProjects] = useState([...projectsJSON]);
  const gitProjects = [...gitProjectsJSON];
  const gitInfo = [...gitInfoJSON];

  useEffect(() => {
    getProjects().then((result) => {
      setProjects([
        ...projects,
        ...result.data
          .filter((project) => gitProjects.includes(project.name))
          .map((project) => {
            return {
              id: project.id,
              title: project.full_name,
              description:
                gitInfo.find((proj) => proj.title === project.name)
                  .description ||
                project.description ||
                "No Description",
              src:
                gitInfo.find((proj) => proj.title === project.name).src ||
                project.html_url,
            };
          }),
      ]);
    });
  }, []);

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
