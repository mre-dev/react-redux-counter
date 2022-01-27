import { combineReducers } from "redux";

// Import All Reducers
import { counterReducer } from './counterReducer';

// Combine All Reducers
export const allReducers = combineReducers({
    counterReducer,
});