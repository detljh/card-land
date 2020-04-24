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
            height: 'calc(60vw)' 
        }
    },
    disabled: {
        zIndex: '999',
        position: 'absolute',
        backgroundColor: 'red'
    }
}

export default styles;