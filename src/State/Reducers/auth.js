const initialState = {
  isAuthenticated: false,
  rememberUser: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return { ...state, isAuthenticated: true };
    }
    case "REMEMBER_ME": {
      return { ...state, rememberUser: true };
    }
    case "ONE_TIME": {
      return { ...state, rememberUser: false };
    }
    case "LOGOUT": {
      return { isAuthenticated: false, rememberUser: false };
    }
    default: {
      return state;
    }
  }
};

export default auth;
