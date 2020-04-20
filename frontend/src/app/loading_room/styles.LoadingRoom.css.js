import global from '../styles.global.css';

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
        gridColumn: '1 / 2',
        backgroundColor: global.playerOneColor,
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
            backgroundColor: global.playerTwoColor
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
                fontSize: '0.4em'
            }
        },
        countdown: {

        }
    }
}

export default styles;