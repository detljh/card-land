import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import LoadingRoom from './loading_room';
import TicTacToe from './tic_tac_toe';
import history from '../history';
import gameTypes from '../../../constants/gameTypes';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transitions.scss';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Route render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                        key={location.pathname}
                        timeout={{enter: 500}}
                        classNames="page">
                            <div>
                                <Switch location={location}>
                                    <Route exact path='/' component={Home} />
                                    <Route path='/room' component={LoadingRoom} />
                                    <Route path={'/' + gameTypes.TIC_TAC_TOE} component={TicTacToe} />
                                </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </Router>
        )
    }
}

export default App;