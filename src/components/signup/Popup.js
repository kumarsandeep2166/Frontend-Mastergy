import React, { useState } from "react";
import "./css/popup.css";

const Popup = ({ onClose, changeUserType }) => {
  const getEntireHeight = () => {
    let height = document.querySelector("body").clientHeight + "px";
    console.log(height);
    return height;
  };
  const [user_role, setUserRole] = useState(1);
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3 className="popup-heading">Select the Type of Role you want ?</h3>
        <div className="popup-button-box">
          <div className="popup-radio-box">
            <label class="container">
              <input
                type="radio"
                onChange={(e) => setUserRole(e.target.value)}
                checked="checked"
                value="1"
                name="user_role"
              />
              I am an Individual
              <span class="checkmark"></span>
            </label>
            <label class="container">
              We are an organization
              <input
                type="radio"
                onChange={(e) => setUserRole(e.target.value)}
                name="user_role"
                value="2"
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="popup-buttom-box">
            <button
              onClick={() => changeUserType(user_role)}
              className="btn btn-popup-button-user"
            >
              Submit
            </button>
          </div>
        </div>
        <div onClick={() => onClose()} className="popup-close">
          <i class="zmdi zmdi-close"></i>
        </div>
      </div>
    </div>
  );
};

export default Popup;
