import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { connect } from "react-redux";
import { updateProfile } from "../../State/Actions/profile";
import {
  updateOrganizationProfile,
  updateOrganizationProfileBio,
} from "../../State/Actions/organizationProfile";
function OrganizationAbout({
  about_me,
  user_type,
  id,
  updateProfile,
  updateOrganizationProfileBio,
}) {
  const [about, setAbout] = useState(about_me);
  const inputRef = useRef(null);
  const editable = () => {
    inputRef.current.contentEditable = true;
    inputRef.current.focus();
  };
  const onLostFocus = () => {
    inputRef.current.contentEditable = false;
    updateProfile({ about_me: inputRef.current.innerText });
    if (parseInt(user_type) === 1) {
      updateOrganizationProfileBio({ bio: inputRef.current.innerText }, id);
    }
  };
  return (
    <div className="Modal-About">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="">About</h2>
        <span
          onClick={editable}
          className="icon-edit-pencil fa fa-pencil"
        ></span>
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
  about_me:
    state.user.user_role === "2" ? state.profile.about_me : state.profile.bio,
  user_type: state.user.user_role,
  id: state.profile.id,
});

export default connect(mapStateToProps, {
  updateProfile,
  updateOrganizationProfileBio,
})(OrganizationAbout);
