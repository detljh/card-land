import React from 'react';
import Radium from 'radium';
import styles from './styles.Game.css';
import SquareContainer from './SquareContainer';
import TooltipUIComponent from '../utils/TooltipUIComponent';

class GameComponent extends React.Component {
    render() {
        return (
            <div style={styles.game}>
                <div style={styles.boardWrapper}>
                    <TooltipUIComponent position="top" text="This is your own board. The squares where your opponent has attacked will show up here as a red bomb.">
                        <span style={styles.boardTitle}>Your Board</span>
                    </TooltipUIComponent>
                    
                    <div style={styles.board}>
                        {
                            Array.from(new Array(121), (e, index) => 
                            <SquareContainer key={`square-${index}`} id={index} isOpponentBoard={false} />
                            )
                        }
                    </div>
                </div>
                
                <div style={styles.boardWrapper}>
                    <TooltipUIComponent position="top" text="This is the opponent's board. On your turn, choose a square to attack. If you hit a ship, a red bomb will appear. Squares already attacked will be red.">
                        <span style={styles.boardTitle}>Opponent's Board</span>
                    </TooltipUIComponent>
                    
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