import React from "react";
import OrganizationProfile from "./components/organization_profile/organization_profile";
import SignUp from "./components/signup/signup";
import Login from "./components/signup/login";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import UserProfile from "./components/user_profile/user_profile";
import PrivateRoute from "./components/Routing/PrivateRoute";
import emailError from "./components/EmailNotVerified/emailError";
import VerifyOtp from "./components/VerifyOtp/VerifyOtp";
import PasswordReset from "./components/PasswordReset/PasswordReset";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/userprofile" exact component={UserProfile} />
        <Route exact path="/emailnotverified" component={emailError} />
        {/* <Route exact path="/userprofile" component={UserProfile} /> */}
        <Route
          exact
          path="/organizationprofile"
          component={OrganizationProfile}
        />
        <Route exact path="/forgotpassword" component={PasswordReset} />
        <Route exact path="/verify/accounts/verify_otp" component={VerifyOtp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
