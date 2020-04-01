import global from '../styles.global.css';

let styles = {
    block: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        minWidth: '200px',
        backgroundColor: 'hsl(0, 0%, 95%)',
        boxShadow: '0 0 20px 3px, 0 0 5px 1px inset',
        color: 'hsl(0, 0%, 60%)',
        borderRadius: '5px',
        margin: 'auto',
        register: {
            height: '350px'
        },
        [global.breakPointMedium]: {
            
        }
    },
    header: {
        marginBottom: 'auto',
        padding: '10px',
        width: '100%',
        display: 'flex',
        boxSizing: 'border-box'
    },
    closeButton: {
        marginLeft: 'auto',
        cursor: 'pointer',
        color: global.mainColor,
        transition: 'all 0.5s',
        ':hover': {
            color: global.highlightColor,
            transition: 'all 0.5s'
        }
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: 'auto',
        color: 'black'
    },
    formLabel: {
        marginBottom: '5px'
    },
    formField: {
        padding: '5px',
        marginBottom: '20px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'grey',
        error: {
            borderColor: 'red'
        } 
    },
    errorText: {
        fontSize: '0.7em',
        color: 'red',
        margin: '0',
        textAlign: 'center'
    },
    formButton: {
        cursor: 'pointer',
        marginTop: '10px',
        backgroundColor: global.mainColor,
        color: 'white',
        padding: '7px 15px',
        borderRadius: '10px',
        border: 'none',
        boxShadow: '0 0 0 0',
        transition: 'all 0.5s',
        ':hover': {
            backgroundColor: global.highlightColor,
            boxShadow: '0 0 0 2px',
            color: global.mainColor,
            transition: 'all 0.5s'
        },
        ':focus': {
            backgroundColor: global.highlightColor,
            boxShadow: '0 0 0 2px',
            color: global.mainColor
        }
    }
}

export default styles;