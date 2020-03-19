import React from 'react';
import styles from './styles.LoginForm.css';

class LoginFormComponent extends React.Component {
    render() {
        return (
            <div style={styles.loginForm}>
                <label htmlFor="username" style={styles.formLabel}>Username</label>
                <input type="text" name="username" id="username" style={styles.formField} />
                <label htmlFor="password" style={styles.formLabel}>Password</label>
                <input type="password" name="password" id="password" style={styles.formField} />
            </div>
        )
    }
}

export default LoginFormComponent;