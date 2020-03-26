import React from 'react';
import FormComponent from './FormComponent';
import styles from './styles.Home.css';
import gameTypes from '../../../../constants/gameTypes';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let isAuthenticated = this.props.auth.isAuthenticated;
        return (
<<<<<<< HEAD
            <div style={styles.page}>
=======
            <div style={styles.homePage}>
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
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
<<<<<<< HEAD

                    <div>Users online: {this.props.usersOnline}</div>
=======
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
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
                
                <div style={styles.main}>
<<<<<<< HEAD
                    <button onClick={() => this.props.getRoom(gameTypes.TIC_TAC_TOE)}>Tic Tac Toe</button>
=======
                    <button onClick={() => this.props.startGame(gameTypes.TIC_TAC_TOE)}>Tic Tac Toe</button>
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
                </div>
            </div>
        )
    }
}

export default HomeComponent;