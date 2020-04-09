WebFont.load({
    google: {
        families: ['Martel Sans:900']
    }
});

import global from '../styles.global.css';

let border = '3px solid hsl(0, 0%, 95%)';
let borderRadius = '10px';

let styles = {
    square: {
        backgroundImage: `radial-gradient(circle, white, ${global.ticTacToeShadowColor})`,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 'calc(60vw/3)',
        overflow: 'hidden',
        [global.breakPointLarge]: {
            fontSize: '130px'
        }
    },
    square0: {
        borderBottom: border,
        borderRight: border,
        borderTopLeftRadius: borderRadius
    },
    square1: {
        borderBottom: border,
        borderRight: border,
        borderLeft: border
    },
    square2: {
        borderBottom: border,
        borderTopRightRadius: borderRadius,
        borderLeft: border
    },
    square3: {
        borderBottom: border,
        borderRight: border,
        borderTop: border
    },
    square4: {
        border: border
    },
    square5: {
        borderBottom: border,
        borderLeft: border,
        borderTop: border
    },
    square6: {
        borderRight: border,
        borderTop: border,
        borderBottomLeftRadius: borderRadius
    },
    square7: {
        borderLeft: border,
        borderTop: border,
        borderRight: border
    },
    square8: {
        borderLeft: border,
        borderTop: border,
        borderBottomRightRadius: borderRadius
    },
    iconHover: {
        opacity: '0.3'
    },
    iconPlaced: {
        color: 'white'
    },
    squarePlayerOne: {
        backgroundImage: 'none',
        backgroundColor: global.playerOneColor
    },
    squarePlayerTwo: {
        backgroundImage: 'none',
        backgroundColor: global.playerTwoColor
    },
    winSquare: {
        backgroundColor: 'hsl(50, 50%, 40%)',
        transition: 'background-color 0.7s ease-in' 
    }
}

export default styles;