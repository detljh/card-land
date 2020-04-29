import global from '../styles.global.css';

let styles = {
    game: {
        width: '100%',
        minWidth: '300px',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        [global.breakPointMedium]: {
            flexDirection: 'column'
        }
    },
    board: {
        margin: '10px 10px 10px 30px',
        height: '407px',
        width: '407px',
        display: 'grid',
        gridTemplate: 'repeat(11, minmax(0, 1fr)) / repeat(11, minmax(0, 1fr))',
        boxShadow: `0 0 7px 4px ${global.shadowColor}`,
        [global.breakPointMedium]: {
            width: '60vw',
            height: 'calc(60vw)',
            minWidth: '275px',
            minHeight: '275px' 
        }
    },
    readyButton: {
        backgroundColor: 'hsl(100, 50%, 80%)',
        padding: '10px',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'fixed',
        top: '100px',
        left: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 0px 2px white, 0 0 0px 4px hsl(100, 50%, 80%)',
        color: 'hsl(100, 50%, 10%)',
        transition: 'all 0.5s',
        ':hover': {
            boxShadow: '0 0 0px 2px white, 0 0 0px 5px hsl(100, 50%, 40%)',
            transition: 'all 0.5s'
        }
    },
    menu: {
        margin: '20px 5px 20px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },
    rotateShipIcon: {
        fontSize: '1.5em',
        cursor: 'pointer',
        transition: 'all 0.5s',
        ':hover': {
            transform: 'scale(1.1)',
            color: 'red',
            transition: 'all 0.5s'
        }
    },
    option: {
        margin: '2px ',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        title: {
            fontSize: '1.5em',
            marginRight: 'auto',
            [global.breakPointLarge]: {
                margin: '0',
                textAlign: 'center',
            },
            [global.breakPointMedium]: {
                fontSize: '1em'
            }
        },
        ship: {
            margin: '4px 10px',
            display: 'grid',
            boxShadow: `0 0 5px 2px ${global.shadowColor}`,
            height: 'calc(407px / 11)',
            cursor: 'pointer',
            square: global.shipSquare,
            carrier: {
                width: 'calc(407px / 11 * 5)',
                gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
                [global.breakPointMedium]: {
                    width: 'calc(60vw / 11 * 5)',
                    height: 'calc(60vw / 11)',
                    minWidth: 'calc(275px / 11 * 5)',
                    minHeight: 'calc(275px / 11)'
                }
            },
            battleship: {
                width: 'calc(407px / 11 * 4)',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                [global.breakPointMedium]: {
                    width: 'calc(60vw / 11 * 4)',
                    height: 'calc(60vw / 11)',
                    minWidth: 'calc(275px / 11 * 4)',
                    minHeight: 'calc(275px / 11)'
                }
            },
            cruiser: {
                width: 'calc(407px / 11 * 3)',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                [global.breakPointMedium]: {
                    width: 'calc(60vw / 11  * 3)',
                    height: 'calc(60vw / 11)',
                    minWidth: 'calc(275px / 11 * 3)',
                    minHeight: 'calc(275px / 11)'
                }
            },
            submarine: {
                width: 'calc(407px / 11 * 2)',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                [global.breakPointMedium]: {
                    width: 'calc(60vw / 11 * 2)',
                    height: 'calc(60vw / 11)',
                    minWidth: 'calc(275px / 11 * 2)',
                    minHeight: 'calc(275px / 11)'
                }
            },
            clicked: {
                backgroundColor: 'hsl(0, 0%, 80%)'
            }
        },
        clicked: {
            transform: 'scale(1.2)'
        },
        placed: {
            opacity: 0.4,
            transform: 'scale(0.8)'
        },
        [global.breakPointLarge]: {
            flexDirection: 'column',
        }
    }
}

export default styles;