let styles = {
    page: {
        width: '100%',
        minHeight: '100%',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    finished: {
        width: '100%',
        minHeight: '100%',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '10',
        backgroundColor: 'grey',
        position: 'absolute',
        opacity: '0.5'
    },
    game: {
        width: '35vw',
        height: 'calc(35vw)',
        display: 'grid',
        gridTemplate: 'repeat(3, minmax(0, 1fr)) / repeat(3, minmax(0, 1fr))',
        gridGap: '1px',
        backgroundColor: 'black',
    }
}

export default styles;