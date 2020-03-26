import React from 'react';
import styles from './styles.TicTacToe.css';

class TicTacToeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() {
        
        window.removeEventListener('load', this.handleLoad);   
    }

    handleLoad() {
        if (this.props.connected) {
            
        }  
    }

    render() {
        return (
            <div style={styles.page}>
                gameee
            </div>
        )
    }
}

export default TicTacToeComponent;