let styles = {
    page: {
        width: '100%',
        height: '100vh',
    },
    disabledPage: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '10',
        position: 'absolute',
        finished: {
            backgroundColor: 'hsla(0, 0%, 50%, 0.5)',
        }
    },
    prompt: {
        backgroundColor: 'white',
        width: '30%',
        height: '30%',
        promptButtonWrapper: {
            display: 'flex',
            button: {
                cursor: 'pointer'
            }
        }
    },
    main: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
    },
    game: {
        margin: 'auto',
        width: '35vw',
        height: 'calc(35vw)',
        display: 'grid',
        gridTemplate: 'repeat(3, minmax(0, 1fr)) / repeat(3, minmax(0, 1fr))',
    },
    header: {
        width: '100%',
        height: '50px',
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '5px',
        backgroundColor: 'hsl(0, 10%, 90%)'
    }
}

export default styles;