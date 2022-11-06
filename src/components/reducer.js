function reducer(state,action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
        case "set":
          return action.payload;
      default:
      return state
  };
   
}


export default reducer