import React, { useState, useEffect } from "react";
import "./css/user_profile.css";
import Header from "../organization_profile/header.js";
import TopNavbar from "../organization_profile/top_navigation.js";
import SideNavbar from "../organization_profile/side_navigation.js";
import Navbar from "../organization_profile/organization_navbar";
import OrganizationAbout from "../organization_profile/organization_about";
import Skills from "./skills";
import WorkingExperience from "./workingexperience";
import Project from "./user_projects";
import TeachingExperience from "./teachingexperience";
import Certifications from "./Certifications";
import Labels from "./labels";
import Journals from "./journals";
import Courses from "./courses";
import Awards from "./Awards";
import EducationBackground from "./educationalbackground";
import { getUserProfile } from "../../State/Actions/profile";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";

function UserProfile({
  isAuthenticated,
  history,
  getUserProfile,
  profile,
  loading,
}) {
  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
    async function fetchData() {
      console.log("useEffect running");
      getUserProfile();
    }
    fetchData();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <TopNavbar />
      <SideNavbar />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 organization-body">
          <Header />
          <Navbar />
          <OrganizationAbout />
          <Skills />
          <div class="Modal-About">
            <EducationBackground />
            <hr />
            <TeachingExperience />
            <hr />
            <WorkingExperience />
            <hr />
          </div>
          <Labels />
          <Certifications />
          <Project />
          <Journals />
          <Courses />

          <Awards />
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.loading,
});

export default connect(mapStateToProps, { getUserProfile })(UserProfile);
