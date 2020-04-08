import React from 'react';
import styles from './styles.Form.css';
import Radium from 'radium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

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

    getFieldStyle(field) {
        return Object.assign({}, styles.formField, 
            this.props.errors[field] && styles.formField.error
        );
    }

    render() {
        let formStyle = Object.assign({}, styles.block, 
            this.props.form === "register" && styles.block.register
        );

        return (
            <div style={formStyle}>
                <div style={styles.header}>
                    <div style={styles.closeButton}>
                        <FontAwesomeIcon icon={faWindowClose} onClick={this.props.close} />
                    </div>
                </div>

                <div style={styles.form}>
                    <label htmlFor="username" style={styles.formLabel}>Username</label>
                    <span style={styles.errorText}>{this.props.errors.username}</span>
                    <input type="text" name="username" id="username" placeholder="Enter username" style={this.getFieldStyle("username")} onChange={(e) => this.updateUsername(e)} />
                    <label htmlFor="password" style={styles.formLabel}>Password</label>
                    <span style={styles.errorText}>{this.props.errors.password}</span>
                    <input type="password" name="password" id="password" placeholder="Enter password" style={this.getFieldStyle("password")} onChange={(e) => this.updatePassword(e)} />
                    {
                        this.props.form === "login" && 
                        <button style={styles.formButton} key={"login_button"} onClick={() => this.props.action(this.state.username, this.state.password)}>Login</button>
                    }

                    {
                        this.props.form === "register" && 
                        [
                            <label key="confirm_label" htmlFor="confirmPassword" style={styles.formLabel}>Confirm Password</label>,
                            <span key={"confirm_error"} style={styles.errorText}>{this.props.errors.confirmPassword}</span>,
                            <input key="confirm_input" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" style={this.getFieldStyle("confirmPassword")} onChange={(e) => this.updateConfirmPassword(e)} />,
                            <button style={styles.formButton} key="register_button" onClick={() => this.props.action(this.state.username, this.state.password, this.state.confirmPassword)}>Register</button>
                        ]
                    }
                    <span style={styles.errorText}>{this.props.errors.error}</span>
                </div>
            </div>
        )
    }
}

export default Radium(FormComponent);