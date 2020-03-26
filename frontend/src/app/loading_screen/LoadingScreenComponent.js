import React from 'react';
import styles from './styles.LoadingScreen.css';

class LoadingScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
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
            this.props.join();
        }  
    }

    render() {
        return (
            <div style={styles.page}>
                {this.props.players}
                <br />
                {this.props.countdown}
            </div>
        )
    }
}

export default LoadingScreenComponent;