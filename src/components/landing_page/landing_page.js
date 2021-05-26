import React, { useState, useEffect } from "react";
import "./landing_page.css";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Popup from "../signup/Popup";
import { userSignUp } from "../../State/Actions/user";

function Landing_page({ loading, user, isAuthenticated, history, userSignUp }) {
  const [Input, setInput] = useState({
    username: "",
    userphone: "",
    useremail: "",
    password: "",
    re_pass: "",
    user_role: 1,
  });
  const [popupVisible, changePopupVisibility] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      if (user && user.user_role === 1) {
        history.push("/userprofile");
      } else {
        history.push("/organizationprofile");
      }
    }
  }, [user]);
  const handleInput = (event) => {
    setInput({ ...Input, [event.target.name]: event.target.value });
  };
  const handleCheck = (event) => {
    setInput({ ...Input, [event.target.name]: event.target.checked });
  };
  const changeUserType = (user_role) => {
    const user = { ...Input, user_role };
    console.log(user);
    userSignUp(user, history);
  };
  const onSubmit = () => {
    changePopupVisibility(true);
  };
  return (
    <div>
      {loading && <Loader />}
      {popupVisible && (
        <Popup
          changeUserType={changeUserType}
          onClose={() => changePopupVisibility(false)}
        />
      )}
      <div class="landingnavbar d-flex">
        <div class="landinglogo ">
          <img src={require("./images/logo.png")} alt="sdf" />
        </div>
      </div>
      <div class="row align-items-center justify-content-between">
        <div class="landingfirst d-flex align-items-center col-md-7">
          <div class="mx-auto landingfirstcenter  d-block">
            <div class="landingfirstheading">Welcome to the Mastergy</div>
            <div class="landingfirstcontent d-block">
              Expand and build the skills that you can drive forward to make
              yourself educationally strong.
            </div>
            <button class="landingfirstbutton">
              I already have an account
            </button>
          </div>
        </div>
        <div class="landingsecond col-md-5">
          <div class="landingsecondsignup">
            <span class="d-block landingsecondhead">Sign up.</span>
            <span class="d-block landingseconddesc">
              Give us some of your information to get free access to Mastergy
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Your Name"
              name="username"
              value={Input.username}
              onChange={handleInput}
            />
            <input
              type="email"
              placeholder="Your E-mail"
              class="form-control"
              name="useremail"
              value={Input.useremail}
              onChange={handleInput}
            />
            <input
              type="number"
              placeholder="Your Phone number"
              class="form-control"
              name="userphone"
              value={Input.userphone}
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Password"
              class="form-control"
              name="password"
              value={Input.password}
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              class="form-control"
              name="re_pass"
              value={Input.re_pass}
              onChange={handleInput}
            />
            <div class="d-flex">
              <input
                type="checkbox"
                class="checkbox"
                name="checking"
                checked={Input.checking}
                onChange={handleCheck}
              />
              <span class="checkboxtext">
                By creating an account you to the terms of use and our privacy
                policy
              </span>
            </div>
            <button
              onClick={onSubmit}
              style={{ cursor: "pointer" }}
              class="landingsecondbutton mx-auto d-block"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="landingpagethird">
            <img src={require("./images/a.png")} alt="sdf" />
          </div>
        </div>
        <div class=" landingpagefourth d-flex align-items-center col-sm-6">
          <div class="d-block mx-auto fourthtext">
            <div class="">Let people read, share your published article.</div>
            <div class="">
              Take part in events for that suits you to embrace your skills.
            </div>
            <div class="">
              Help people to expand their box of knowledge by learning new
              things
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="landingpagefifth d-flex align-items-center col-sm-5">
          <div class="d-block mx-auto fifthtext">
            <div class="">Grow your skills and expand your network.</div>
            <div class="">
              A strong joint that offers various services and binds various
              users.
            </div>
            <div class="">
              Find education organizations using comparative analysis.
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="landingpagesixth">
            <img src={require("./images/b.png")} alt="sdf" />
          </div>
        </div>
      </div>
      <hr></hr>
      <div class="landingpagefooter d-flex">
        <div>Mastergy @2020</div>
        <div>About</div>
        <div>User Agreement</div>
        <div>Privacy Policy</div>
        <div>Cookie Policy</div>
        <div>Copyright Policy</div>
        <div>Brand Policy</div>
        <div>Guest Controls</div>
        <div>Community Guidelines</div>
        <div>Languages</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.loading,
});

export default connect(mapStateToProps, { userSignUp })(Landing_page);
