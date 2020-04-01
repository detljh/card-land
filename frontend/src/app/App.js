import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import { LoadingRoom } from './loading_room';
import { TicTacToe } from './tic_tac_toe';
import history from '../history';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/:room' component={LoadingRoom} />
                    <Route path='/:room/tic_tac_toe' component={TicTacToe} />
                </Switch>
            </Router>
        )
    }
}

export default App;