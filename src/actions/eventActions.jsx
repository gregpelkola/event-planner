import axios from 'axios';

// Action creator to fetch events from the server
export const fetchEvents = () => async (dispatch) => {
    // Use axios to perform a GET request to the server
    const response = await axios.get('api/events/');
    // Dispatch the FETCH_EVENTS action, sending the fetched data as payload
    dispatch({ type: 'FETCH_EVENTS', payload: response.data });
};

export const addEvent = (event) => async (dispatch) => {
    const response = await axios.post('api/events/', event);
    dispatch({ type: 'ADD_EVENT', payload: response.data });
};