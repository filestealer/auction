import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from '../../css/style.css';

// const HelloWorld = ({ title }) => (
//   <div className={style['hello-world']}>{title}</div>
// );
//
// HelloWorld.propTypes = {
//   title: PropTypes.string,
// };

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.container}>
          <div>
            <a href="" className={styles.place_order}>
              Разместить заказ
            </a>
          </div>
          <div>
            <a href="" className={styles.orders_list}>
              Смотреть заявки
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
