import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_PAT,
});

const getProjects = () =>
  octokit.request("GET /users/{username}/repos", {
    username: "phillip-db",
  });

const getRepoLanguages = (o, r) =>
  octokit.request("GET /repos/{owner}/{repo}/languages", {
    owner: o,
    repo: r,
  });

const getProjectLanguage = async (title) => {
  return await getRepoLanguages(
    title.substring(0, title.indexOf("/")),
    title.substring(title.indexOf("/") + 1)
  )
    .then(
      (result) =>
        Object.entries(result.data).sort(([, a], [, b]) => b - a)[0][0]
    )
    .catch();
};

export { getProjects, getRepoLanguages, getProjectLanguage };
