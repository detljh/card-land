import React from 'react';
import history from '../../history';
import Radium from 'radium';
import GameOverUIContainer from '../utils/GameOverUIContainer';
import GameTurnUIContainer from '../utils/GameTurnUIContainer';
import GameHeaderContainer from '../utils/GameHeaderContainer';
import styles from './styles.Battleships.css';

class BattleshipsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (!this.props.queued) {
            history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.leave();
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
            <div style={styles.page}>
                {
                    (!this.props.opponent || (!this.props.finished && !this.props.isTurn)) ?
                    <GameTurnUIContainer /> :
                    <GameOverUIContainer />
                }

                <GameHeaderContainer />

                <div style={styles.main}>
                    <div style={styles.game}>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(BattleshipsComponent);