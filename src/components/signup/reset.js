import React,{useState} from 'react';
import './css/reset.css'
function Reset(props) {
    const [data,setData]=useState({})
    const handleInput=event=>{
		setData({...data,[event.target.name]:event.target.value})
	}
    return (
        <div class="d-flex justify-content-center">
            <div class="reset">
                <div class="d-flex justify-content-center reset-logo">
                    <img src={require('./images/favicon.ico')} alt="sdf"/>
                </div>
                <div>
                    <h1 class="reset-heading-reset text-center font-weight-light">Change password for @sandeepvallabhareddy</h1>
                </div>
                <form>
                    <div class="form-group">
		                <label for="password">Password</label>
		                <input value={data.password}  class="form-control" onChange={handleInput} type="text" name="password" id="password"/>
		            </div>
                    <div class="form-group">
						<label for="confirmpassword">Confirm Password</label>
						<input type="password" class="form-control"  id="confirmpassword"onChange={handleInput} value={data.confirmpassword} name="confirmpassword" />
					</div>
                    <p class="description">
                    Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter
                    </p>
                    <button class="btn reset-submit"><span class="text-center">Change password</span></button>
                </form>
                <div class="reset-footer">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Security</a>
                    <a href="#">Contact Mastergy</a>
                </div>
            </div>
        </div>
    );
}

export default Reset;