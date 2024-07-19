const initialState = [
    {
        id:1,
        name: 'Frodo Baggins',
        email: 'example@email.com',
        event: 1
    },
    {
        id: 2,
        name: 'Samwise Gamgee',
        email: 'example2@email.com',
        event: 2
    }
];
    


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