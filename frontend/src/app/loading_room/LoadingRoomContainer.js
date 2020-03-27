import { connect } from 'react-redux';
import LoadingRoomComponent from './LoadingRoomComponent';
import { roomOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        connected: state.home.auth.connected,
        players: state.room.players,
        countdown: state.room.countdown,
        start: state.room.start,
        room: state.home.socket.room
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