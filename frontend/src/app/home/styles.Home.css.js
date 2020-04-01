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
        collapse: {
            position: 'fixed',
            marginTop: '-90vh',
            transition: 'all 0.5s',
        }
    },
    headerButtonsBlock: {
        display: 'flex',
        flexDirection: 'column',
        collapse: {
            opacity: '0.1',
            transition: 'all 0.5s'
        }
    },
    headerButtons: {
        boxSizing: 'border-box',
        width: '20vw',
        fontSize: 'calc(20vw/7)',
        textAlign: 'center',
        padding: '1.2vw',
        margin: '5px 0',
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0 0 0 0 inset white, 0 0 1px 1px white',
        transition: 'all 0.5s ease-in-out',
        color: 'white',
        backgroundColor: 'hsla(0, 0%, 0%, 0.4)',
        ':hover': {
            boxShadow: '0 0 0px 2px inset white',
            transition: 'all 0.5s ease-in-out'
        },
        ':focus': {
            boxShadow: '0 0 0px 2px inset white',
            transition: 'all 0.5s ease-in-out'
        },
    },
    logoutButton: {
        fontSize: '4vw',
        position: 'fixed',
        right: '5px',
        top: '5px',
        color: 'white',
        cursor: 'pointer',
        ':hover': {
            transform: 'scale(1.1)',
            transition: 'all 0.5s ease-in-out'
        }
    },
    main: {
        marginTop: '30vh',
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