import global from '../styles.global.css';

let styles = {
    disabledPage: {
        width: '100%',
        height: '100vh',
        zIndex: '999',
        position: 'fixed',
        display: 'flex',
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
    header: {
        width: '100%',
        height: '60px',
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        padding: '5px',
        zIndex: '9999',
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