import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './home';
import { TicTacToe } from './tictactoe';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/tic_tac_toe' component={TicTacToe} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;