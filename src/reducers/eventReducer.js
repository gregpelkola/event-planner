const eventReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_EVENTS':
            return action.payload;
        case 'ADD_EVENT':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default eventReducer;