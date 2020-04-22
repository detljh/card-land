import React from 'react';
import Radium from 'radium';
import SquareContainer from './SquareContainer';
import styles from './styles.ShipArrange.css';
import ShipComponent from './ShipComponent';

class ShipArrangeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    handleClick() {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }
    
    render() {
        return (
            <div style={styles.game}>
                <div style={styles.menu}>
                    <div style={styles.option}>
                        <span style={styles.option.title}>Aircraft Carrier</span>
                        <ShipComponent type='carrier' />
                    </div>
                    <div style={styles.option}>
                        <span style={styles.option.title}>Battleship</span>
                        <ShipComponent type='battleship' />
                    </div>
                    <div style={styles.option}>
                        <span style={styles.option.title}>Cruiser</span>
                        <ShipComponent type='cruiser' />
                        <ShipComponent type='cruiser' />
                    </div>
                    <div style={styles.option}>
                        <span style={styles.option.title}>Submarine</span>
                        <ShipComponent type='submarine' />
                        <ShipComponent type='submarine' />
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