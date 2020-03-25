import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.scss';
import WebSocketConnection from './socket/WebSocketConnection';

ReactDOM.render(
    <Provider store={store}>
        <WebSocketConnection host={`http://localhost:5000`}>
            <App />
        </WebSocketConnection>
    </Provider>
, document.getElementById('root'));