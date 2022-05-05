import React, { useState, createContext, useCallback } from 'react'
import api from '../services/api';
import avatar from '../assets/img/git.png';

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
})

const GithubProvider = ({children}) => {

  const [ githubState, setGithubState ] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      login: undefined,
      name: undefined,
      avatar_url: avatar,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

/** Função para buscar o usuário com suas informações */

const getUser = (username) => {
  setGithubState((prevState) => ({
    ...prevState,
    loading: !prevState.loading,
  }));

  api
  .get(`users/${username}`).then(({ data }) => {
    setGithubState((prevState) => ({
    ...prevState,
    hasUser: true,
    user: {
      id: data.login,
      login: data.login,
      name: data.name,
      avatar_url: data.avatar_url,
      html_url: data.html_url,
      blog: data.blog,
      company: data.company,
      location: data.location,
      followers: data.followers,
      following: data.following,
      public_gists: data.public_gists,
      public_repos: data.public_repos,
    },
    }));
  })
  .catch((error) => {
    if( error.response.status  === 404){
    alert(`Usuário ${username} não encontrado!`);
    }
  })
  .finally(() => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));
  });
};

/** Função para buscar os repositórios */

const getUserRepos = (username) => {
  api.get(`users/${username}/repos`).then(({ data }) => {
    setGithubState((prevState) => ({
    ...prevState,
    repositories: data,
    }));
  })
};

const getUserReposStarred = (username) => {
  api.get(`users/${username}/starred`).then(({ data }) => {
    setGithubState((prevState) => ({
    ...prevState,
    starred: data,
    }));
  })
};


  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserReposStarred: useCallback((username) => getUserReposStarred(username), []),
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
};

export default GithubProvider;