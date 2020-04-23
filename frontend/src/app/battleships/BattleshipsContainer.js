import { connect } from 'react-redux';
import BattleshipsComponent from './BattleshipsComponent';
import { roomOperations } from '../loading_room/duck';

const mapStateToProps = (state) => {
    return {
        shipArrangeScreen: state.bs.game.shipArrangeScreen,
        queued: state.home.socket.queued
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        leave: () => {
            dispatch(roomOperations.leave());
        }
    }
}

const BattleshipsContainer = connect(mapStateToProps, mapDispatchToProps)(BattleshipsComponent);
export default BattleshipsContainer;