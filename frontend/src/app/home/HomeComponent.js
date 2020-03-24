import React from 'react';
import FormComponent from './FormComponent';
import styles from './styles.Home.css';

class HomeComponent extends React.Component {
    render() {
        let isAuthenticated = this.props.auth.isAuthenticated;
        
        return (
            <div style={styles.homePage}>
                <div style={styles.header}>
                    {
                        isAuthenticated ? 
                        <button onClick={this.props.logout}>Logout</button> :
                        [
                            <button key={"login_button"} onClick={this.props.showLoginForm}>Login</button>,
                            <button key={"register_button"} onClick={this.props.showRegisterForm}>Register</button> 
                        ]
                    }

                    {
                        isAuthenticated &&
                        <div>User: {this.props.auth.user.name} </div>
                    }
                </div>

                {
                    this.props.displayLogin && 
                    <div style={styles.formWrapper}>
                        <FormComponent form="login" close={this.props.hideLoginForm} action={this.props.login} errors={this.props.errors} />
                    </div>
                }
                
                {
                    this.props.displayRegister && 
                    <div style={styles.formWrapper}>
                        <FormComponent form="register" close={this.props.hideRegisterForm} action={this.props.register} errors={this.props.errors} />
                    </div>
                }
                
            </div>
        )
    }
}

export default HomeComponent;