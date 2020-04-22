import { connect } from 'react-redux';
import GameComponent from './GameComponent';
import { roomOperations } from '../loading_room/duck';

const mapStateToProps = (state) => {
    return {
        finished: state.tic.game.finished,
        opponent: state.room.room.opponent,
        isTurn: state.room.room.players.length === 2 ? (state.room.room.players[state.room.room.currentPlayerIndex].username === state.home.auth.user.username) : false,
        queued: state.home.socket.queued
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(GameComponent);
export default GameContainer;