import axios from "axios";
import { 
  ADD_USER,
  GET_USERS, 
  DEL_USER, 
  GET_ARTICLE, 
  DEL_ARTICLE, 
  GET_ORGANIZATION, 
  DEL_ORGANIZATION,
  GET_EVENT,
  DEL_EVENT,
  GET_USER_TOTAL,
  GET_ARTICLE_TOTAL,
  GET_EVENT_TOTAL,
  GET_ORGANIZATION_TOTAL,
  GET_SKILLSET,
  DEL_SKILLSET,
  SIGN_IN_ADMIN } from './type'
import history from '../../history'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  position: "top-center"}
)


const url = "https://relaonebinar.herokuapp.com"

export const signInAdmin = (username, password) => {
  return dispatch => {
      axios ({
          url: `${url}/api/admin/login`,
          method: 'post',
          data: {
              username,
              password
          }
      })
          .then(res => {
              dispatch({
              type: SIGN_IN_ADMIN,
              token: res.data.token,
              role: res.data.data.role
              });
              let message = res.data.message
              toast.success(message)
              history.push('/admin')
              console.log(res);
            }
          )
          .catch(err => {
              console.log(err)
              toast.error("Error. Please check your input.")
          })
  }
}

export const getUsers = () => {
  return dispatch => {
    axios({
      method: "get",
      url:`${url}/api/admin/member/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_USERS,
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const getUserTotal = () => {
  return dispatch => {
    axios({
      method: "get",
      url:`${url}/api/admin/member/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_USER_TOTAL,
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const delUser = (id) => {
  return dispatch => {
    axios({
      method: "delete",
      url: `${url}/api/admin/member/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"},
      data: {
        id
    }
    })
    .then(res => {
      console.log(res)
      dispatch ({
          type: DEL_USER,
          id
      })
  })
  .catch(err => console.log(err))
  };
};

export const getArticle = () => {
  return dispatch => {
    axios({
      method: "get",
      url:`${url}/api/admin/article`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_ARTICLE,
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const delArticle = (id) => {
  return dispatch => {
    axios({
      method: "delete",
      url: `${url}/api/admin/article/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"},
      data: {
        id
    }
    })
    .then(res => {
      console.log(res)
      dispatch ({
          type: DEL_ARTICLE,
          id
      })
  })
  .catch(err => console.log(err))
  };
};

export const getOrganization = () => {
  return dispatch => {
    axios({
      method: "get",
      url:`${url}/api/admin/organization/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_ORGANIZATION,
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};
export const getOrganizationTotal = () => {
  return dispatch => {
    axios({
      method: "get",
      url:`${url}/api/admin/organization/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_ORGANIZATION_TOTAL,
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const delOrganization = (id) => {
  return dispatch => {
    axios({
      method: "delete",
      url: `${url}/api/admin/organization/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"},
      data: {
        id
    }
    })
    .then(res => {
      console.log(res)
      dispatch ({
          type: DEL_ORGANIZATION,
          id
      })
  })
  .catch(err => console.log(err))
  };
};

export const getEvent = () => {
  return dispatch => {
    axios({
      method: "get",
      url:`${url}/api/admin/event/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_EVENT,
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const getEventTotal = () => {
  return dispatch => {
    axios({
      method: "get",
      url:`${url}/api/admin/event/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_EVENT_TOTAL,
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const delEvent = (id) => {
  return dispatch => {
    axios({
      method: "delete",
      url: `${url}/api/admin/event/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"},
      data: {
        id
    }
    })
    .then(res => {
      console.log(res)
      dispatch ({
          type: DEL_EVENT,
          id
      })
  })
  .catch(err => console.log(err))
  };
};

export const getArticleTotal = () => {
  return dispatch => {
    axios({
      method: "get",
      url:`${url}/api/admin/article/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_ARTICLE_TOTAL,
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const getSkillSet = () => {
  return dispatch => {
    axios({
      method: "get",
      url:`${url}/api/admin/skillset/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"}
        })
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_SKILLSET,
          payload: res.data.data
        });
      })
      .catch(err => console.log(err.response));
  };
};

export const delSkillSet = (id) => {
  return dispatch => {
    axios({
      method: "delete",
      url: `${url}/api/admin/skillset/`,
      headers: { "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWM0Y2IxNzg5YWNlMDAxNzEyZjgzZiIsInVzZXJuYW1lIjoiYWRtaW5rdSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU1NDc5NTc1N30.KJwVq7ZV3pDYe723nY9S5fqT8GQM4SAlWPvJ4EcpDTM"},
      data: {
        id
    }
    })
    .then(res => {
      console.log(res)
      dispatch ({
          type: DEL_SKILLSET,
          id
      })
  })
  .catch(err => console.log(err))
  };
};

export const addUser = (fullname, username, password, email) => {
  return dispatch => {
      axios ({
          url: `${url}/api/admin/member`,
          method: 'post',
          headers: {
              'x-access-token': localStorage.getItem('token')
          },
          data: {
              fullname,
              username,
              password,
              email
          }
      })
          .then(res => {
              dispatch({
              type: ADD_USER,
              payload: res.data.data
              });
              toast.success("Your event is successfully created")
              history.push('/users/');
            }
          )
          .catch(err => {
              console.log(err)
              toast.error("Error. Please check your input.")
          })
  }
}