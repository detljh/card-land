import React from 'react';
import styles from './styles.Square.css';

class SquareComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            clicked: false
        };
    }

    setHover(value) {
        if (this.state.clicked) {
            return;
        }

        this.setState({
            hover: value
        });
    }

    click() {
        this.setState({
            clicked: true,
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
                    this.state.clicked && this.props.squares[this.props.id]
                }
            </div>
        )
    }
}

export default SquareComponent;