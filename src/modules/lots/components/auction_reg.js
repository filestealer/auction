import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TopBlock from '../../../components/top_block';

class AuctionReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request_category: 1,
      auction_type: 1,
      request_description: '',
      delivery_date: '',
      delivery_address: '',
      auction_duration: '',
    };
  }

  save = () => {
    this.props.save(this.state);
  };

  onChange = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value})
  };


// {
//   "request_category": 1,
//   "auction_type": 1,
//   "request_description": "Вот такой вот аукцион",
//   "delivery_date": "2019-10-02T00:00:00Z",
//   "delivery_address": "куда?:D",
//   "auction_duration": "2019-10-02T00:00:00Z"
// }

  render() {
    let state = this.state;
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
                  name={'request_category'}
                  // value={user.user.password}
                  onChange={this.onChange}

                >
                  <option value={'category'}>Выберите категорию</option>
                  <option value={1}>Стройматериалы</option>
                  <option value={2}>Бытовая химия</option>
                </select>
              </div>
              <div className={styles.fields}>
                <div className={styles.textarea_block}>
                  <textarea
                    name="request_description"
                    placeholder="Краткое описание"
                    onChange={this.onChange}
                    value={state.request_description}
                  />
                </div>
              </div>
              <h2>2. Куда поставить</h2>
              <div className={styles.fields}>
                <div className={styles.order_address}>
                  {/*<div className={styles.label}>*/}
                    {/*Город:*/}
                    {/*<input*/}
                      {/*type="text"*/}
                      {/*data-counter="1"*/}
                      {/*name="cities[]"*/}
                      {/*placeholder="откуда"*/}
                      {/*autoComplete="off"*/}
                    {/*/>*/}
                  {/*</div>*/}
                  <div className={styles.label}>
                    Адрес:
                    <input type="text" data-counter="1" name="delivery_address" onChange={this.onChange}
                           value={state.delivery_address}/>
                  </div>
                  {/*<a className={styles.delete_node} />*/}
                </div>

                {/*<div className={styles.order_address}>*/}
                  {/*<div className={styles.label}>*/}
                    {/*Город:*/}
                    {/*<input*/}
                      {/*type="text"*/}
                      {/*data-counter="1"*/}
                      {/*name="cities[]"*/}
                      {/*placeholder="откуда"*/}
                      {/*autoComplete="off"*/}
                    {/*/>*/}
                  {/*</div>*/}
                  {/*<div className={styles.label}>*/}
                    {/*Адрес:*/}
                    {/*<input type="text" data-counter="1" name="addresses[]" />*/}
                  {/*</div>*/}
                  {/*<a className={styles.add_node} />*/}
                {/*</div>*/}

                <div className={styles.order_date}>
                  <div>
                    <div className={styles.label}>Дата поставки</div>
                    <input type="date" name="delivery_date_day" placeholder="дд.мм.гггг" onChange={this.onChange}
                           value={state.delivery_date_day}/>
                  </div>
                  <div className={styles.time_box}>
                    <div className={styles.label}>Время</div>
                    <input
                      type="time"
                      data-counter="1"
                      name="delivery_date_time"
                      placeholder="чч:мм"
                      onChange={this.onChange}
                      value={state.delivery_date_time}
                    />
                  </div>
                  {/*<a className={styles.add_node} />*/}
                </div>
              </div>
              <h2>3. Дополнительная информация</h2>
              <div className={styles.fields}>
                {/*<input type="hidden" name="distance" />*/}
                <div className={styles.input_select}>
                  <div className={styles.label}>
                    Максимальная цена:
                    <input
                      className={styles['input-width-100']}
                      type="text"
                      name="max_price"
                      onChange={this.onChange}
                      value={state.max_price}
                    />
                    тг.
                  </div>
                  <div className={styles.label}>
                    Запрос актуален
                    <select name={"auction_duration"} onChange={this.onChange}
                            value={state.auction_duration}>
                      <option>1 день</option>
                      <option>2 дня</option>
                      <option>3 дня</option>
                      <option>4 дня</option>
                      <option>5 дня</option>
                      <option>6 дня</option>
                      <option>7 дня</option>
                    </select>
                  </div>
                  {/*<a className={styles.add_node} />*/}
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
                  <span onClick={this.save}>Разместить запрос</span>
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
