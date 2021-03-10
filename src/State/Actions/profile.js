import axios from "axios";
import { stopLoading, setLoading } from "./loading";

export const getUserProfile = () => {
  return async (dispatch) => {
    try {
      console.log("fetching profile");
      setLoading(dispatch);
      const res = await axios.get("/pilot/accounts/myprofile");
      const education = await axios.get("/pilot/education/user/");
      const TeachingExperience = await axios.get("/pilot/teachingexp/user/");
      const workExperience = await axios.get("/pilot/workexp/user");
      const awards = await axios.get("/pilot/awards/");
      const courses = await axios.get("/pilot/course/");
      console.log(education.data);
      console.log("profile", res.data);
      dispatch({
        type: "SET_PROFILE",
        payload: {
          ...res.data.data,
          education: education.data,
          teachingExperience: TeachingExperience.data,
          workExperience: workExperience.data,
          awards: awards.data,
          courses: courses.data,
        },
      });
      stopLoading(dispatch);
    } catch (err) {
      stopLoading(dispatch);
      console.log(err);
      if (err.response) alert(err.response.data.error.message);
    }
  };
};

export const updateProfile = (data) => {
  return async (dispatch) => {
    try {
      console.log("data ", data);
      setLoading(dispatch);
      const res = await axios.put("/pilot/accounts/updateprofile", data);
      console.log(res.data.data);
      dispatch({
        type: "SET_PROFILE",
        payload: { ...res.data.data },
      });
      stopLoading(dispatch);
    } catch (err) {
      stopLoading(dispatch);
      console.log(err);
      alert(err.response.data.error.message);
    }
  };
};

export const addEducation = (data) => {
  return async (dispatch) => {
    try {
      setLoading(dispatch);
      const res = await axios.post("/pilot/education/", data);
      console.log(res.data);
      dispatch({
        type: "ADD_EDUCATION",
        payload: res.data,
      });
      stopLoading(dispatch);
    } catch (err) {
      stopLoading(dispatch);
      console.log(err);
      alert(err.response.data.error.message);
    }
  };
};

export const addExperience = (data) => {
  return async (dispatch) => {
    try {
      setLoading(dispatch);
      const res = await axios.post("/pilot/workexp/", data);
      console.log(res.data);
      dispatch({
        type: "ADD_EXPERIENCE",
        payload: res.data,
      });
      stopLoading(dispatch);
    } catch (err) {
      stopLoading(dispatch);
      console.log(err);
      alert(err.response.data.error.message);
    }
  };
};

export const addTeachingExperience = (data) => {
  return async (dispatch) => {
    try {
      setLoading(dispatch);
      const res = await axios.post("/pilot/teachingexp/", data);
      console.log(res.data);
      dispatch({
        type: "ADD_TEACHING_EXPERIENCE",
        payload: res.data,
      });
      stopLoading(dispatch);
    } catch (err) {
      stopLoading(dispatch);
      console.log(err);
      alert(err.response.data.error.message);
    }
  };
};
