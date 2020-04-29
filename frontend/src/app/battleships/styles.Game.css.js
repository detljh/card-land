import global from '../styles.global.css';

let styles = {
    game: {
        width: '100%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        [global.breakPointMedium]: {
            flexDirection: 'column'
        }
    },
    boardWrapper: {
        width: '100%',
        margin: 'auto',
        minWidth: '300px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20px 0'
    },
    boardTitle: {
        fontStyle: 'bold',
        backgroundColor: 'hsl(170, 50%, 80%)',
        color: 'white',
        boxShadow: '0 0 0 2px white, 0 0 0 4px hsl(170, 50%, 80%)',
        borderRadius: '5px',
        padding: '5px',
        cursor: 'default'
    },
    board: {
        margin: '20px 0',
        height: '407px',
        width: '407px',
        display: 'grid',
        gridTemplate: 'repeat(11, minmax(0, 1fr)) / repeat(11, minmax(0, 1fr))',
        boxShadow: `0 0 7px 4px ${global.shadowColor}`,
        [global.breakPointLarge]: {
            width: '330px',
            height: '330px' 
        },
        [global.breakPointMedium]: {
            width: '60vw',
            height: 'calc(60vw)',
            minWidth: '275px',
            minHeight: '275px' 
        }
    },
    disabled: {
        zIndex: '999',
        position: 'absolute'
    }
}

export default styles;