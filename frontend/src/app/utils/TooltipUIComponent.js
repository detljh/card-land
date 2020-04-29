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
            this.props.position === "top" && styles.tooltip.top,
            this.props.position === "bottom" && styles.tooltip.bottom,
            this.props.position === "left" && styles.tooltip.left,
            this.props.position === "right" && styles.tooltip.right
        );
        
        let arrowStyle = Object.assign({}, styles.tooltip.arrow,
            this.props.position === "top" && styles.tooltip.arrow.top,
            this.props.position === "bottom" && styles.tooltip.arrow.bottom,
            this.props.position === "left" && styles.tooltip.arrow.left,
            this.props.position === "right" && styles.tooltip.arrow.right
        );

        let textStyle = Object.assign({}, styles.tooltip.text,
            this.props.position === "top" && styles.tooltip.text.top,
            this.props.position === "left" && styles.tooltip.text.left
        );

        return (
            <div style={styles.tooltipContainer}>
                <CSSTransition
                    in={this.state.showTooltip}
                    timeout={500}
                    classNames="fade500"
                    unmountOnExit>
                        <div style={tooltipStyle}>
                            <div style={textStyle}>{this.props.text}</div>
                            <div style={arrowStyle} />
                        </div>
                </CSSTransition>
                <div style={{margin: '5px'}} onMouseOver={() => this.setShowTooltip(true)} onMouseLeave={() => this.setShowTooltip(false)}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Radium(TooltipUIComponent);