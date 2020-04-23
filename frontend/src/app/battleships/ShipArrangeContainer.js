import { connect } from 'react-redux';
import ShipArrangeComponent from './ShipArrangeComponent';
import { bsOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        displayReadyButton: state.bs.ui.displayReadyButton
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        rotateShip: () => {
            dispatch(bsOperations.rotateShip());
        },
        ready: () => {
            dispatch();
        }
    }
}

const ShipArrangeContainer = connect(mapStateToProps, mapDispatchToProps)(ShipArrangeComponent);
export default ShipArrangeContainer;