import axios from 'axios';
import { stopLoading, setLoading } from './loading';
import FormData from 'form-data';

export const userFeed = (data) => async (dispatch) => {
  try {
    setLoading(dispatch);
    const res = await axios.get('/pilot/feeds');
    console.log(res.data);
    dispatch({
      type: 'SET_FEED_USER',
      payload: { feeds: res.data },
    });
    stopLoading(dispatch);
  } catch (err) {
    if (err.response && err.response.data) {
      alert(err.response.data.message);
    } else {
      alert('Please Check your Internet Connection and try again');
    }
    stopLoading(dispatch);
  }
};

export const addEvent = (data) => async (dispatch) => {
  try {
    setLoading(dispatch);
    const form = new FormData();
    console.log(data);
    if (data.picture) form.append('picture', data.picture);
    form.append('name', data.title);
    form.append('process', data.Process);
    form.append('type', data.Type);
    form.append('start_date', data.fromDate);
    form.append('end_date', data.toDate);

    // Sending API requests
    const res = await axios.post('/pilot/event/', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('result', res.data);
    stopLoading(dispatch);
  } catch (err) {
    console.log(err);
    if (err.response && err.response.data) {
      alert(err.response.data.message);
    } else {
      alert('Please Check your Internet Connection and try again');
    }
    stopLoading(dispatch);
  }
};

export const addCourse = (data) => async (dispatch) => {
  try {
    setLoading(dispatch);
    const form = new FormData();
    console.log(data);
    if (data.picture) form.append('picture', data.picture);
    if (data.content_file) form.append('content_file', data.content_file);
    form.append('title', data.title);
    form.append('description', data.description);
    form.append('process', data.Process);
    form.append('type', data.Type);
    form.append('duration', data.duration);
    form.append('content', data.syllabus);

    // Sending API requests
    const res = await axios.post('/pilot/course/', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('result', res.data);
    stopLoading(dispatch);
  } catch (err) {
    console.log(err);
    if (err.response && err.response.data) {
      alert(err.response.data.message);
    } else {
      alert('Please Check your Internet Connection and try again');
    }
    stopLoading(dispatch);
  }
};
