import React from 'react';
import './css/reset.css'
function Reset1(props) {
    return (
        <div class=" d-flex justify-content-center">
            <div class="">
                <div class="reset-success">
                    <h1 >How do you want to reset your password?</h1>
                    <p>You can use the information associated with your account</p>
                    <input type="radio"/>
                    <div>Text a code to the phone number ending in 89</div>
                    <br/>
                    <input type="radio"/>
                    <div>Send an email to sa***********@g*****</div>
                    <br/>
                    <button class="btn">Next</button><br/>
                    <a href="#">Don't have access to these?</a>
                </div>
            </div>
        </div>
    );
}

export default Reset1;