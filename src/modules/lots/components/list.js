import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TopBlock from '../../../components/top_block';

class Lots extends Component {
  render() {
    return (
      <div>
        <div id="app">
          <Header />
          <TopBlock text="Заказы" />
        </div>
        <div className={styles.filter}>
          <form method="get">
            <div className={styles.container}>
              <div className={styles.columns}>
                <div className={styles.column + ' ' + styles.date}>
                  <div className={styles.label}>Дата доставки</div>
                  <div className={styles.input_row}>
                    <span>с</span>
                    <input type="date" name="date_from" />
                  </div>
                  <div className={styles.input_row}>
                    <span>с</span>
                    <input type="date" name="date_to" />
                  </div>
                </div>

                <div className={styles.column + ' ' + styles.order}>
                  <div className={styles.label}>Номер заказа</div>
                  <div className={styles.input_row}>
                    <input type="text" name="lot_id" />
                  </div>
                  <a href="">
                    <span>Найти</span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.lots_content}>
          <div className={styles.container}>
            <table className={styles['lots-list']}>
              <thead>
                <tr>
                  <td>
                    № и тип
                    <br />
                    аукциона
                  </td>
                  <td>Описание</td>
                  <td>Адрес поставки</td>
                  <td>Габариты</td>
                  <td>Дата поставки</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>№ 00000696</p>
                    <span className={styles.category}>Металлопродукция</span>
                    <span className={styles.publishedon}>
                      21:31 / 19.11.2018
                    </span>
                  </td>
                  <td>
                    <a href="">Трубы</a>
                  </td>
                  <td>
                    Астана→Алматы
                    <p>1 215.92 км</p>
                  </td>
                  <td />
                  <td>20 Ноябрь</td>
                </tr>

                <tr>
                  <td>
                    <p>№ 00000686</p>
                    <span className={styles.category}>Негабарит</span>
                    <span className={styles.publishedon}>
                      21:31 / 19.11.2018
                    </span>
                  </td>
                  <td>
                    <a href="">Оборудование складское</a>
                  </td>
                  <td>
                    Алматы→Костанай
                    <p>1 952.64 км</p>
                  </td>
                  <td>2 т.</td>
                  <td>30 Ноябрь</td>
                </tr>

                <tr>
                  <td>
                    <p>№ 00000684</p>
                    <span className={styles.category}>Животные</span>
                    <span className={styles.publishedon}>
                      21:31 / 19.11.2018
                    </span>
                  </td>
                  <td>
                    <a href="">Коза</a>
                  </td>
                  <td>
                    Алматы→Караганда
                    <p>1 002.51 км</p>
                  </td>
                  <td>30 кг.</td>
                  <td>20 Ноябрь</td>
                </tr>
              </tbody>
            </table>
            <div className={styles['lot-pages']}>
              <a href="" className={styles.active}>
                1
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Lots;
