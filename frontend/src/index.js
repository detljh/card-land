import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.scss';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { homeActions } from './app/home/duck';
import { homeOperations } from './app/home/duck';

if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(homeActions.setCurrentUser(decoded, true));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(homeOperations.logout());
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));