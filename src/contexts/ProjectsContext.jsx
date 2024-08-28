import { useState, useEffect, createContext } from "react";
import projectsJSON from "../assets/text/projects.json";
import gitProjectsJSON from "../assets/text/github_projects_list.json";
import gitInfoJSON from "../assets/text/github_projects_info.json";
import { getProjects } from "../services/projectService";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([...projectsJSON]);
  const gitProjects = [...gitProjectsJSON];
  const gitInfo = [...gitInfoJSON];

  useEffect(() => {
    getProjects().then((result) => {
      setProjects([
        ...projectsJSON,
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
              img: gitInfo.find((proj) => proj.title === project.name).img,
              src:
                gitInfo.find((proj) => proj.title === project.name).src ||
                project.html_url,
            };
          }),
      ]);
    });
  }, []);

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };
