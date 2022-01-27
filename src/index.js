import Controller from  './controller';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/styles/global.css';
import counterStore from './redux/store.redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={counterStore}>
            <Controller/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);