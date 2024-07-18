import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import participantReducer from './participantReducer';

const rootReducer = combineReducers({
    events: eventReducer,
    participants: participantReducer,
});

export default rootReducer;