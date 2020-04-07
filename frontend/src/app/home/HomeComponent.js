import React from 'react';
import FormComponent from './FormComponent';
import Radium from 'radium';
import styles from './styles.Home.css';
import gameTypes from '../../../../constants/gameTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ticIcon from '../../../public/icon/tictactoe_icon.PNG';
import { CSSTransition } from 'react-transition-group';
import '../transitions.scss';

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
            window.scrollTo(0, 50);
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
                <div style={styles.fixedHeader.online}>Online: {this.props.usersOnline}</div>
                <div style={fixedHeaderStyle}>
                    {
                        isAuthenticated ?
                        <div key={`user_greeting`} style={headerTextStyle}>Hi, <span style={styles.user}>{this.props.auth.user.username}</span></div> :
                        <div key={`guest_greeting`} style={headerTextStyle}>Hi, <span style={styles.user}>{this.props.auth.user.username}</span></div>
                    }
                </div>
                {
                    isAuthenticated &&
                    <div key={`logout_icon`} style={styles.fixedHeader.logoutButton}><FontAwesomeIcon icon={faSignOutAlt} onClick={this.props.logout} /></div>
                }
                
                <div style={headerStyle}>
                    {
                        isAuthenticated ? 
                        <CSSTransition
                        in={ !this.state.collapseHeader}
                        appear={ true }
                        classNames="fade500"
                        timeout={ 500 }
                        unmountOnExit>
                            <div key={"main_text_auth"} style={styles.headerButtonsBlock}>You are logged in<br /> <span style={styles.user}>{this.props.auth.user.username}</span></div>
                        </CSSTransition> :
                        <CSSTransition
                        in={ !this.state.collapseHeader}
                        appear={ true }
                        classNames="fade500"
                        timeout={ 500 }
                        unmountOnExit>
                            <div key={`header_button_block`} style={styles.headerButtonsBlock}>
                                <button key={"login_button"} onClick={this.props.showLoginForm} style={headerButtonsStyle}>Login</button>
                                <button key={"register_button"} onClick={this.props.showRegisterForm} style={headerButtonsStyle}>Register</button>
                            </div> 
                        </CSSTransition>
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
                    <div style={styles.icon} onClick={() => this.props.getRoom(gameTypes.TIC_TAC_TOE)}>
                        <img src={ticIcon} alt="tic_tac_toe" style={styles.icon.img} />
                        <span>Tic Tac Toe</span>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Radium(HomeComponent);