import React from 'react';
<<<<<<< HEAD
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from './home';
import { TicTacToe } from './tictactoe';
import history from '../history';
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './home';
import { TicTacToe } from './tictactoe';
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d

class App extends React.Component {
    render() {
        return (
<<<<<<< HEAD
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/tic_tac_toe/:room' component={TicTacToe} />
                </Switch>
            </Router>
=======
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/tic_tac_toe' component={TicTacToe} />
                </Switch>
            </BrowserRouter>
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
        )
    }
}

export default App;