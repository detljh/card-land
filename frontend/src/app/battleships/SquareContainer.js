import { connect } from 'react-redux';
import SquareComponent from './SquareComponent';
import { bsOperations } from './duck';
import { roomOperations } from '../loading_room/duck';

const mapStateToProps = (state) => {
    return {
        shipArrangeScreen: state.bs.game.shipArrangeScreen,
        hoverSquares: state.bs.arrange.hoverSquares,
        isValidHover: state.bs.arrange.isValidHover,
        placedShips: state.bs.arrange.placedShips,
        oppPlacedShips: !state.bs.game.shipArrangeScreen ? state.home.auth.user.username === state.bs.game.playerOneState.username ? state.bs.game.playerTwoState.placedShips : state.bs.game.playerOneState.placedShips : [],
        shipSelected: state.bs.arrange.shipSelected,
        // squares that player hit on opponent's board
        hitSquares: !state.bs.game.shipArrangeScreen ? state.home.auth.user.username === state.bs.game.playerOneState.username ? state.bs.game.playerOneState.hitSquares : state.bs.game.playerTwoState.hitSquares : [],
        // squares that opponent hit on player's board
        ownHitSquares: !state.bs.game.shipArrangeScreen ? state.home.auth.user.username === state.bs.game.playerOneState.username ? state.bs.game.playerTwoState.hitSquares : state.bs.game.playerOneState.hitSquares : [],
        shipsDestroyed: !state.bs.game.shipArrangeScreen ? state.home.auth.user.username === state.bs.game.playerOneState.username ? state.bs.game.playerOneState.shipsDestroyed : state.bs.game.playerTwoState.shipsDestroyed : []
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