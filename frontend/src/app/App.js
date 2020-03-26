import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from './home';
import { LoadingScreen } from './loading_screen';
import { TicTacToe } from './tic_tac_toe';
import history from '../history';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/:room' component={LoadingScreen} />
                    <Route path='/:room/tic_tac_toe' component={TicTacToe} />
                </Switch>
            </Router>
        )
    }
}

export default App;