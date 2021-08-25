const feed = (state = { feeds: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_FEED_USER': {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default feed;
