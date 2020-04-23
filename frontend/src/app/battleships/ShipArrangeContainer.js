import { connect } from 'react-redux';
import ShipArrangeComponent from './ShipArrangeComponent';
import { bsOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        rotateShip: () => {
            dispatch(bsOperations.rotateShip());
        }
    }
}

const ShipArrangeContainer = connect(mapStateToProps, mapDispatchToProps)(ShipArrangeComponent);
export default ShipArrangeContainer;