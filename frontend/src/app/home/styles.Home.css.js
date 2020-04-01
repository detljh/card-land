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
        marginTop: '0',
        transition: 'all 0.5s',
        zIndex: '999',
        collapse: {
            marginTop: '-90vh',
            transition: 'all 0.5s'
        }
    },
    fixedHeader: {
        position: 'fixed',
        zIndex: '999',
        width: '100%',
        height: '50px',
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
                color: 'red',
                transition: 'all 0.5s ease-in-out'
            }
        },
        online: {
            color: 'white',
            marginLeft: '5px',
            fontSize: '0.8em',
            marginRight: 'auto'
        },
        show: {
            backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
            transition: 'all 0.8s ease-in'
        }
    },
    headerCollapseText: {
        position: 'fixed',
        color: 'white',
        fontSize: '2vw',
        opacity: '0',
        transition: 'all 0.7s',
        show: {
            opacity: '1',
            transition: 'all 0.7s'
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
            opacity: '0.1',
            transition: 'all 0.5s'
        },
        
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
            boxShadow: '0 0 0px 2px inset red',
            transition: 'all 0.5s ease-in-out',
            color: 'red'
        },
        ':focus': {
            boxShadow: '0 0 0px 2px inset white',
            transition: 'all 0.5s ease-in-out'
        },
    },
    user: {
        color: 'red'
    },
    main: {
        marginTop: '100px',
        width: '100%',
        height: '100vh',
        left: '0'
    },
    formWrapper: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex: '10',
        top: '0',
        left: '0',
        backgroundColor: 'hsla(0, 0%, 0%, 0.1)'
    }
}

export default styles;