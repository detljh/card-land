import global from '../styles.global.css';

let style = {
    playerInfo: {
        boxShadow: '0 0 3px 1px white',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '10px',
        opacity: '1',
        transition: 'all 0.5s',
        turn: {
            opacity: '1',
            transition: 'all 0.5s'
        }
    },
    turnIndicator: {
        playerOne: {
            color: global.playerOneColor
        },
        playerTwo : {
            color: global.playerTwoColor
        }
    },
    spinner: Object.assign({}, global.spinner, {
        position: 'absolute',
        opacity: '0.2',
        fontSize: '2.3em',
        bottom: '10%'
    })
}

export default style;