import { connect } from 'react-redux';
import SquareComponent from './SquareComponent';
import { bsOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        squares: state.bs.game.squares,
        shipArrangeScreen: state.bs.game.shipArrangeScreen,
        hoverSquares: state.bs.arrange.hoverSquares,
        isValidHover: state.bs.arrange.isValidHover,
        placedShips: state.bs.arrange.placedShips
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        takeTurn: (id) => {
            dispatch(bsOperations.takeTurn(id));
        },
        showShip: (id) => {
            dispatch(bsOperations.showShip(id));
        },
        placeShip: () => {
            dispatch(bsOperations.placeShip());
        }
    }
}

const SquareContainer = connect(mapStateToProps, mapDispatchToProps)(SquareComponent);
export default SquareContainer;