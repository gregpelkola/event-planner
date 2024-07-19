export const fetchParticipants = () => (dispatch, getState) => {
    const participants = getState().participants;
    dispatch({ type: 'FETCH_PARTICIPANTS', payload: participants });
};

export const addParticipant = (participant) => (dispatch) => {
    dispatch({ type: 'ADD_PARTICIPANT', payload: participant });
};  