import { combineReducers } from "redux";
import newTheme from "./newTheme";
import { reducer } from "redux-form";
import searchWord from "./searchWord";

export default combineReducers({
  newTheme,
  form: reducer,
  searchWord,
});
