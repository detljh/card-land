import React from 'react';
import Radium from 'radium';
import styles from './styles.ShipArrange.css';

class ShipComponent extends React.Component {
    render() {
        let shipStyle = Object.assign({}, styles.option.ship,
            this.props.type === 'carrier' && styles.option.ship.carrier,
            this.props.type === 'battleship' && styles.option.ship.battleship,
            this.props.type === 'cruiser' && styles.option.ship.cruiser,
            this.props.type === 'submarine' && styles.option.ship.submarine,
            this.props.clicked && styles.option.ship.clicked
        );
        let numSquares = 
            this.props.type === 'carrier' ? 5 :
            this.props.type === 'battleship' ? 4 :
            this.props.type === 'cruiser' ? 3 :
            2;
        return (
            <div style={shipStyle}>
                {
                    Array.from(new Array(numSquares), (e, index) => 
                        <div key={`${this.props.type}-${index}`} style={styles.option.ship.square} />
                    )
                }
            </div>
        )
    }
}

export default Radium(ShipComponent);