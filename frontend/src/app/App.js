import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login/LoginComponent';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;