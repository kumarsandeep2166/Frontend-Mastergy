import React from 'react'
import './css/style.css'
import './fonts/material-icon/css/material-design-iconic-font.min.css'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'

function Login()
{
	return(
		<div>
		<div class="container-fluid singup-nav fixed-top">
			<h2>Logo</h2>
		</div>
		<div class="mypage-singup">
		 	<div class="main">
		        <section class="sign-up">
		            <div class="container1">
		                <div class="signin-content">
		                    <div class="signin-image">
		                        <figure><img src={require('./images/signin-image.jpg')} alt="sing up image"/></figure>
		                        <a href="#" class="signup-image-link">Create an account</a>
		                    </div>

		                    <div class="signin-form">
		                        <h2 class="form-title">Login</h2>
		                        <div class="register-form" id="login-form">
		                            <div class="form-group">
		                                <label for="your_email"><i class="zmdi zmdi-email"></i></label>
		                                <input type="email" name="your_email" id="your_name" placeholder="Your Email"/>
		                            </div>
		                            <div class="form-group">
		                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
		                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
		                            </div>
		                            <div class="form-group">
		                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
		                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
		                            </div>
		                            <div class="form-group form-button">
		                                <Link to="/organizationprofile" class="btn submit-btn">Log in</Link>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
		    </div>
		</div>
		</div>
	)
}

export default Login