import React from 'react';
import Radium from 'radium';
import SquareContainer from './SquareContainer';
import styles from './styles.ShipArrange.css';
import ShipContainer from './ShipContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import TooltipUIComponent from '../utils/TooltipUIComponent';

class ShipArrangeComponent extends React.Component {
    render() {
        return (
            <div style={styles.game}>
                {
                    this.props.displayReadyButton &&
                    <div key={'ready_button'} style={styles.readyButton} onClick={() => this.props.ready()}>
                        Ready
                    </div>
                }
                <div style={styles.menu}>
                    <div style={styles.option}>
                        <span style={styles.option.title}>Aircraft Carrier</span>
                        <ShipContainer id='carrier' type='carrier' />
                    </div>
                    <div style={styles.option}>
                        <span style={styles.option.title}>Battleship</span>
                        <ShipContainer id='battleship' type='battleship' />
                    </div>
                    <div style={styles.option}>
                        <span style={styles.option.title}>Cruiser</span>
                        <ShipContainer id='cruiser_1' type='cruiser' />
                        <ShipContainer id='cruiser_2' type='cruiser' />
                    </div>
                    <div style={styles.option}>
                        <span style={styles.option.title}>Submarine</span>
                        <ShipContainer id='submarine_1' type='submarine' />
                        <ShipContainer id='submarine_2' type='submarine' />
                    </div>
                </div>

                <TooltipUIComponent position="top" text="Rotate ship">
                    <div style={styles.rotateShipIcon} onClick={() => this.props.rotateShip()}>
                        <FontAwesomeIcon icon={faSyncAlt} />
                    </div>
                </TooltipUIComponent>
                
                <div style={styles.board}>
                    {
                        Array.from(new Array(121), (e, index) => 
                        <SquareContainer key={`square-opponent-${index}`} id={index} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Radium(ShipArrangeComponent);