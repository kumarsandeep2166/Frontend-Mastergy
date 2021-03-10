import React, { useState, useReducer } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import Popup from "../signup/Popup";

const reducer = function (state, action) {
  const { payload } = action;
  switch (action.type) {
    case "otp_sent": {
      return {
        ...state,
        otpSent: true,
        otpBackend: payload,
        loading: false,
      };
    }
    case "field": {
      return {
        ...state,
        [payload.name]: payload.value,
      };
    }
    case "otp_validated": {
      return {
        ...state,
        optValidated: true,
      };
    }
    case "toggle_loading": {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    case "user_role": {
      return {
        ...state,
        user_role: payload,
      };
    }
    default: {
      return state;
    }
  }
};
const PasswordReset = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    otpSent: false,
    otp: "",
    optValidated: false,
    password: "",
    passwordAgain: "",
    loading: false,
    user_role: 1,
    otpBackend: "",
  });
  const sendOtp = async (user_role) => {
    try {
      dispatch({ type: "toggle_loading" });
      const res = await axios.post("/pilot/accounts/forgotpassword", {
        email: state.email,
        user_role: user_role,
      });
      console.log(res.data);
      dispatch({
        type: "otp_sent",
        payload: res.data.data.otp,
      });
    } catch (err) {
      dispatch({ type: "toggle_loading" });
      console.log(err);
      alert(err.response.data.error.message);
    }
  };
  const handleUserRole = (user_role) => {
    dispatch({ type: "user_role", payload: parseInt(user_role) });
    setShow(false);
    sendOtp(user_role);
  };
  const optValidated = () => {
    if (state.otp !== state.otpBackend) {
      return alert("Incorrect Otp");
    }
    dispatch({
      type: "otp_validated",
    });
  };
  const resetPassword = async () => {
    try {
      dispatch({ type: "toggle_loading" });

      const res = await axios.post("/pilot/accounts/resetpassword", {
        email: state.email,
        password: state.password,
        confirm_password: state.passwordAgain,
      });
      console.log(res.data);
      alert("Password Successfully reset, login to continue");
      history.push("/login");
    } catch (err) {
      dispatch({ type: "toggle_loading" });
      console.log(err);
      alert(err.response.data.error.message);
    }
  };
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && (
        <Popup changeUserType={handleUserRole} onClose={() => setShow(false)} />
      )}
      {state.loading && <Loader />}
      <div class="container-fluid singup-nav fixed-top">
        <h2>Logo</h2>
      </div>
      <div class="mypage-singup">
        <div class="main">
          <section class="sign-up">
            <div class="container1">
              <div class="signin-content">
                {/* <div class="signin-image">
                    <figure>
                      <img
                        src={require("./images/signin-image.jpg")}
                        alt="sing up image"
                      />
                    </figure>
                    <a href="#" class="signup-image-link">
                      Create an account
                    </a>
                  </div> */}

                <div class="signin-form" style={{ width: "100%" }}>
                  <h2 class="form-title">Reset Password</h2>
                  <div class="register-form" id="login-form">
                    <div class="form-group">
                      <label for="your_email">
                        <i class="zmdi zmdi-email"></i>
                      </label>
                      <input
                        type="email"
                        value={state.email}
                        name="email"
                        onChange={(e) =>
                          dispatch({
                            type: "field",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                        id="your_name"
                        placeholder="Your Email"
                      />
                    </div>
                    {state.otpSent && (
                      <div class="form-group">
                        <label for="otp">
                          <i class="zmdi zmdi-lock"></i>
                        </label>
                        <input
                          type="text"
                          name="otp"
                          value={state.otp}
                          onChange={(e) =>
                            dispatch({
                              type: "field",
                              payload: {
                                name: e.target.name,
                                value: e.target.value,
                              },
                            })
                          }
                          id="otp"
                          placeholder="Enter the otp"
                        />
                      </div>
                    )}
                    {state.optValidated && (
                      <>
                        <div class="form-group">
                          <label for="password">
                            <i class="zmdi zmdi-lock"></i>
                          </label>
                          <input
                            type="password"
                            name="password"
                            value={state.password}
                            onChange={(e) =>
                              dispatch({
                                type: "field",
                                payload: {
                                  name: e.target.name,
                                  value: e.target.value,
                                },
                              })
                            }
                            id="password"
                            placeholder="Enter new Password"
                          />
                        </div>
                        <div class="form-group">
                          <label for="passwordAgain">
                            <i class="zmdi zmdi-lock"></i>
                          </label>
                          <input
                            type="password"
                            name="passwordAgain"
                            value={state.passwordAgain}
                            onChange={(e) =>
                              dispatch({
                                type: "field",
                                payload: {
                                  name: e.target.name,
                                  value: e.target.value,
                                },
                              })
                            }
                            id="passwordAgain"
                            placeholder="Confirm new Password"
                          />
                        </div>
                      </>
                    )}
                    {/* <div class="form-group form-button">
                      <button
                        onClick={() => console.log("clicked")}
                        to="/organizationprofile"
                        class="btn submit-btn"
                      >
                        Log in
                      </button>
                    </div> */}
                    {!state.otpSent && (
                      <div class="form-group form-button">
                        <button
                          onClick={() => setShow(true)}
                          class="btn submit-btn"
                        >
                          Sent Otp
                        </button>
                      </div>
                    )}
                    {state.otpSent && state.otp !== "" && !state.optValidated && (
                      <div class="form-group form-button">
                        <button onClick={optValidated} class="btn submit-btn">
                          Validate Otp
                        </button>
                      </div>
                    )}
                    {state.optValidated &&
                      state.password !== "" &&
                      state.passwordAgain !== "" && (
                        <div class="form-group form-button">
                          <button
                            onClick={resetPassword}
                            class="btn submit-btn"
                          >
                            Reset Password
                          </button>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
