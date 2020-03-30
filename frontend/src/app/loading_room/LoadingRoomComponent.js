import React from 'react';
import styles from './styles.LoadingRoom.css';
import history from '../../history';

class LoadingRoomComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        if (this.props.room === null) {
            history.push('/');
            return;
        }
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() {
        if (this.props.connected && !this.props.started) {
            this.props.leave();
        }
        window.removeEventListener('load', this.handleLoad);   
    }

    handleLoad() {
        this.props.leave();
    }

    render() {
        return (
            <div style={styles.page}>
                {this.props.user.name}
                {
                    this.props.opponent !== null && this.props.opponent
                }
                <br />
                {this.props.countdown}
            </div>
        )
    }
}

export default LoadingRoomComponent;