import Radium from 'radium';

let spin = Radium.keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
})

let styles = {
    page: {
        width: '100%',
        minHeight: '100vh',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        position: 'fixed'
    },
    main: {
        width: '100%',
        height: '100vh',
        display: 'grid',
        position: 'fixed',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    left: {
        gridColumn: '1 / 2',
        backgroundColor: 'hsl(0, 100%, 70%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        gridColumn: '2 / 3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fill: {
            backgroundColor: 'hsl(220, 80%, 60%)'
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
            icon: {
                animation: 'x 1.5s ease-in-out 0s infinite',
                animationName: spin,
            },
            text: {
                fontSize: '0.4em'
            }
        },
        countdown: {

        }
    }
}

export default styles;