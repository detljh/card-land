import React from 'react';
import Radium from 'radium';
import { CSSTransition } from 'react-transition-group';
import '../transitions.scss'
import styles from './styles.GameUI.css';

class TooltipUIComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTooltip: false
        }
    }

    setShowTooltip(value) {
        this.setState({
            showTooltip: value
        });
    }

    render() {
        let tooltipStyle = Object.assign({}, styles.tooltip,
            this.props.position === "top" && styles.tooltip.top
        );
        
        let arrowStyle = Object.assign({}, styles.tooltip.arrow,
            this.props.position === "top" && styles.tooltip.arrow.top
        );

        return (
            <div style={styles.tooltipContainer}>
                <CSSTransition
                    in={this.state.showTooltip}
                    timeout={500}
                    classNames="fade500"
                    unmountOnExit>
                        <div style={tooltipStyle}>
                            <div style={styles.tooltip.text}>Rotate ship</div>
                            <div style={arrowStyle} />
                        </div>
                </CSSTransition>
                <div onMouseOver={() => this.setShowTooltip(true)} onMouseLeave={() => this.setShowTooltip(false)}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Radium(TooltipUIComponent);