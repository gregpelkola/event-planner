import { configureStore } from '@reduxjs/toolkit'; // Correct import for Redux Toolkit
import { composeWithDevTools } from 'redux-devtools-extension'; // This is not needed with Redux Toolkit
import { thunk } from 'redux-thunk'; // Corrected import
import rootReducer from '../reducers';

const initialState = {}; // This might not be needed depending on your rootReducer

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;