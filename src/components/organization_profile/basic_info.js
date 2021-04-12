import React from "react";
import ProfileButton from "./profile_button";
import { connect } from "react-redux";
import { uploadImage, handleImageUpload } from "../../State/Actions/profile";
import axios from "axios";
import FormData from "form-data";

function BasicInfo({ profile, handleImageUpload }) {
  const onChange = async () => {
    const file = inputImage.current.files[0];
    const test = new FormData();
    test.append("file", file);
    try {
      // const res = await uploadImage(test);
      // console.log(res);
      handleImageUpload(test);
      //console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const onClick = () => {
    alert("clicked");
    inputImage.current.click();
  };
  const inputImage = React.useRef(null);
  return (
    <div className="container-fluid  d-flex basic-info">
      <div className="basic-info-img col-sm-3 col-5">
        <img
          src={
            profile.image
              ? profile.image.url.substr(0, profile.image.url.indexOf("?"))
              : require("./Images/organization.png")
          }
          alt="sandy"
        />
        <span
          onClick={onClick}
          style={{
            position: "absolute",
            bottom: 0,
            right: "10px",
            background: "black",
            padding: "10px",
            color: "white",
            borderRadius: "50%",
          }}
          className="fa fa-pencil"
          id="editicon"
        ></span>
        <input
          ref={inputImage}
          onChange={onChange}
          type="file"
          class="dp-image"
        />
      </div>
      <div className="basic-info-content">
        <h2 className="basic-info-content-name page-header">{profile.name}</h2>
        <div className="basic-info-content-location d-flex">
          <span className="fa fa-map-marker"></span>
          <div>
            <h6 className="basic-info-location-name1 text-muted">
              BHUBANESWAR,ODISHA
            </h6>
            <h6 className="basic-info-location-name2 text-muted">E.T.D-1986</h6>
          </div>
        </div>
        <div className="basic-info-buttons d-flex">
          <ProfileButton button_name="Connect" />
          <button className="btn basic-info-button d-xl-inline d-none btn-secondary">
            Follow
          </button>
          <button className="btn basic-info-button d-xl-inline d-none btn-secondary">
            Enquiry
          </button>
          <div className="dropdown dropdown-div">
            <button
              className="btn basic-info-button dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Events
              </a>
              <a className="dropdown-item" href="#">
                Block
              </a>
              <a className="dropdown-item d-lg-none d-inline" href="#">
                Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { handleImageUpload })(BasicInfo);
