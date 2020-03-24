import React from 'react';
import styles from './styles.form.css';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            confirmPassword: null
        }
    }

    updateUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    updatePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    updateConfirmPassword(event) {
        this.setState({
            confirmPassword: event.target.value
        });
    }

    render() {
        let style = Object.assign({}, styles.block, 
            this.props.form === "register" && styles.block.register,
            this.props.form === "login" && styles.block.login
        );

        return (
            <div style={style}>
                <div style={styles.header}>
                    <button style={styles.closeButton} onClick={this.props.close}>Close</button>
                </div>

                <div style={styles.form}>
                    <span>{this.props.errors.error}</span>
                    <label htmlFor="username" style={styles.formLabel}>Username</label>
                    <span>{this.props.errors.username}</span>
                    <input type="text" name="username" id="username" placeholder="Enter username" style={styles.formField} onChange={(e) => this.updateUsername(e)} />
                    <label htmlFor="password" style={styles.formLabel}>Password</label>
                    <span>{this.props.errors.password}</span>
                    <input type="password" name="password" id="password" placeholder="Enter password" style={styles.formField} onChange={(e) => this.updatePassword(e)} />
                    {
                        this.props.form === "login" && 
                        <button onClick={() => this.props.action(this.state.username, this.state.password)}>Login</button>
                    }

                    {
                        this.props.form === "register" && 
                        [
                            <label key="confirm_label" htmlFor="confirmPassword" style={styles.formLabel}>Confirm Password</label>,
                            <span key={"confirm_error"}>{this.props.errors.confirmPassword}</span>,
                            <input key="confirm_input" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" style={styles.formField} onChange={(e) => this.updateConfirmPassword(e)} />,
                            <button key="register_button" onClick={() => this.props.action(this.state.username, this.state.password, this.state.confirmPassword)}>Register</button>
                        ]
                    }
                </div>
            </div>
        )
    }
}

export default FormComponent;