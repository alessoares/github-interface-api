import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {

  const { githubState, getUser, getUserRepos, getUserReposStarred } = useContext(GithubContext);

  return { githubState, getUser, getUserRepos, getUserReposStarred };

};

export default useGithub;