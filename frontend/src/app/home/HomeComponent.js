import React from 'react';
import FormComponent from './FormComponent';
import Radium from 'radium';
import styles from './styles.Home.css';
import gameTypes from '../../../../constants/gameTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ticIcon from '../../../public/icon/tictactoe_icon.PNG';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if (y > 30 || y > Math.floor(window.innerHeight / 100)) {
            if (this.state.collapseHeader) {
                return;
            }
            this.setState({
                collapseHeader: true
            });
        } else {
            if (!this.state.collapseHeader) {
                return;
            }
            this.setState({
                collapseHeader: false
            });
            window.scrollTo(0, 0); 
        }
    }

    render() {
        let isAuthenticated = this.props.auth.isAuthenticated;
        let headerStyle = Object.assign({}, styles.header, 
            this.state.collapseHeader && styles.header.collapse
        );
        let headerButtonsBlockStyle = Object.assign({}, styles.headerButtonsBlock,
            this.state.collapseHeader && styles.headerButtonsBlock.collapse
        );
        let headerButtonsStyle = Object.assign({}, styles.headerButtonsBlock,
            styles.headerButtons
        );
        let headerTextStyle = Object.assign({}, styles.headerCollapseText,
            this.state.collapseHeader && styles.headerCollapseText.show
        );
        let fixedHeaderStyle = Object.assign({}, styles.fixedHeader, 
            this.state.collapseHeader && styles.fixedHeader.show
        );
        return (
            <div style={styles.page}>
                <div style={fixedHeaderStyle}>
                    <div style={styles.fixedHeader.online}>Online: {this.props.usersOnline}</div>
                    {
                        isAuthenticated ?
                        <div style={headerTextStyle}>Hi, <span style={styles.user}>{this.props.auth.user.name}</span></div> :
                        <div style={headerTextStyle}>Hi, <span style={styles.user}>{this.props.auth.user.name}</span></div>
                    }
                    {
                        isAuthenticated &&
                        <div style={styles.fixedHeader.logoutButton}><FontAwesomeIcon key={"logout_icon"} icon={faSignOutAlt} onClick={this.props.logout}  /></div>
                    }
                </div>
                
                
                <div style={headerStyle}>
                    {
                        isAuthenticated ? 
                        <div key={"main_text_auth"} style={headerButtonsBlockStyle}>You are logged in<br /> <span style={styles.user}>{this.props.auth.user.name}</span></div> :
                        <div style={headerButtonsBlockStyle}>
                            <button key={"login_button"} onClick={this.props.showLoginForm} style={headerButtonsStyle}>Login</button>
                            <button key={"register_button"} onClick={this.props.showRegisterForm} style={headerButtonsStyle}>Register</button>
                        </div> 
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
                
                <div style={styles.main}>
                    <img src={ticIcon} alt="tic_tac_toe" style={styles.icon} onClick={() => this.props.getRoom(gameTypes.TIC_TAC_TOE)} />
                </div>
            </div>
        )
    }
}

export default Radium(HomeComponent);