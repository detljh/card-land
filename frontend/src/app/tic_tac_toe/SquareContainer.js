import { connect } from 'react-redux';
import SquareComponent from './SquareComponent';
import { ticOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        currentIcon: state.tic.game.currentIcon,
        squares: state.tic.game.squares,
        winSquares: state.tic.game.winSquares
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        takeTurn: (id) => {
            dispatch(ticOperations.takeTurn(id));
        }
    }
}

const SquareContainer = connect(mapStateToProps, mapDispatchToProps)(SquareComponent);
export default SquareContainer;