import global from '../styles.global.css';
import Radium from 'radium';

let pulse = Radium.keyframes({
    '0%': {
        transform: 'scale(0.5)'
    },
    '50%': {
        transform: 'scale(2)'
    },
    '100%': {
        transform: 'scale(0.5)'
    }
});

let styles = {
    page: {
        width: '100%',
        minHeight: '100vh',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        position: 'fixed',
        started: {
            backgroundColor: 'white'
        }
    },
    main: {
        width: '100%',
        height: '100vh',
        display: 'grid',
        position: 'fixed',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    left: {
        color: 'white',
        fontSize: '2em',
        textShadow: `2px 2px 0 hsl(0, 0%, 20%)`,
        gridColumn: '1 / 2',
        backgroundColor: global.playerOneColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [global.breakPointMedium]: {
            fontSize: '1.2em'
        }
    },
    right: {
        color: 'white',
        fontSize: '2em',
        textShadow: `2px 2px 0 hsl(0, 0%, 20%)`,
        gridColumn: '2 / 3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fill: {
            backgroundColor: global.playerTwoColor,
        },
        [global.breakPointMedium]: {
            fontSize: '1.2em'
        }
    },
    displayState: {
        position: 'absolute',
        fontSize: '2em',
        color: 'white',
        waiting: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            icon: global.spinner,
            text: {
                fontSize: '0.4em',
            }
        },
        countdown: {
            fontSize: '2em',
            animation: 'x 1s ease-out 0s 5',
            animationName: pulse,
        }
    }
}

export default styles;