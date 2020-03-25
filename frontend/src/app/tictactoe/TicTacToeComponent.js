import React from 'react';

class TicTacToeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        this.handleLoad();
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() {
        if (this.props.connected) {
            this.props.leave();
        }
        window.removeEventListener('load', this.handleLoad);   
    }

    handleLoad() {
        if (this.props.connected) {
            
                this.setState({
                    joined: true
                });
                this.props.join();
              
        }  
    }

    render() {
        return (
            <div>
                tic
            </div>
        )
    }
}

export default TicTacToeComponent;