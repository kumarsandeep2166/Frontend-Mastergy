import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./loader.css";
import Loader from "react-loader-spinner";
import React from "react";

const LoaderWrapper = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-box">
        <Loader type="Puff" color="#6dabe4" height={100} width={100} />
      </div>
    </div>
  );
};

export default LoaderWrapper;
