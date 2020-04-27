import { connect } from 'react-redux';
import { roomOperations } from '../loading_room/duck';
import AlertUIComponent from './AlertUIComponent';

const mapStateToProps = (state) => {
    return {
        displayAlert: state.room.ui.displayAlert
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeAlert: () => {
            dispatch(roomOperations.displayAlert(false, null));
        }
    }
}

const AlertUIContainer = connect(mapStateToProps, mapDispatchToProps)(AlertUIComponent);
export default AlertUIContainer;