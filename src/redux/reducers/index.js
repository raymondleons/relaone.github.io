import { combineReducers } from "redux";
import user from "./user";
import authReducer from "./authReducer";
import article from "./article";
import organization from "./organization"
import event from "./event"
import skillset from "./skillset"


export default combineReducers({
  user: user,
  auth: authReducer,
  article: article,
  organization: organization,
  event: event,
  skillset: skillset
});
