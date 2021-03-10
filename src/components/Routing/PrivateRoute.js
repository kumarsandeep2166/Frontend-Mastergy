import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  user,
  loading,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          user.is_email_verified ? (
            <Component {...props} />
          ) : (
            <Redirect to="/emailnotverified" />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.user,
  loading: state.loading,
});

export default connect(mapStateToProps)(PrivateRoute);
