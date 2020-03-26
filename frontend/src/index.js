import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.scss';
import SocketConnection from './socket/SocketConnection';

ReactDOM.render(
    <Provider store={store}>
        <SocketConnection host={`http://localhost:5000`}>
            <App />
        </SocketConnection>
    </Provider>
, document.getElementById('root'));