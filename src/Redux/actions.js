import axios from "axios";

export const GET_REPOS = "GET_REPOS";
export const ERROR_MSG = "ERROR_MSG";
export const LOADER = "LOADER";

export const getRepos = (name) => (dispatch) => {
  
    dispatch(loader(true))
    
    axios
    .get(
      `https://api.github.com/search/repositories?q=${
        name || "subject"
      }&per_page=10`,
    )
    .then((data) => {
      dispatch(loader(false))
      const repo = data.data.items;
      dispatch(getReposToState(repo));
    })
    .catch(() => {
      dispatch(errorMsg("Sorry cannot find repository"));
    });
  
  
};
export const getReposToState = (repos) => {
  return {
    type: GET_REPOS,
    payload: repos,
  };
};
export const errorMsg = (err) => {
  return {
    type: ERROR_MSG,
    payload: err,
  };
};

export const loader = (bool) => {
  return {
    type: LOADER,
    payload: bool,
  };
};