import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import iconUserpic from '../../../../images/icon-userpic.png';
import logo_text from '../../../../images/logo-text.png';


class Profile extends Component {
  render() {
    return <div>
      <div id="app">
        <Header />
        <div className={styles.profile_content}>
          <div className={styles.container}>
            <div className={styles.reg_tabs}>
              <div className={styles.person + ' ' + styles.active}>
                Профиль
              </div>
              <div className={styles.person}>
                Мои заказы
              </div>
              <div className={styles.person}>
                Мои предложения
              </div>
            </div>
            <div className={styles.profile}>
              <div className={styles.top_row}>
                <div className={styles.photo_block}>
                  <div>
                    <a href="">
                      <img alt={''} src={'/' + iconUserpic}/>
                    </a>
                  </div>
                  <div className={styles.desc}>
                    <h2>
                      test
                    </h2>
                    <div>
                      заказчик/перевозчик
                    </div>

                    <div className={styles.count_transitions}>
                      <a href="">0 перевозок</a>
                      /
                      <a href="">0 ставки</a>
                    </div>
                    <div className={styles.count_orders}>
                      <a href="">0 заказов</a>
                      /
                      <a href="">0 выполненных</a>
                    </div>
                  </div>
                </div>
                <div className={styles.what_person}>
						<span>
							Частное лицо
						</span>
                </div>
                <a href="" className={styles.change_password}>
                  Сменить пароль
                </a>
              </div>
              <div className={styles.categories}>
                Категории перевозок
              </div>
              <div className={styles.cars}>
                <h2>Автопарк <span>(0 машин)</span></h2>
              </div>
            </div>
            <div className={styles.orders}>
              <table>
                <tbody>
                <tr>
                  <td className={styles.status}>Активен</td>
                  <td className={styles.left + ' ' + styles.info}>
                    <p>
                      №392334634
                    </p>
                    <span className={styles.category}>
									Стройматериалы
								</span>
                    <span className={styles.publishedon}>
									16:52 16 декабря
								</span>
                  </td>
                  <td className={styles.left + ' ' + styles.title}><a href="#">Цемент</a></td>
                  <td>14 предложений</td>
                </tr>
                <tr>
                  <td className={styles.status}>Активен</td>
                  <td className={styles.left + ' ' + styles.info}>
                    <p>
                      №392334634
                    </p>
                    <span className={styles.category}>
									Стройматериалы
								</span>
                    <span className={styles.publishedon}>
									16:52 16 декабря
								</span>
                  </td>
                  <td className={styles.left + ' ' + styles.title}><a href="#">Цемент</a></td>
                  <td>14 предложений</td>
                </tr>
                <tr>
                  <td className={styles.status}>Активен</td>
                  <td className={styles.left + ' ' + styles.info}>
                    <p>
                      №392334634
                    </p>
                    <span className={styles.category}>
									Стройматериалы
								</span>
                    <span className={styles.publishedon}>
									16:52 16 декабря
								</span>
                  </td>
                  <td className={styles.left + ' ' + styles.title}><a href="#">Цемент</a></td>
                  <td>14 предложений</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.requests}>
              <table>
                <tbody>
                <tr>
                  <td className={styles.status}>Активен</td>
                  <td className={styles.left + ' ' + styles.info}>
                    <p>
                      №392334634
                    </p>
                    <span className={styles.category}>
									Стройматериалы
								</span>
                    <span className={styles.publishedon}>
									16:52 16 декабря
								</span>
                  </td>
                  <td className={styles.left + ' ' + styles.title}><a href="#">Цемент</a></td>
                  <td>50 000 тенге</td>
                </tr>
                <tr>
                  <td className={styles.status}>Активен</td>
                  <td className={styles.left + ' ' + styles.info}>
                    <p>
                      №392334634
                    </p>
                    <span className={styles.category}>
									Стройматериалы
								</span>
                    <span className={styles.publishedon}>
									16:52 16 декабря
								</span>
                  </td>
                  <td className={styles.left + ' ' + styles.title}><a href="#">Цемент</a></td>
                  <td>50 000 тенге</td>
                </tr>
                <tr>
                  <td className={styles.status}>Активен</td>
                  <td className={styles.left + ' ' + styles.info}>
                    <p>
                      №392334634
                    </p>
                    <span className={styles.category}>
									Стройматериалы
								</span>
                    <span className={styles.publishedon}>
									16:52 16 декабря
								</span>
                  </td>
                  <td className={styles.left + ' ' + styles.title}><a href="#">Цемент</a></td>
                  <td>50 000 тенге</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
    </div>
  }
}

export default Profile;
