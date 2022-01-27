import { createStore } from 'redux'
import allReducers from './reducer';

const counterStore = createStore(
    allReducers,
);

export default counterStore;