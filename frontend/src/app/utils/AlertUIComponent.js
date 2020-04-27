import React from 'react';
import Radium from 'radium';
import { CSSTransition } from 'react-transition-group';
import '../transitions.scss';
import styles from './styles.GameUI.css';
import ExpireComponent from './ExpireComponent';

class AlertUIComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.isClickAlert);
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
            <div style={styles.disabledPage} onClick={() => this.handleClick()}>
                <ExpireComponent delay={ 1000 } removeAlert={this.props.removeAlert}>
                    <CSSTransition
                        in={ this.state.clicked || this.props.displayAlert }
                        appear={ true }
                        timeout={ 1000 }
                        classNames="fade"
                        unmountOnExit>
                        <div style={styles.displayAlert}>
                            {this.props.alert}
                        </div>
                    </CSSTransition>
                </ExpireComponent>
            </div>
        )
    }
}

export default Radium(AlertUIComponent);