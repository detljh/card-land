import global from '../styles.global.css';

let styles = {
    page: {
        width: '100%',
        height: '100vh',
    },
    disabledPage: {
        width: '100%',
        height: '100vh',
        zIndex: '999',
        position: 'absolute',
        finished: {
            backgroundColor: 'hsla(0, 0%, 50%, 0.5)',
        }
    },
    prompt: Object.assign({}, global.popupBlock, {
        padding: '10px',
        promptButtonWrapper: {
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%',
            button: global.popupButtons
        }
    }),
    main: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '60px',
    },
    game: {
        margin: 'auto',
        width: '60vw',
        height: 'calc(60vw)',
        display: 'grid',
        gridTemplate: 'repeat(3, minmax(0, 1fr)) / repeat(3, minmax(0, 1fr))',
        boxShadow: `0 0 0 2px white, 0 0 7px 4px ${global.ticTacToeShadowColor}`,
        borderRadius: '10px',
        [global.breakPointLarge]: {
            height: '400px',
            width: '400px'
        }
    },
    header: {
        width: '100%',
        height: '60px',
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '5px',
        backgroundColor: 'hsl(0, 10%, 90%)'
    },
    displayAlert: Object.assign({}, global.alert, {
        margin: 'auto'
    }),
    endGameBlock: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: '1000',
        alert: Object.assign({}, global.alert, {
            position: 'absolute',
            marginTop: '20vh'
        })
    },
    
    spinner: global.spinner

}

export default styles;