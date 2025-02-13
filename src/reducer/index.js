import { combineReducers } from "redux";
import newTheme from "./newTheme";
import { reducer } from "redux-form";
import history from "../history";

const searchWord = (state = "", action) => {
  const initState = history.location.state?.info.searchKey || state;
  switch (action.type) {
    case "SEARCH_WORD":
      return action.payload;
    default:
      return initState;
  }
};

export default combineReducers({
  newTheme,
  form: reducer,
  searchWord,
});
