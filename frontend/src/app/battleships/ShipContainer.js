import { connect } from 'react-redux';
import ShipComponent from './ShipComponent';
import { bsOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        shipSelected: state.bs.arrange.shipSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectShip: (id) => {
            dispatch(bsOperations.selectShip(id));
        }
    }
}

const ShipContainer = connect(mapStateToProps, mapDispatchToProps)(ShipComponent);
export default ShipContainer;