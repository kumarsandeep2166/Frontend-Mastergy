import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { verifyOtp } from "../../State/Actions/user";

const VerifyOtp = ({
  isAuthenticated,
  location,
  history,
  dispatch,
  user,
  verifyOtp,
}) => {
  const search = location.search;
  const params = new URLSearchParams(search);
  const url_otp = params.get("url_otp");
  alert(url_otp);
  useEffect(() => {
    alert("Reached here");
    async function fetchData() {
      try {
        // console.log("amking opt verification");
        // await axios.put(`/pilot/accounts/verifyotp?url_otp=${url_otp}`);
        // const res = await axios.get("/pilot/accounts/myprofile");
        // dispatch({
        //   type: "USER_LOGIN",
        //   payload: { ...res.data },
        // });
        // dispatch({
        //   type: "OTP_VERIFIED",
        // });
        verifyOtp(url_otp);
        history.push("/userprofile");
      } catch (err) {
        console.log(err);
        alert(err.response.data.error.message);
        history.push("/login");
      }
    }
    if (isAuthenticated && !user.is_email_verified) fetchData();
    else history.push("/login");
  }, []);
  return isAuthenticated ? <div></div> : <Redirect to="/login" />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user,
});

export default connect(mapStateToProps, { verifyOtp })(VerifyOtp);
