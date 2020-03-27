let styles = {
    page: {
        width: '100%',
        height: '100%',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    game: {
        width: '35vw',
        height: 'calc(35vw)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridRowColumns: 'repeat(3, 1fr)',
        gridGap: '1px',
        backgroundColor: 'black'
    }
}

export default styles;