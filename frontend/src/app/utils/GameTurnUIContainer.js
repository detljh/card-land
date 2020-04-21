import { connect } from 'react-redux';
import GameTurnUIComponent from './GameTurnUIComponent';

const mapStateToProps = (state) => {
    return {
        opponent: state.room.room.opponent
    }
}

const GameTurnUIContainer = connect(mapStateToProps, null)(GameTurnUIComponent);
export default GameTurnUIContainer;