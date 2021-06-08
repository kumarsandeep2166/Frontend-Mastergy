import setAuthToken from "../../helpers/setAuthToken";

const user = (state = { isAuthenticated: false }, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "USER_LOGIN": {
      setAuthToken(payload.auth_token.key);
      return { ...payload };
    }
    case "OTP_VERIFIED": {
      return {
        ...state,
        is_email_verified: true,
      };
    }
    case "LOGOUT": {
      setAuthToken(false);
      return {};
    }
    default: {
      return state;
    }
  }
};

export default user;
