//src/reducer.js
const reducer = (state = 15, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RANDOM":
      return state + action.payload;
    default:
      return state;
  }
  return 0;
};

export default reducer;
