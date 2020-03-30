import { connect } from 'react-redux';
import LoadingRoomComponent from './LoadingRoomComponent';
import { roomOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        connected: state.home.auth.connected,
        players: state.room.players,
        countdown: state.room.countdown,
        started: state.room.started,
        room: state.home.socket.room,
        user: state.home.auth.user,
        opponent: state.room.opponent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        join: () => {
            dispatch(roomOperations.join());
        },
        leave: () => {
            dispatch(roomOperations.leave());
        }
    }
}

const LoadingRoomContainer = connect(mapStateToProps, mapDispatchToProps)(LoadingRoomComponent);
export default LoadingRoomContainer;