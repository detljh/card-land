import React from 'react';
import styles from './styles.Square.css';

class SquareComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    setHover(value) {
        if (this.props.squares[this.props.id]) {
            return;
        }

        this.setState({
            hover: value
        });
    }

    click() {
        if (this.props.squares[this.props.id]) {
            return;
        }
        
        this.setState({
            hover: false
        });
        this.props.takeTurn(this.props.id);
    }

    render() {
        return (
            <div style={styles.square} onMouseEnter={() => this.setHover(true)} onMouseLeave={() => this.setHover(false)} onClick = {() => this.click()}>
                {
                    this.state.hover && this.props.currentIcon
                }
                {
                    this.props.squares[this.props.id] && this.props.squares[this.props.id]
                }
            </div>
        )
    }
}

export default SquareComponent;