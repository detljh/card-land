import React from 'react';
import FormComponent from './FormComponent';
import styles from './styles.Home.css';

class HomeComponent extends React.Component {
    render() {
        return (
            <div style={styles.homePage}>
                <div style={styles.header}>
                    <button onClick={this.props.showLoginForm}>Login</button>
                    <button onClick={this.props.showRegisterForm}>Register</button>
                </div>

                {
                    this.props.displayLogin && 
                    <div style={styles.formWrapper}>
                        <FormComponent form="login" close={this.props.hideLoginForm} />
                    </div>
                }
                
                {
                    this.props.displayRegister && 
                    <div style={styles.formWrapper}>
                        <FormComponent form="register" close={this.props.hideRegisterForm} />
                    </div>
                }
                
            </div>
        )
    }
}

export default HomeComponent;