const newTheme = (state = [], action) => {
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
