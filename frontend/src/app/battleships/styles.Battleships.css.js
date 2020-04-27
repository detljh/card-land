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
        marginTop: '60px',
        padding: '0 5px'
    },
    displayAlert: Object.assign({}, global.alert, {
        margin: 'auto'
    })
}

export default styles;