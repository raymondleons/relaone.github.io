const initState = {
    
  };
  const adminReducer = (state = initState, action) => {
    switch (action.type) {
      case "DELETE_CLASS":
        return {
          ...state,
          classes: [...state.classes.filter(item => item.id !== action.id)]
        };
      case "LOG_OUT":
        return {
          ...state,
          isAdmin: false
        };
      case "FETCH_CLASS":
        return state.classes;
      default:
        return state;
    }
  };
  
  export default adminReducer;
  