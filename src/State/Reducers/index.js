import { combineReducers } from "redux";
import user from "./user";
import auth from "./auth";
import profile from "./profile";

const loading = (state = false, action) => {
  switch (action.type) {
    case "SET_LOADING_FALSE": {
      return false;
    }
    case "SET_LOADING_TRUE": {
      return true;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  user,
  loading,
  auth,
  profile,
});
