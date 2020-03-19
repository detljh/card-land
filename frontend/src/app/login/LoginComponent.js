import React from 'react';
import axios from 'axios';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/')
        .then(response => {
            this.setState({
                data: response.data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <p>{this.state.data}</p>
        )
    }
}

export default LoginComponent;