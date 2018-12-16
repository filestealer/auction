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
    return <header className={styles['header']}>
      <a href="" className={styles['login']}>
        вход
      </a>
      <div className={styles['container']}>
        <div className={styles['logo_box']}>
          <img src={'/' + logo_text} />
        </div>
        <div className={styles['center_block']}>
          <a href="" className={styles['place_order']}>
            + Разместить заказ
          </a>

          <a href="" className={styles['watch_apps']}>
            Смотреть заявки
          </a>
        </div>
      </div>
    </header>
  }
}

export default Header;
