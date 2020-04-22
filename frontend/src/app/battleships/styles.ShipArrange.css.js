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
        margin: '10px',
        height: '407px',
        width: '407px',
        display: 'grid',
        gridTemplate: 'repeat(11, minmax(0, 1fr)) / repeat(11, minmax(0, 1fr))',
        boxShadow: `0 0 7px 4px ${global.shadowColor}`,
        [global.breakPointMedium]: {
            width: '60vw',
            height: 'calc(60vw)' 
        }
    },
    menu: {
        margin: '20px 20px 20px 0',
        flexBasis: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },
    option: {
        margin: '2px 20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        title: {
            fontSize: '1.5em',
            marginRight: 'auto',
            [global.breakPointMedium]: {
                margin: '0',
                textAlign: 'center',
                fontSize: '1em'
            },
        },
        ship: {
            margin: '4px 10px',
            display: 'grid',
            boxShadow: `0 0 5px 2px ${global.shadowColor}`,
            height: 'calc(407px / 11)',
            cursor: 'pointer',
            square: {
                boxShadow: `0 0 0px 1px white`,
                backgroundColor: 'hsl(170, 50%, 80%)'
            },
            carrier: {
                width: 'calc(407px / 11 * 5)',
                gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
                [global.breakPointMedium]: {
                    width: 'calc(60vw / 11 * 5)',
                    height: 'calc(60vw / 11)'
                }
            },
            battleship: {
                width: 'calc(407px / 11 * 4)',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                [global.breakPointMedium]: {
                    width: 'calc(60vw / 11 * 4)',
                    height: 'calc(60vw / 11)'
                }
            },
            cruiser: {
                width: 'calc(407px / 11 * 3)',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                [global.breakPointMedium]: {
                    width: 'calc(60vw / 11  * 3)',
                    height: 'calc(60vw / 11)'
                }
            },
            submarine: {
                width: 'calc(407px / 11 * 2)',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                [global.breakPointMedium]: {
                    width: 'calc(60vw / 11 * 2)',
                    height: 'calc(60vw / 11)'
                }
            },
            clicked: {
                opacity: '0.4'
            }
        },
        [global.breakPointLarge]: {
            flexDirection: 'column',
        }
    }
}

export default styles;