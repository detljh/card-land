import React from 'react';
import { connect } from 'react-redux';
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { homeActions } from '../app/home/duck';
import { homeOperations } from '../app/home/duck';
import actions from './actions';

class WebSocketConnection extends React.Component {
    componentDidMount() {
        const { dispatch, host } = this.props;
        let user = {};
        if (localStorage.jwtToken) {
            const token = localStorage.jwtToken;
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(homeActions.setCurrentUser(decoded, true));
            user = decoded;

            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                dispatch(homeOperations.logout());
            }
        }

        dispatch(actions.sConnect(host, user));
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default connect()(WebSocketConnection);