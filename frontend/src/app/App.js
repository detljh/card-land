import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from './home';
import { TicTacToe } from './tictactoe';
import history from '../history';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/tic_tac_toe/:room' component={TicTacToe} />
                </Switch>
            </Router>
        )
    }
}

export default App;