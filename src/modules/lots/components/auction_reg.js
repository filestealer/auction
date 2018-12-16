import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TopBlock from '../../../components/top_block';

class AuctionReg extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopBlock text="Заказы" />
        <div className={styles.auction_reg_content}>
          <div className={styles.container}>
            <form>
              <h2>1. Опишите запрос</h2>
              <div>
                <select
                  style={{
                    width: '100%',
                    marginBottom: '15px',
                  }}
                >
                  <option value={'category'}>Выберите категорию</option>
                </select>
              </div>
              <div className={styles.fields}>
                <div className={styles.textarea_block}>
                  <textarea
                    data-name="description"
                    name="description"
                    placeholder="Краткое описание"
                  />
                </div>
              </div>
              <h2>2. Куда поставить</h2>
              <div className={styles.fields}>
                <input type="hidden" name="distance" />
                <div className={styles.order_address}>
                  <div className={styles.label}>
                    Город:
                    <input
                      type="text"
                      data-counter="1"
                      name="cities[]"
                      placeholder="откуда"
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.label}>
                    Адрес:
                    <input type="text" data-counter="1" name="addresses[]" />
                  </div>
                  <a className={styles.delete_node} />
                </div>

                <div className={styles.order_address}>
                  <div className={styles.label}>
                    Город:
                    <input
                      type="text"
                      data-counter="1"
                      name="cities[]"
                      placeholder="откуда"
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.label}>
                    Адрес:
                    <input type="text" data-counter="1" name="addresses[]" />
                  </div>
                  <a className={styles.add_node} />
                </div>

                <div className={styles.order_date}>
                  <div>
                    <div className={styles.label}>Дата поставки</div>
                    <input type="date" name="date" placeholder="дд.мм.гггг" />
                  </div>
                  <div className={styles.time_box}>
                    <div className={styles.label}>Время</div>
                    <input
                      type="time"
                      data-counter="1"
                      name="cities[]"
                      placeholder="мм:чч"
                    />
                  </div>
                  <a className={styles.add_node} />
                </div>
              </div>
              <h2>3. Дополнительная информация</h2>
              <div className={styles.fields}>
                <input type="hidden" name="distance" />
                <div className={styles.input_select}>
                  <div className={styles.label}>
                    Максимальная цена:
                    <input
                      className={styles['input-width-100']}
                      type="text"
                      name="max_price"
                    />
                    тг.
                  </div>
                  <div className={styles.label}>
                    Запрос актуален
                    <select>
                      <option>1 день</option>
                      <option>2 дня</option>
                      <option>3 дня</option>
                      <option>4 дня</option>
                      <option>5 дня</option>
                      <option>6 дня</option>
                      <option>7 дня</option>
                    </select>
                  </div>
                  <a className={styles.add_node} />
                </div>
              </div>
              <h2>4. Файлы</h2>
              <div className={styles.fields}>
                <div className={styles.order_address}>
                  <span>Загрузить файлы спецификации</span>
                  <a className={styles.delete_node} />
                </div>
              </div>
              <div className={styles.center}>
                <a>
                  <span>Разместить запрос</span>
                </a>
              </div>
            </form>

            <div className={styles.support_block}>
              <span className={styles.font}>
                Служба поддержки: +7 777 617 27 71
              </span>
              <a>
                <span>Заказать звонок</span>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AuctionReg;
