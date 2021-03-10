import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { connect } from "react-redux";
import { updateProfile } from "../../State/Actions/profile";

function OrganizationAbout({ about_me, dispatch, updateProfile }) {
  const [about, setAbout] = useState(about_me);
  const inputRef = useRef(null);
  const editable = () => {
    console.log(about, "sandy");
    inputRef.current.contentEditable = true;
    inputRef.current.focus();
  };
  const onLostFocus = () => {
    inputRef.current.contentEditable = false;
    updateProfile({ about_me: inputRef.current.innerText });
  };
  return (
    <div className="organization-about">
      <div
        className="d-flex  align-items-center justify-content-between"
        id="AboutHeading"
      >
        <h3 className="font-weight-light">About</h3>
        <span onClick={editable} className="fa fa-pencil" id="editicon"></span>
      </div>
      <ContentEditable
        html={about}
        id="abouttext"
        onChange={(event) => setAbout(event.target.value)}
        onBlur={onLostFocus}
        innerRef={inputRef}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  about_me: state.profile.about_me,
});

export default connect(mapStateToProps, { updateProfile })(OrganizationAbout);
