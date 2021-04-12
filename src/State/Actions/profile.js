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
          awards: awards.data.filter(
            (award) => award.user === res.data.data.email
          ),
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

export const getOrganizationProfile = () => async (dispatch) => {
  try {
    setLoading(dispatch);
    console.log("hello", axios.defaults.headers.common["Authorization"]);
    const res = await axios.get("/pilot/accounts/retrieveorganisation");
    console.log(res.data);
    dispatch({
      type: "SET_FRESH_PROFILE",
      payload: { ...res.data.data },
    });
  } catch (err) {
    stopLoading(dispatch);
    console.log(err);
    if (err.response && err.response.data)
      alert(err.response.data.error.message);
    else
      alert("An Error Occured!! Check you internet connection and try again");
  }
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

export const addCourse = (data) => {
  return async (dispatch) => {
    try {
      setLoading(dispatch);
      const res = await axios.post("/pilot/course/", data);
      console.log(res.data);
      dispatch({
        type: "ADD_COURSE",
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

export const addAwards = (data) => {
  return async (dispatch) => {
    try {
      setLoading(dispatch);
      const res = await axios.post("/pilot/awards/", data);
      console.log(res.data);
      dispatch({
        type: "ADD_AWARD",
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

export const uploadImage = async (formData) => {
  try {
    const res = await axios.post("/images/upload_image", formData, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(res.data.data.result.id);
    return res.data.data.result;
  } catch (err) {
    console.log(err);
    if (err.response) alert(err.response.data.error.message);
  }
};

export const handleImageUpload = (Imagedata) => {
  return async (dispatch) => {
    try {
      setLoading(dispatch);
      const res = await uploadImage(Imagedata);
      const data = await axios.put("/pilot/accounts/updateprofile", {
        image: res.id,
      });
      dispatch({
        type: "SET_PROFILE",
        payload: {
          ...data.data.data,
          image: {
            ...data.data.data.image,
            url: data.data.data.image.url.substr(
              0,
              data.data.image.url.indexOf("?")
            ),
          },
        },
      });
      console.log(res);
      stopLoading(dispatch);
    } catch (err) {
      console.log(err);
      stopLoading(dispatch);
      alert(err.response.data.error.message);
    }
  };
};
