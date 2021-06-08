export const setLoading = (dispatch) => {
  dispatch({
    type: "SET_LOADING_TRUE",
  });
};

export const stopLoading = (dispatch) => {
  dispatch({
    type: "SET_LOADING_FALSE",
  });
};
