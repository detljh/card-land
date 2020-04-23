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
    readyButton: {
        backgroundColor: 'hsl(100, 50%, 80%)',
        padding: '10px',
        display: 'inline-block',
        cursor: 'pointer',
        position: 'absolute',
        top: '100px',
        left: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 3px 2px hsl(100, 50%, 40%)',
        color: 'hsl(100, 50%, 10%)',
        transition: 'all 0.5s',
        ':hover': {
            boxShadow: '0 0 3px 2px hsl(100, 50%, 40%), 0 0 1px 2px inset hsl(100, 50%, 40%)',
            transition: 'all 0.5s'
        }
    },
    menu: {
        margin: '20px 5px 20px 0',
        flexBasis: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        [global.breakPointLarge]: {
        }
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
    tooltipContainer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    tooltip: {
        position: 'absolute',
        bottom: '115%',
        display: 'inline-block',
        text: {
            padding: '5px',
            backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
            color: 'white',
            fontSize: '0.8em',
            textAlign: 'center',
            zIndex: '99',
            whiteSpace: 'nowrap'
        },
        arrow: {
            position: 'absolute',
            left: '50%',
            marginLeft: '-7px',
            top: '100%',
            borderTop: '7px solid hsla(0, 0%, 0%, 0.9)',
            borderBottom: '7px solid transparent',
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
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