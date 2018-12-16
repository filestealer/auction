import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from '../../css/style.css'
import logo_text from '../../images/logo-text.png'


// const HelloWorld = ({ title }) => (
//   <div className={style['hello-world']}>{title}</div>
// );
//
// HelloWorld.propTypes = {
//   title: PropTypes.string,
// };

class Header extends Component {
  render() {
    return <header className={styles.header}>
      <a href="" className={styles.login}>
        вход
      </a>
      <div
        className={styles.login_popup}
        style={{display: 'block'}}>
        <div>
          <a href="javascript:void(0);" className="close">x</a>
        </div>
        <div></div>
        <form method="post" action="http://auction.thefactory.kz/">
          <input className={styles.returnUrl} type="hidden" name="returnUrl" value="/index.php"/>
            <input className={styles.loginLoginValue} type="hidden" name="service" value="login"/>
              <h4>Вход с паролем</h4>
              <div className={styles.loginMessage}
                   style={{display:'none'}}/>
              <p>
                <label htmlFor="email">
                  Почта
                </label>
                <input input="" type="text" name="username" id="email"/>
              </p>
              <p>
                <label htmlFor="password">
                  Пароль
                </label>
                <input input="" type="password" name="password" id="password"/>
              </p>
              <p>
                <span>
                  <input type="submit" name="Login" value="Войти"/>
                  </span>
                <a href="">
                  забыли пароль
                </a>
              </p>
              <a className={styles.register} href="">
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

          <a href="" className={styles.watch_apps}>
            Смотреть заявки
          </a>
        </div>
      </div>
    </header>
  }
}

export default Header;
