import { useState, useEffect, createContext } from "react";
import projectsJSON from "../assets/text/projects.json";
import gitInfoJSON from "../assets/text/github_projects_info.json";
import { getProjectLanguage, getProjects } from "../services/projectService";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([...projectsJSON]);
  const gitProjects = gitInfoJSON.map((project) => project.title);
  const gitInfo = [...gitInfoJSON];

  useEffect(() => {
    getProjects()
      .then((result) => {
        return [
          ...projectsJSON,
          ...result.data.filter((project) =>
            gitProjects.includes(project.name)
          ),
        ];
      })
      .then(
        async (projects) =>
          await Promise.all(
            projects.map(async (project) => {
              if (!gitProjects.includes(project.name)) return project;
              return {
                id: project.id,
                title: project.full_name,
                description:
                  gitInfo.find((proj) => proj.title === project.name)
                    .description ||
                  project.description ||
                  "No Description",
                img: gitInfo.find((proj) => proj.title === project.name).img,
                projLanguage:
                  (await getProjectLanguage(project.full_name)) ||
                  "Unspecified",
                src:
                  gitInfo.find((proj) => proj.title === project.name).src ||
                  project.html_url,
              };
            })
          )
      )
      .then((projects) => setProjects(projects));
  }, []);

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };
