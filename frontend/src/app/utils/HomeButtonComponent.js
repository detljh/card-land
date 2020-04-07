import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Radium from 'radium';
import history from '../../history';

let style = {
    position: 'fixed',
    zIndex: '9999',
    left: '0',
    top: '0',
    padding: '0 5px',
    fontSize: '1.5em',
    transition: 'all 0.5s',
    ':hover': {
        cursor: 'pointer',
        color: 'red',
        transition: 'all 0.5s'
    }
}

class HomeButtonComponent extends React.Component {
    render() {
        return (
            <div style={style} onClick={() => {history.push('/')}}>
                <FontAwesomeIcon icon={faHome} />
            </div>
        )
    }
}

export default Radium(HomeButtonComponent);