import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import logo_text from '../../../../images/logo-text.png';
import styles from '../../../../css/style.css';

class Lot extends Component {
  render() {
    return <div>
      <div id="app">
        <header>
          <a href="" className={styles['login']}>
            вход
          </a>
          <div className={styles['container']}>
            <div className={styles['logo_box']}>
              <img src={logo_text} />
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
        <div className={styles['top_block']}>
          <h4>
            Быстрый и удобный сервис онлайн аукциона
          </h4>
          <h1>
            Заказ №00000696
          </h1>
        </div>
      </div>

      <div className={styles['lot_content']}>
        <div className={styles['container']}>
          <h1 className={styles['title']}>
            Трубы
          </h1>
          <h3>
          </h3>
          <div className={styles['main_part']}>
            <input type="hidden" name="lot-id" value="00000696" />
            <p>
              Трубы
            </p>
            <div className={styles['columns']}>
              <div className={styles['column left']}>
                <div className={styles['when_date back']}>
                  <span className={styles['name']}>
                      Когда нужно:
                  </span>
                  <span className={styles['date']}>
                    20 Ноябрь
                    <span className={styles['time']}>
                        00:00
                    </span>
                  </span>
                </div>

                <div className={styles['weight back']}>
                  <span className={styles['name']}>
                      Вес:
                  </span>

                  <span className={styles['date']}>
                      0 кг.
                  </span>
                </div>

                <div className={styles['back']}>

                </div>

                <div className={styles['user back']}>
                  <a href="">
                    Администратор по умолчанию
                  </a>
                </div>
              </div>

              <div className={styles['column right']}>
                <div className={styles['destination_points']}>
                  <div className={styles['destination_holder']}>
                    <div className={styles['flex_box']}>
                      <div className={styles['from']}>
                        <span className={styles['city']}>
                            Астана
                        </span>
                        <span className={styles['address']}/>
                      </div>
                      <i />
                      <div className={styles['to']}>
                        <span className={styles['city']}>
                          Алматы
                        </span>
                        <span className={styles['address']}>

                        </span>
                      </div>
                    </div>
                    <span className={styles['distance']}>
                      1 216 км
                    </span>
                    <div className={styles['flex_box']}>
                      <input type="hidden" name="geo_saved" value="0" />
                      <input type="hidden" name="coordinates" value='["",""]' />
                      <div className={styles['map" style="width: 400px; height: 305px;']} />
                      <aside>
                        <div className={styles['box']}>
                          <div className={styles['status']}>
                            Статус:
                            <span>
                                              Активен
                                          </span>
                          </div>
                          <div className={styles['create_at']}>
                            Создан: 19 Ноябрь
                          </div>
                          <div className={styles['finish']}>
                            <strong>
                              Окончание: 22 Ноябрь
                            </strong>
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['make_offer']}>
            <a href="" className={styles['green-button']}>
              <span>
                  Сделать предложение
              </span>
            </a>
          </div>
          <div className={styles['offers_list']}>
            <h2>
              Ставки (<span>0</span>)
            </h2>
            <table>
              <thead>
              <tr>
                <td>Ставка</td>
                <td>Исполнитель</td>
                <td>Услуги</td>
                <td />
                <td />
              </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div className={styles['footer']}>
        <div className={styles['container']}>
          <div>
            <a href="" className={styles['place_order']}>
              Разместить заказ
            </a>
          </div>
          <div>
            <a href="" className={styles['orders_list']}>
              Смотреть заявки
            </a>
          </div>
        </div>
      </div>
    </div>

  }
}

export default Lot;
