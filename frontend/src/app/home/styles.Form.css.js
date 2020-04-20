import global from '../styles.global.css';

let styles = {
    block: Object.assign({}, global.popupBlock, {
        width: '30%',
        register: {
            height: '350px'
        }
    }),
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
        fontSize: '1.2em',
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
        padding: '30px',
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
        width: '100%',
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
    formButton: global.popupButtons
}

export default styles;