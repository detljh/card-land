import { connect } from 'react-redux';
import GameHeaderComponent from './GameHeaderComponent';

const mapStateToProps = (state) => {
    return {
        user: state.home.auth.user,
        opponent: state.room.room.opponent,
        isTurn: state.room.room.players.length === 2 ? (state.room.room.players[state.room.room.currentPlayerIndex].username === state.home.auth.user.username) : false
    }
}

const GameHeaderContainer = connect(mapStateToProps, null)(GameHeaderComponent);
export default GameHeaderContainer;