import React from 'react';
import Radium from 'radium';
import { CSSTransition } from 'react-transition-group';
import '../transitions.scss';
import styles from './styles.GameUI.css';

class AlertUIComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.isClickAlert) {
            this.setState({
                clicked: true
            });
            setTimeout(() => {
                this.setState({
                    clicked: false
                });
            }, 1000);
        }
    }

    render() {
        return (
            this.props.isClickAlert ?
            <div style={styles.disabledPage} onClick={() => this.handleClick()}>
                <CSSTransition
                    in={ this.state.clicked }
                    timeout={ 1000 }
                    classNames="fade"
                    unmountOnExit>
                    <div style={styles.displayAlert}>
                        {this.props.alert}
                    </div>
                </CSSTransition>
            </div> :
            <CSSTransition
            in={ this.props.displayAlert }
            timeout={ 1000 }
            classNames="fade"
            onEntered={this.props.removeAlert}
            unmountOnExit>
                <div style={styles.disabledPage}>
                    <CSSTransition
                        in={ true }
                        timeout={ 1000 }
                        classNames="fade"
                        unmountOnExit>
                        <div style={styles.displayAlert}>
                            {this.props.alert}
                        </div>
                    </CSSTransition>
                </div>
            </CSSTransition>
        )
    }
}

export default Radium(AlertUIComponent);