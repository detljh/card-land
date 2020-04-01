import HomeContainer from './HomeContainer';
import React from 'react';
import Radium, { StyleRoot } from 'radium';

class Home extends React.Component {
    render() {
        return (
            <StyleRoot>
                <HomeContainer />
            </StyleRoot>
        )
    }
}

export default Radium(Home);