import axios from "axios";
import { stopLoading, setLoading } from "./loading";

export const userSignUp = (user, history) => {
  return async (dispatch) => {
    console.log("action", user);
    try {
      setLoading(dispatch);
      console.log("Set Loading to true");
      const res = await axios.post("/pilot/accounts/signup", {
        name: user.username,
        email: user.useremail,
        password: user.password,
        phone_number: user.userphone,
        user_role: user.user_role,
      });
      console.log("Data fetching done");
      dispatch({
        type: "USER_LOGIN",
        payload: { ...res.data.data },
      });
      dispatch({
        type: "REMEMBER_ME",
      });
      stopLoading(dispatch);
      alert("Account Successfully created!! Redirecting to your profile");
    } catch (err) {
      stopLoading(dispatch);
      alert(err.response.data.error.message);
    }
  };
};

export const userLoginIn = ({ email, password, rememberUser }) => async (
  dispatch
) => {
  setLoading(dispatch);
  try {
    const res = await axios.post("/pilot/accounts/login", {
      email,
      password,
    });
    if (rememberUser) {
      dispatch({
        type: "REMEMBER_ME",
      });
    } else {
      dispatch({
        type: "ONE_TIME",
      });
    }
    console.log(res.data);
    dispatch({
      type: "USER_LOGIN",
      payload: { ...res.data.data },
    });
    stopLoading(dispatch);
  } catch (err) {
    console.log(err);
    stopLoading(dispatch);
    alert(err.response.data.error.message);
  }
};

export const refreshUserState = () => async (dispatch) => {
  try {
    setLoading(dispatch);
    const res = await axios.get("/pilot/accounts/myprofile");
    dispatch({
      type: "USER_LOGIN",
      payload: { ...res.data },
    });
    stopLoading(dispatch);
  } catch (err) {
    stopLoading(dispatch);
    console.log(err);
    alert(err.response.data.error.message);
  }
};

export const verifyOtp = (otp) => async (dispatch) => {
  try {
    await axios.put(`/pilot/accounts/verifyotp?url_otp=${otp}`);
    refreshUserState();
    dispatch({
      type: "OTP_VERIFIED",
    });
  } catch (err) {
    console.log(err);
    alert(err.response.data.error.message);
  }
};
