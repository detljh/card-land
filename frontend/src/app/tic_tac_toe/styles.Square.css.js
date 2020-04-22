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
        backgroundImage: `radial-gradient(circle, white, ${global.shadowColor})`,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '130px',
        overflow: 'hidden',
        [global.breakPointMedium]: {
            fontSize: 'calc(60vw/3)'
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
        color: 'white',
        transition: 'all 0.2s ease-in'
    },
    squarePlayerOne: {
        backgroundImage: 'none',
        backgroundColor: global.playerOneColor,
        transition: 'all 0.2s ease-in'
    },
    squarePlayerTwo: {
        backgroundImage: 'none',
        backgroundColor: global.playerTwoColor,
        transition: 'all 0.2s ease-in'
    },
    winSquare: {
        backgroundColor: 'hsl(50, 50%, 40%)',
        transition: 'background-color 0.7s ease-in' 
    }
}

export default styles;