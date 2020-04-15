import { connect } from 'react-redux';
import LoadingRoomComponent from './LoadingRoomComponent';
import { roomOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        connected: state.home.auth.connected,
        players: state.room.room.players,
        countdown: state.room.room.countdown,
        started: state.room.room.started,
        queued: state.home.socket.queued,
        user: state.home.auth.user,
        opponent: state.room.room.opponent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        leave: () => {
            dispatch(roomOperations.leave());
        }
    }
}

const LoadingRoomContainer = connect(mapStateToProps, mapDispatchToProps)(LoadingRoomComponent);
export default LoadingRoomContainer;