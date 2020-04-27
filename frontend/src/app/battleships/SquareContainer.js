import { connect } from 'react-redux';
import SquareComponent from './SquareComponent';
import { bsOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        shipArrangeScreen: state.bs.game.shipArrangeScreen,
        hoverSquares: state.bs.arrange.hoverSquares,
        isValidHover: state.bs.arrange.isValidHover,
        placedShips: state.bs.arrange.placedShips,
        shipSelected: state.bs.arrange.shipSelected,
        // hitSquares: !state.bs.game.shipArrangeScreen ? state.home.auth.user.username === state.bs.game.playerOneState.username ? playerOneState.hitSquares : playerTwoState.hitSquares : []
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