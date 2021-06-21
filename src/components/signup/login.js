import React, { useEffect, useState } from "react";
import "./css/style.css";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
import { userLoginIn } from "../../State/Actions/user";
import "./fonts/material-icon/css/material-design-iconic-font.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function Login({ isAuthenticated, user_role, loading, userLoginIn, history }) {
  useEffect(() => {
    if (isAuthenticated) {
      if (user_role === 1) {
        history.push("/userprofile");
      } else {
        history.push("/organizationprofile");
      }
    }
  });
  const [data, setData] = useState({
    email: "",
    password: "",
    rememberUser: false,
  });
  const handleInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = () => {
    userLoginIn(data);
  };
  return (
    <div>
      {loading && <Loader />}
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
                  <h2 class="form-title">Login</h2>
                  <div class="register-form" id="login-form">
                    <div class="form-group">
                      <label for="your_email">
                        <i class="zmdi zmdi-email"></i>
                      </label>
                      <input
                        type="email"
                        value={data.email}
                        name="email"
                        onChange={handleInput}
                        id="your_name"
                        placeholder="Your Email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="your_pass">
                        <i class="zmdi zmdi-lock"></i>
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleInput}
                        id="your_pass"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="checkbox"
                        name="rememberUser"
                        id="remember-me"
                        class="agree-term"
                        value={data.rememberUser}
                        onChange={(e) =>
                          setData({ ...data, rememberUser: e.target.checked })
                        }
                      />
                      <label for="remember-me" class="label-agree-term">
                        <span>
                          <span></span>
                        </span>
                        Remember me
                      </label>
                    </div>

                    <div className="forgot-password">
                      <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>

                    <div class="form-group form-button">
                      <button
                        onClick={onSubmit}
                        to="/organizationprofile"
                        class="btn submit-btn"
                      >
                        Log in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user_role: state.user.user_role,
  loading: state.loading,
});

export default connect(mapStateToProps, { userLoginIn })(Login);
