import { connect } from 'react-redux';
import GameAlertUIComponent from './GameAlertUIComponent';

const mapStateToProps = (state) => {
    return {
        opponent: state.room.room.opponent
    }
}

const GameAlertUIContainer = connect(mapStateToProps, null)(GameAlertUIComponent);
export default GameAlertUIContainer;