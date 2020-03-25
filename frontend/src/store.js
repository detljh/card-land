import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import socketMiddleware from './socket/middleware';

let store = createStore(rootReducer, applyMiddleware(thunk, socketMiddleware));

export { 
    store
}