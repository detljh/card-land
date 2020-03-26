import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.scss';
<<<<<<< HEAD
import SocketConnection from './socket/SocketConnection';

ReactDOM.render(
    <Provider store={store}>
        <SocketConnection host={`http://localhost:5000`}>
            <App />
        </SocketConnection>
=======
import WebSocketConnection from './socket/WebSocketConnection';

ReactDOM.render(
    <Provider store={store}>
        <WebSocketConnection host={`http://localhost:5000`}>
            <App />
        </WebSocketConnection>
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
    </Provider>
, document.getElementById('root'));