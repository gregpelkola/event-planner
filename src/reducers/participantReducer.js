const participantReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PARTICIPANTS':
            return action.payload;
        case 'ADD_PARTICIPANT':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default participantReducer;