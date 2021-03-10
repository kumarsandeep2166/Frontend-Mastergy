import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
const emailError = ({ verified, history }) => {
  //   useEffect(() => {
  //     if (verified) {
  //       history.push("/userprofile");
  //     }
  //   }, []);
  return verified ? (
    <Redirect to="/userprofile" />
  ) : (
    <div className="container" style={{ textAlign: "center" }}>
      <h2>Email has not been verified</h2>
      <p>Kindly check your mail for the account verification</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  verified: state.user.is_email_verified,
});

export default connect(mapStateToProps)(emailError);
