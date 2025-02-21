import { combineReducers } from "redux";
import newTheme from "./newTheme";
import { reducer } from "redux-form";
import searchWord from "./searchWord";


const rootState = combineReducers({
  newTheme,
  form: reducer,
  searchWord,
});

//由TS自動根據reducer推斷其state型別
export type TRootState = ReturnType<typeof rootState>
export default rootState