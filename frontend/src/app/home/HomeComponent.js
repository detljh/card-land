import React from 'react';
import Radium from 'radium';
import FormComponent from './FormComponent';
import styles from './styles.Home.css';
import gameTypes from '../../../../constants/gameTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: 0,
            collapseHeader: false
        };
        this.collapseHeader = this.collapseHeader.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.collapseHeader);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.collapseHeader);
    }

    collapseHeader() {
        let y = window.scrollY;
        console.log(y);
        if (y > this.state.scrollY) {
            this.setState({
                scrollY: y,
                collapseHeader: true
            });
        } else {
            this.setState({
                scrollY: y,
                collapseHeader: false
            });
        }
    }

    render() {
        let isAuthenticated = this.props.auth.isAuthenticated;
        let headerStyle = Object.assign({}, styles.header, 
            this.state.collapseHeader && styles.headerCollapse
        );
        let headerButtonsBlockStyle = Object.assign({}, styles.headerButtonsBlock,
            this.state.collapseHeader && styles.headerButtonsBlock.collapse
        );
        return (
            <div style={styles.page}>
                <div style={headerStyle}>
                    {
                        isAuthenticated ? 
                        <FontAwesomeIcon icon={faSignOutAlt} onClick={this.props.logout} style={styles.logoutButton} /> :
                        <div style={headerButtonsBlockStyle}>
                            <button key={"login_button"} onClick={this.props.showLoginForm} style={styles.headerButtons}>Login</button>
                            <button key={"register_button"} onClick={this.props.showRegisterForm} style={styles.headerButtons}>Register</button>
                        </div> 
                    }

                    {
                        isAuthenticated ?
                        <div>User: {this.props.auth.user.name} </div> :
                        <div>{this.props.auth.user.name} </div>
                    }

                    <div>Users online: {this.props.usersOnline}</div>
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
                    <button onClick={() => this.props.getRoom(gameTypes.TIC_TAC_TOE)}>Tic Tac Toe</button>
                </div>
            </div>
        )
    }
}

HomeComponent = Radium(HomeComponent);
export default HomeComponent;