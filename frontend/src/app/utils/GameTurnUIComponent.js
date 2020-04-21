import React from 'react';
import Radium from 'radium';
import ExpireComponent from './ExpireComponent';
import { CSSTransition } from 'react-transition-group';
import '../transitions.scss';
import styles from './styles.GameUI.css';

class GameTurnUIComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: true
        });
        setTimeout(() => {
            this.setState({
                clicked: false
            });
        }, 1000);
    }

    render() {
        return (
            <div style={styles.disabledPage} onClick={() => this.handleClick()}>
                <ExpireComponent delay={ 1000 }>
                    <CSSTransition
                        in={ this.state.clicked }
                        appear={ true }
                        timeout={ 1000 }
                        classNames="fade"
                        unmountOnExit>
                        <div style={styles.displayAlert}>
                            {
                                this.props.opponent ?  
                                <span>Opponent's Turn</span> : 
                                <span>Opponent has left</span>
                            }
                        </div>
                    </CSSTransition>
                </ExpireComponent>
            </div>
        )
    }
}

export default Radium(GameTurnUIComponent);