const initState = {
    user: {
      role: ""
    },
    role: ""
  };
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case "SIGN_IN":
        console.log(action.response);
        localStorage.setItem("token", action.response.data.token);
        localStorage.setItem("role", action.response.data.role);
        return {
          ...state,
          role: localStorage.getItem("role")
        };
      case "SIGN_UP":
        return state;
      case "SIGN_OUT":
        localStorage.removeItem("token");
        localStorage.removeItem("role");
  
        return {
          ...state,
          role: ""
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  