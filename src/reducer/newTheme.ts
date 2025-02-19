import {IGetNewsList, ISearchKey, ICleanNewsList, IGetMainPage} from '../action/interface';

type IAction = IGetNewsList | ISearchKey | ICleanNewsList | IGetMainPage;

const newTheme = (state = [], action: IAction) => {
  switch (action.type) {
    case "CATEGORY":
      return action.payload;
    case "SEARCH":
      return action.payload;
    case "MAIN":
      return action.payload;
    case "CLEAN":
      return [];
    default:
      return state;
  }
};

export default newTheme;
