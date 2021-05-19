import axios from "axios";
import { stopLoading, setLoading } from "./loading";

export const updateOrganizationProfile = (data, id) => async (dispatch) => {
  try {
    setLoading(dispatch);
    switch (data.gender) {
      case "male":
        data.gender = 1;
        break;
      case "female":
        data.gender = 2;
        break;
      case "co-ed":
        data.gender = 3;
        break;
      default:
        data.gender = 3;
    }

    const newData = {
      establishment_year: parseInt(data.DurationFrom),
      number_of_students: parseInt(data.students),
      number_of_faculities: parseInt(data.faculties),
      number_of_total_staff: parseInt(data.staff),
      total_area: parseInt(data.area),
      website_link: data.link,
      address: data.address,
      affiliation_by: data.affiliation,
      avg_fees: parseInt(data.fee),
      gender_accepted: data.gender,
    };
    console.log(newData);
    const res = await axios.put(`/pilot/accounts/organisation/${id}`, newData);
    console.log("new", res.data);
    dispatch({
      type: "SET_PROFILE",
      payload: newData,
    });
    stopLoading(dispatch);
  } catch (err) {
    console.log(err);
    stopLoading(dispatch);
    if (err.response && err.response.data && err.response.data.error)
      alert(err.response.data.error.message);
  }
};

export const updateOrganizationProfileBio = (data, id) => async (dispatch) => {
  try {
    setLoading(dispatch);
    console.log("bio", data, id);
    await axios.put(`/pilot/accounts/organisation/${id}`, data);
    dispatch({
      type: "UPDATE_PROFILE",
      payload: data,
    });
    stopLoading(dispatch);
  } catch (err) {
    console.log(err);
    stopLoading(dispatch);
    if (err.response && err.response.data && err.response.data.error)
      alert(err.response.data.error.message);
  }
};

export const addDepartment = (data, id) => async (dispatch) => {
  try {
    setLoading(dispatch);
    const res = await axios.post(`/pilot/accounts/adddept/${id}`, {
      department: [data],
    });
    console.log("department", res.data.data);
    dispatch({
      type: "UPDATE_PROFILE",
      payload: {
        department: res.data.data,
      },
    });
    stopLoading(dispatch);
  } catch (err) {
    console.log(err);
    stopLoading(dispatch);
    if (err.response && err.response.data && err.response.data.error)
      alert(err.response.data.error.message);
    else {
      alert("Check your internet connection and try again");
    }
  }
};
