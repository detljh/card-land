import React from 'react';
import styles from './styles.LoadingRoom.css';
import Radium from 'radium';
import history from '../../history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

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
                <div style={styles.main}>
                    <div style={styles.left}>{this.props.user.name}</div>
                    <div style={styles.right}>
                        {
                            this.props.opponent !== null && this.props.opponent
                        }
                    </div>
                </div>
                <div style={styles.displayState}>
                    {
                        this.props.opponent === null ? 
                        <div style={styles.displayState.waiting}>
                            <div style={styles.displayState.waiting.icon}><FontAwesomeIcon icon={faSpinner} /></div>
                            <div style={styles.displayState.waiting.text}>
                                Finding an opponent...
                            </div>
                        </div> :
                        <div style={styles.displayState.countdown}>{this.props.countdown}</div>
                    }
                </div>
            </div>
        )
    }
}

export default Radium(LoadingRoomComponent);