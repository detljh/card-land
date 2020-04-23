import React from 'react';
import Radium from 'radium';
import SquareContainer from './SquareContainer';
import styles from './styles.ShipArrange.css';
import ShipContainer from './ShipContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import CSSTransition from 'react-transition-group/CSSTransition';
import '../transitions.scss'

class ShipArrangeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRotateTooltip: false
        }
    }

    setShowRotateTooltip(value) {
        this.setState({
            showRotateTooltip: value
        });
    }
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

                <div style={styles.tooltipContainer}>
                    <CSSTransition
                        in={this.state.showRotateTooltip}
                        timeout={500}
                        classNames="fade500"
                        unmountOnExit>
                            <div style={styles.tooltip}>
                                <div style={styles.tooltip.text}>Rotate ship</div>
                                <div style={styles.tooltip.arrow} />
                            </div>
                    </CSSTransition>
                    <div style={styles.rotateShipIcon} onClick={() => this.props.rotateShip()} onMouseOver={() => this.setShowRotateTooltip(true)} onMouseLeave={() => this.setShowRotateTooltip(false)}>
                        <FontAwesomeIcon icon={faSyncAlt} />
                    </div>
                </div>
                
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