import React from 'react';
import Radium from 'radium';
import styles from './styles.Game.css';
import SquareContainer from './SquareContainer';

class GameComponent extends React.Component {
    render() {
        return (
            <div style={styles.game}>
                <div style={styles.boardWrapper}>
                    <p>Your board</p>
                    <div style={styles.board}>
                        {
                            Array.from(new Array(121), (e, index) => 
                            <SquareContainer key={`square-${index}`} id={index} isOpponentBoard={false} />
                            )
                        }
                    </div>
                </div>
                
                <div style={styles.boardWrapper}>
                    <p>Opponent's board</p>
                    <div style={styles.board}>
                        {
                            Array.from(new Array(121), (e, index) => 
                            <SquareContainer key={`square-opponent-${index}`} id={index} isOpponentBoard={true} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(GameComponent);