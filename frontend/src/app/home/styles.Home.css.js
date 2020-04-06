import global from '../styles.global.css';

let styles = {
    page: {
        width: '100%',
        minHeight: '100%',
        overflow: 'auto'
    },
    header: {
        width: '100%',
        height: '100vh',
        backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.5s',
        zIndex: '100',
        collapse: {
            height: '0vh',
            transition: 'all 0.5s'
        }
    },
    fixedHeader: {
        position: 'fixed',
        zIndex: '-1',
        width: '100%',
        height: '8vh',
        minHeight: '30px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'hsla(0, 0%, 0%, 0)',
        transition: 'all 0.5s',
        logoutButton: {
            fontSize: '3vw',
            marginLeft: 'auto',
            marginRight: '5px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.5s ease-in-out',
            ':hover': {
                color: global.mainColor,
                transition: 'all 0.5s ease-in-out'
            },
            [global.breakPointMedium]: {
                fontSize: '1.5em'
            },
            [global.breakPointLarge]: {
                fontSize: '2em'
            }
        },
        online: {
            color: 'white',
            marginLeft: '5px',
            fontSize: '0.8em',
            marginRight: 'auto',
            [global.breakPointMedium]: {
                fontSize: '0.6em'
            }
        },
        show: {
            backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
            zIndex: '100',
            transition: 'all 0.8s ease-in'
        }

    },
    headerCollapseText: {
        color: 'white',
        fontSize: '1.6em',
        opacity: '0',
        position: 'fixed',
        transition: 'all 0.7s',
        show: {
            opacity: '1',
            transition: 'all 0.7s'
        },
        [global.breakPointMedium]: {
            fontSize: '1em'
        }
    },
    headerButtonsBlock: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '2.5vw',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        collapse: {
            opacity: '0',
            transition: 'all 0.2s'
        },
        [global.breakPointMedium]: {
            fontSize: '1em'
        }
    },
    headerButtons: {
        boxSizing: 'border-box',
        width: '18vw',
        padding: '1.2vw',
        margin: '5px 0',
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0 0 0 0 inset white, 0 0 1px 1px white',
        transition: 'all 0.5s ease-in-out',
        backgroundColor: 'hsla(0, 0%, 0%, 0.4)',
        ':hover': {
            boxShadow: '0 0 0px 2px inset', 
            transition: 'all 0.5s ease-in-out',
            color: global.mainColor
        },
        ':focus': {
            boxShadow: '0 0 0px 2px inset white',
            transition: 'all 0.5s ease-in-out'
        },
        [global.breakPointMedium]: {
            fontSize: '1em',
            width: '7em',
            padding: '10px'
        }
    },
    user: {
        color: global.mainColor
    },
    main: {
        marginTop: 'calc(8vh + 100px)',
        width: '100%',
        height: '100vh',
        left: '0',
        display: 'flex',
        padding: '10px 40px',
        justifyContent: 'flex-start'
    },
    formWrapper: {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '999',
        top: '0',
        left: '0',
        backgroundColor: 'hsla(0, 50%, 50%, 0.1)'
    },
    icon: {
        width: '70px',
        height: '70px',
        opacity: '1',
        transition: 'all 0.5s ease-in-out',
        ':hover': {
            cursor: 'pointer',
            opacity: '0.5',
            transform: 'scale(1.2)',
            transition: 'all 0.5s ease-in-out'
        }
    }
}

export default styles;