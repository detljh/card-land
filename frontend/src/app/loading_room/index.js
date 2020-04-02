import LoadingRoomContainer from './LoadingRoomContainer';
import React from 'react';
import Radium, { StyleRoot } from 'radium';

class LoadingRoom extends React.Component {
    render() {
        return (
            <StyleRoot>
                <LoadingRoomContainer />
            </StyleRoot>
        )
    }
}

export default Radium(LoadingRoom);