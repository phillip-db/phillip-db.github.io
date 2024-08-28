import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_PAT,
});

const getMatchingProjects = () =>
  octokit.request("GET /repos/{owner}/{repo}", {
    owner: "phillip-db",
    repo: "MyLeague",
  });

const getProjects = () =>
  octokit.request("GET /users/{username}/repos", {
    username: "phillip-db",
  });

export { getMatchingProjects, getProjects };
