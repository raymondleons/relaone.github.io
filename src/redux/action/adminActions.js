import axios from "axios";
export const signIn = (username, password) => {
  return dispatch => {
    axios
      .post("https://relaonebinar.herokuapp.com/api/admin/login", {
        username: username,
        password: password
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: "SIGN_IN",
          username,
          password,
          response: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

export const signUp = (name, username, email, password) => {
  return {
    type: "SIGN_UP",
    name,
    username,
    email,
    password
  };
};

export const delClass = id => {
  return {
    type: "DELETE_CLASS",
    id
  };
};
