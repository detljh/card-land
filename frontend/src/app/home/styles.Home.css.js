let styles = {
    page: {
        width: '100vw',
        minHeight: '110vh',
        overflow: 'auto',
    },
    header: {
        width: '100vw',
        height: '100vh',
        left: '0',
        top: '0',
        backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'height 0.5s',
    },
    headerCollapse: {
        marginTop: '10vh',
        height: '20vh',
        transition: 'height 0.5s',
    },
    headerButtons: {
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
    headerButtonsBlock: {
        display: 'flex',
        flexDirection: 'column',
        collapse: {
            marginTop: '-20vh',
            opacity: '0.1',
            transition: 'all 0.5s'
        }
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
        width: '100%',
        height: '100%',
        top: '0',
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