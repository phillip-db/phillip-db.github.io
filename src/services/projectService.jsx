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

export { getProjects, getRepoLanguages };
