import { connect } from 'react-redux';
import SquareComponent from './SquareComponent';
import { bsOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        squares: state.bs.game.squares,
        shipsArranged: state.bs.game.shipsArranged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        takeTurn: (id) => {
            dispatch(bsOperations.takeTurn(id));
        }
    }
}

const SquareContainer = connect(mapStateToProps, mapDispatchToProps)(SquareComponent);
export default SquareContainer;