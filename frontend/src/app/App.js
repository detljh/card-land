import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import LoadingRoom from './loading_room';
import TicTacToe from './tic_tac_toe';
import history from '../history';
import gameTypes from '../../../constants/gameTypes';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/room' component={LoadingRoom} />
                    <Route path={'/' + gameTypes.TIC_TAC_TOE} component={TicTacToe} />
                </Switch>
            </Router>
        )
    }
}

export default App;