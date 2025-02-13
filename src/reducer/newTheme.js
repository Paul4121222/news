const newTheme = (state = [], action) => {
  switch (action.type) {
    case "SPORTS":
      return action.payload;
    case "SEARCH":
      return action.payload;
    case "MAIN":
      return action.payload;
    default:
      return state;
  }
};
export default newTheme;
