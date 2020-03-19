import React from 'react';
import LoginFormComponent from './LoginFormComponent';
import styles from './styles.Home.css';

class HomeComponent extends React.Component {
    render() {
        return (
            <div style={styles.homePage}>
                <div style={styles.loginFormWrapper}>
                    <LoginFormComponent />
                </div>
            </div>
        )
    }
}

export default HomeComponent;