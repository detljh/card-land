import React from 'react';
<<<<<<< HEAD
import styles from './styles.TicTacToe.css';
=======
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d

class TicTacToeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
<<<<<<< HEAD
=======
        this.handleLoad();
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
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
<<<<<<< HEAD
            this.setState({
                joined: true
            });
            this.props.join();
=======
            
                this.setState({
                    joined: true
                });
                this.props.join();
              
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
        }  
    }

    render() {
        return (
<<<<<<< HEAD
            <div style={styles.page}>
                {this.props.players}
                <br />
                {this.props.countdown}
=======
            <div>
                tic
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
            </div>
        )
    }
}

export default TicTacToeComponent;