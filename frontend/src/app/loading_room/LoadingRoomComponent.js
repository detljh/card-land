import React from 'react';
import styles from './styles.LoadingRoom.css';
import Radium from 'radium';
import history from '../../history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import '../transitions.scss';

class LoadingRoomComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        if (!this.props.queued) {
            history.push('/');
            return;
        }
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);   
        if (this.props.connected && !this.props.started) {
            this.props.leave();
        }
    }

    handleLoad() {
        this.props.leave();
    }

    render() {
        let rightStyle = Object.assign({}, styles.right,
            this.props.opponent !== null && styles.right.fill
        );
        let pageStyle = Object.assign({}, styles.page,
            this.props.started && styles.page.started
        );
        return (
            <div style={pageStyle}>
                <div style={styles.main}>
                    <CSSTransition
                        in={ this.props.started != true }
                        appear={ true }
                        timeout={{ enter: 300, exit: 500 }}
                        classNames="slideLeft">
                        <div style={styles.left}>
                            {this.props.user.username}
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={ this.props.opponent && this.props.started != true }
                        timeout={{ enter: 300, exit: 500 }}
                        classNames="slideRight">
                        <div style={rightStyle}>
                        {  
                            this.props.opponent && this.props.opponent.username
                        }
                        </div>
                    </CSSTransition>
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