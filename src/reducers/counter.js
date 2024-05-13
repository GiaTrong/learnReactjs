const counterReducer = (state = 0, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "RESET":
      return 0;
    default:
      //   throw "action invalid";
      return state;
  }
};

export default counterReducer;
