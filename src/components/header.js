import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from '../../css/style.css'
import logo_text from '../../images/logo-text.png'
import { connect } from "react-redux";
import { signIn, openRegistration, openProfile, showModal, hideModal } from "../modules/user/actions";
import { openLots } from "../modules/lots/actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      email: '',
      password: '',
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



  onChange = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({[e.target.name]: e.target.value})
  };
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
          <p>
            <label htmlFor="email">
              Почта
            </label>
            <input type="text" name="email" id="email" value={state.email} placeholder="email" onChange={this.onChange} />
          </p>
          <p>
            <label htmlFor="password">
              Пароль
            </label>
            <input value="" type="password" name="password" id="password" value={state.password} onChange={this.onChange}/>
          </p>
          <p>
            <span onClick={this.login}>Submit
              {/*<input type="submit" name="Login" value="Войти" onClick={this.login}/>*/}

            </span>
            <a href="">
              забыли пароль
            </a>
          </p>
          <a className={styles.register}  onClick={this.openReg}>
            Регистрация
          </a>
        </form>
      </div>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <img src={'/' + logo_text} />
        </div>
        <div className={styles.center_block}>
          <a href="" className={styles.place_order}>
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
  openProfile: () => dispatch(openProfile()),
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

// export default Header;
