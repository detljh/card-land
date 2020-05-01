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
        backgroundColor: 'hsl(0, 10%, 90%)',
        contentWrapper: {
            height: '100%',
            width: '100%',
            minWidth: '350px',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-evenly'
        }
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
    spinner: global.spinner,
    tooltipContainer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: '999'
    },
    tooltip: {
        position: 'absolute',
        width: '300px',
        display: 'flex',
        top: {
            bottom: '115%',
            justifyContent: 'center'
        },
        bottom: {
            top: '115%',
            justifyContent: 'center'
        },
        left: {
            right: '130%',
            alignItems: 'center',
        },
        right: {
            left: '130%',
            alignItems: 'center'
        },
        text: {
            padding: '5px',
            backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
            color: 'white',
            fontSize: '0.8em',
            textAlign: 'center',
            display: 'inline-block',
            position: 'absolute',
            top: {
                bottom: '100%'
            },
            left: {
                right: '0%'
            }
        },
        arrow: {
            position: 'absolute',
            top: {
                borderTop: '7px solid hsla(0, 0%, 0%, 0.9)',
                borderBottom: '7px solid transparent',
                borderLeft: '7px solid transparent',
                borderRight: '7px solid transparent',
                left: '50%',
                marginLeft: '-7px',
                top: '100%'
            },
            bottom: {
                borderTop: '7px solid transparent',
                borderBottom: '7px solid hsla(0, 0%, 0%, 0.9)',
                borderLeft: '7px solid transparent',
                borderRight: '7px solid transparent',
                left: '50%',
                marginLeft: '-7px',
                bottom: '100%'
            },
            left: {
                borderTop: '7px solid transparent',
                borderBottom: '7px solid transparent',
                borderLeft: '7px solid hsla(0, 0%, 0%, 0.9)',
                borderRight: '7px solid transparent',
                top: '50%',
                marginTop: '-7px',
                left: '100%'
            },
            right: {
                borderTop: '7px solid transparent',
                borderBottom: '7px solid transparent',
                borderLeft: '7px solid transparent',
                borderRight: '7px solid hsla(0, 0%, 0%, 0.9)',
                top: '50%',
                marginTop: '-7px',
                right: '100%'
            }
        }
    }
}

export default styles;