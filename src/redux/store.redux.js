import { createStore } from 'redux'
import { allReducers } from './reducer';

//Create Store And Set Combined Reducers to createStore
const counterStore = createStore(
    allReducers,
);

export default counterStore;