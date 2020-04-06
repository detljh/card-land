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
        fontSize: 'calc(35vw/3)',
        overflow: 'hidden',
    },
    square0: {
        borderBottom: border,
        borderRight: border,
        borderTopLeftRadius: borderRadius
    },
    square1: {
        border: border,
        borderTop: 'none'
    },
    square2: {
        borderBottom: border,
        borderTopRightRadius: borderRadius,
        borderLeft: border
    },
    square3: {
        border: border,
        borderLeft: 'none'
    },
    square4: {
        border: border,
    },
    square5: {
        border: border,
        borderRight: 'none'
    },
    square6: {
        borderRight: border,
        borderTop: border,
        borderBottomLeftRadius: borderRadius
    },
    square7: {
        border: border,
        borderBottom: 'none'
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

    }
}

export default styles;