import { GET_REPOS, ERROR_MSG } from "./actions";

const initialData = {
  loader: false,
  errorMsg: "",
  repos: [],
};

const repoReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, repos: action.payload, errorMsg: "" };
    case ERROR_MSG:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};
export default repoReducer;
