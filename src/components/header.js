import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from '../../css/style.css'
import logo_text from '../../images/logo-text.png'
import { connect } from "react-redux";
import { signIn, openRegistration, openProfile, showModal, hideModal } from "../modules/user/actions";
import { openLots, openCreateLot } from "../modules/lots/actions";
import FormErrors from "../components/formerrors";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('UPDATE HEADER', props, state);
  //   return {...props}
  // }

  // showModal = () => {
  //   this.setState({modalActive: true});
  // };
  // hideModal = () => {
  //   this.setState({modalActive: false});
  // };

  login = () => {
    // console.log(this.state);
    this.props.singIn({email: this.state.email, password: this.state.password});
  };
  openReg = () => {
    this.props.openReg()
  };

  openOrder = () => {
    this.props.email ? this.props.openCreateLot() : this.props.openReg();
  };



  onChange = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({[e.target.name]: e.target.value})
  };

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
    () => { this.validateField(name, value) });
    console.log(e, e.target.value, e.target.name);
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  };

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  };

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.passwordValid});
}
  // openProfile = () => {
  //   this.props.openProfile();
  // }

  render() {
    let state = this.state;

    return <header className={styles.header}>
      {(this.props.email == "") ?
        <a className={styles.login} onClick={this.props.showModal}>
          вход
        </a>
        :
        <a className={styles.login} onClick={this.props.openProfile}>
          {this.props.email}
        </a>

      }
      <div
        className={styles.login_popup}
        style={{display: (this.props.modalActive ? 'block' : 'none')}}>
        <div>
          <a  className="close" onClick={this.props.hideModal}>x</a>
        </div>
        <div></div>
        <form method="post" action="">
          <h4>Вход с паролем</h4>
          <div className={styles.loginMessage}
               style={{display:'none'}}/>
          <p className={styles[this.errorClass(this.state.formErrors.email)]}>
            <label htmlFor="email">
              Почта
            </label>
            <input type="email" name="email" id="email" value={state.email} placeholder="email" onChange={(event) => this.handleUserInput(event)} />
          </p>
          <p className={styles[this.errorClass(this.state.formErrors.email)]}>
            <label htmlFor="password">
              Пароль
            </label>
            <input value="" type="password" name="password" id="password" value={state.password} onChange={(event) => this.handleUserInput(event)}/>
          </p>
          <p>
            <span disabled={!this.state.formValid} onClick={this.login}>Войти
              {/*<input type="submit" name="Login" value="Войти" onClick={this.login}/>*/}

            </span>

            <a className={styles.hover} onClick={this.openReg}>
              Регистрация
            </a>
          </p>
        </form>
        <FormErrors formErrors={this.state.formErrors} />
      </div>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <img src={'/' + logo_text} />
        </div>
        <div className={styles.center_block}>
          <a className={styles.place_order} onClick={this.openOrder}>
            + Разместить заказ
          </a>

          <a className={styles.watch_apps} onClick={this.props.openLots}>
            Смотреть заявки
          </a>
        </div>
      </div>
    </header>
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    email: state.user.email || '',
    token: state.user.token || '',
    modalActive: state.user.modalActive || false,
  };
};

const mapDispatchToProps = (dispatch) => ({
  singIn: (data) => dispatch(signIn(data)),
  openReg: () => dispatch(openRegistration()),
  openLots: () => dispatch(openLots()),
  openCreateLot: () => dispatch(openCreateLot()),
  openProfile: () => dispatch(openProfile()),
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

// export default Header;
