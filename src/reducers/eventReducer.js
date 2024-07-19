const initialState = [
    {
        id:1,
        title: 'Team Meeting',
        description: 'Weekly Team Meeting to discuss project status',
        date: '2024-07-20',
        time: '10:00',
        location: 'Conference Room D'
    },
    {
        id:2,
        title: 'Client Meeting',
        description: 'Meeting with client to discuss project requirements',
        date: '2024-07-21',
        time: '14:00',
        location: 'Client Office'
    }
]

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