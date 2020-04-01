let styles = {
    block: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid',
        height: '300px',
        width: '30%',
        minWidth: '200px',
        backgroundColor: 'white',
        marginBottom: '80px',
        register: {
            height: '350px'
        }
    },
    header: {
        marginBottom: 'auto',
        padding: '5px',
        width: '100%',
        display: 'flex',
        boxSizing: 'border-box'
    },
    closeButton: {
        marginLeft: 'auto'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: 'auto',
    },
    formLabel: {
        marginBottom: '5px'
    },
    formField: {
        padding: '5px',
        marginBottom: '10px',
        border: '1px solid',
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
    }
}

export default styles;