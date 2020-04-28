import global from '../styles.global.css';

let styles = {
    page: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex'
    },
    main: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '60px',
        padding: '20px 5px',
        minWidth: '200px'
    },
    game: {
        margin: 'auto',
        height: '350px',
        width: '350px',
        display: 'grid',
        gridTemplate: 'repeat(3, minmax(0, 1fr)) / repeat(3, minmax(0, 1fr))',
        boxShadow: `0 0 0 2px white, 0 0 7px 4px ${global.shadowColor}`,
        borderRadius: '10px',
        [global.breakPointMedium]: {
            width: '60vw',
            height: 'calc(60vw)',
            minWidth: '200px',
            minHeight: '200px'
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
        zIndex: '99',
        backgroundColor: 'hsl(0, 10%, 90%)'
    }
}

export default styles;