WebFont.load({
    google: {
        families: ['Martel Sans:900']
    }
});

import global from '../styles.global.css';

let border = '1px solid black';
let borderRadius = '10px';

let styles = {
    square: {
        backgroundImage: `radial-gradient(circle, white, ${global.shadowColor})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1em',
        overflow: 'hidden',
        shipSquare: global.shipSquare,
        hover: {
            ':hover': {
                backgroundImage: 'none',
                backgroundColor: 'hsla(0, 50%, 50%, 0.5)',
                cursor: 'pointer'
            }
        },
        [global.breakPointMedium]: {
            fontSize: '12px'
        }
    },
    icon: {
        display: 'flex',
        color: 'red',
        zIndex: '99'
    },
    label: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        rowLabel: {
            borderBottom: border,
            borderLeft: border
        },
        columnLabel: {
            borderRight: border,
            borderTop: border
        }
    }
}

export default styles;