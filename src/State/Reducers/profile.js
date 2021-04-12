import StateManager from "react-select";

const profile = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_PROFILE": {
      return {
        ...state,
        ...payload,
      };
    }
    case "SET_FRESH_PROFILE": {
      return {
        ...payload,
      };
    }
    case "LOGOUT": {
      return {};
    }
    case "ADD_EDUCATION": {
      return {
        ...state,
        education: [...state.education, payload],
      };
    }
    case "ADD_COURSE": {
      return {
        ...state,
        courses: [...state.courses, payload],
      };
    }
    case "ADD_AWARD": {
      return {
        ...state,
        awards: [...state.awards, payload],
      };
    }
    case "ADD_EXPERIENCE": {
      return {
        ...state,
        workExperience: [...state.workExperience, payload],
      };
    }
    case "ADD_TEACHING_EXPERIENCE": {
      return {
        ...state,
        teachingExperience: [...state.teachingExperience, payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default profile;
