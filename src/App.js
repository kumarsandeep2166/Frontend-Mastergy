<<<<<<< HEAD
import React from 'react'
import OrganizationProfile from './components/organization_profile/organization_profile'
import SignUp from './components/signup/signup'
import Login from './components/signup/login'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import UserProfile from './components/user_profile/user_profile'
import Reset from './components/signup/reset'
import Networkpage from './components/network_page/network_page'
import feedPage from './components/feed_page/feed_page'
import landingPage from './components/landing_page/landing_page'
import Reset1 from './components/signup/reset1'
import Reset2 from './components/signup/reset2'
function App()
{
  return(
  	<div className="app">
  		<BrowserRouter>
		  	<Route exact path="/reset2" component={Reset2}/>
		  	<Route exact path="/reset1" component={Reset1}/>
		  	<Route exact path="/reset" component={Reset}/>
		  	<Route exact path="/feedpage" component={feedPage}/>
			<Route exact path="/landingpage" component={landingPage}/>
		  	<Route exact path="/networkpage" component={Networkpage}/>
  			<Route exact path="/signup" component={SignUp}/>
			<Route exact path="/login" component={Login}/>
  			<Route exact path="/userprofile" component={UserProfile}/>
			<Route exact path="/organizationprofile" component={OrganizationProfile}/>
  		</BrowserRouter>
  	</div>
  )
}

export default App
=======
import React from "react";
import OrganizationProfile from "./components/organization_profile/organization_profile";
import SignUp from "./components/signup/signup";
import Login from "./components/signup/login";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import UserProfile from "./components/user_profile/user_profile";
import emailError from "./components/EmailNotVerified/emailError";
import PrivateRoute from "./components/Routing/PrivateRoute";
import VerifyOtp from "./components/VerifyOtp/VerifyOtp";
import PasswordReset from "./components/PasswordReset/PasswordReset";

import Networkpage from "./components/network_page/network_page";
import feedPage from "./components/feed_page/feed_page";
import landingPage from "./components/landing_page/landing_page";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/" component={landingPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/userprofile" exact component={UserProfile} />
        <Route exact path="/emailnotverified" component={emailError} />
        {/* <Route exact path="/userprofile" component={UserProfile} /> */}
        <PrivateRoute
          exact
          path="/organizationprofile"
          component={OrganizationProfile}
        />
        <Route exact path="/forgotpassword" component={PasswordReset} />
        <Route exact path="/verify/accounts/verify_otp" component={VerifyOtp} />
        <Route exact path="/feedpage" component={feedPage} />
        <Route exact path="/landingpage" component={landingPage} />
        <Route exact path="/networkpage" component={Networkpage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
>>>>>>> 0af7ab246a2940bf5876b5a1b3de97c69d2d3b09
