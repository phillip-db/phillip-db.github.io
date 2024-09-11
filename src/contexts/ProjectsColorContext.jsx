import { useState, useEffect, createContext } from "react";

const ProjectsColorContext = createContext();

const ProjectsColorProvider = ({ children }) => {
  const [colors, setColors] = useState();

  const urlColors =
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";

  useEffect(() => {
    fetch(urlColors)
      .then((response) => response.json())
      .then((data) => {
        setColors(data);
      });
  }, []);

  return (
    <ProjectsColorContext.Provider value={colors}>
      {children}
    </ProjectsColorContext.Provider>
  );
};

export { ProjectsColorContext, ProjectsColorProvider };
