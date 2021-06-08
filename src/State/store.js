import { applyMiddleware, createStore } from "redux";
import reducers from "./Reducers";
import throttle from "lodash.throttle";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import setAuthToken from "../helpers/setAuthToken";

const saveState = (state) => {
  console.log(state);
  try {
    if (state.user && state.auth && state.auth.rememberUser) {
      const serializedState = JSON.stringify({
        user: state.user,
        auth: state.auth,
      });
      setAuthToken(state.user.auth_token.key);
      localStorage.setItem("state", serializedState);
    }
  } catch (err) {
    // ignore write errors
    console.log(err);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const middleware = [thunk];

const persistedState = loadState();
console.log("persisted", persistedState);

const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

console.log("store: ", store.getState());

// store.dispatch({
//   type: "SET_LOADING_FALSE",
// });

export default store;
