import React from 'react';

class ExpireComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
        this.setTimer = this.setTimer.bind(this);
    }

    componentDidUpdate(nextProps) {
        if (nextProps.children != this.props.children) {
            this.setTimer();
            this.setState({
                visible: true
            });
        }
    }

    componentDidMount() {
        this.setTimer();
    }

    setTimer() {
        if (this._timer != null) {
            clearTimeout(this._timer);
        }

        this._timer = setTimeout(() => {
            this.setState({
                visible: false
            });
            this._timer = null;
        }, this.props.delay);
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
    }

    render() {
        return (
            this.state.visible &&
            <div style={{width: '100%', height: '100%', display: 'flex'}}>{this.props.children}</div>
        )
    }
}

export default ExpireComponent;