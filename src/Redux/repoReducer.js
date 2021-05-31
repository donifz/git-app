import { GET_REPOS, ERROR_MSG, LOADER } from "./actions";

const initialData = {
  loader: false,
  errorMsg: "",
  repos: [],
};

const repoReducer = (state = initialData, action) => {
  switch (action.type) {
    case LOADER:
      return {...state, loader:action.payload}
    case GET_REPOS:
      return { ...state, repos: action.payload, errorMsg: ""};
    case ERROR_MSG:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};
export default repoReducer;
