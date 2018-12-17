import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import logo_text from '../../../../images/logo-text.png';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TopBlock from '../../../components/top_block';
import moment from 'moment';
moment().format();

class Lot extends Component {

  // id: item.id,
  // category: item.request_category,
  // publish_date: item.created,
  // description: item.request_description,
  // delivery_address: item.delivery_address,
  // expired_date: item.contract_expiration_date,
  //

  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      openRequest: false,
    };
  }

  request = () => {
    this.props.request({price: this.state.price, id: this.props.id});
  };
  openRequest = () => {
    this.setState({openRequest: true});
  };

  onChange = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value})
  };

  render() {

    return (
      <div>
        <div id="app">
          <Header />
          <TopBlock text={"Заказ №" + this.props.id} />

        </div>

        <div className={styles.lot_content}>
          <div className={styles.container}>
            <h1 className={styles.title}>{this.props.category}</h1>
            <h3 />
            <div className={styles.main_part}>
              <input type="hidden" name="lot-id" value="00000696" />
              <p>{this.props.description}</p>
              <div className={styles.columns}>
                <div className={styles.column + ' ' + styles.left}>
                  <div className={styles.when_date + ' ' + styles.back}>
                    <span className={styles.name}>Когда нужно:</span>
                    <span className={styles.date}>
                      {moment(this.props.delivery_date).format('DD-MM-YYYY')}
                      <span className={styles.time}>{moment(this.props.delivery_date).format('HH:mm')}</span>
                    </span>
                  </div>

                  <div className={styles.weight + ' ' + styles.back}>
                    <span className={styles.name}>Вес:</span>

                    <span className={styles.date}>0 кг.</span>
                  </div>

                  <div className={styles.back} />

                  <div className={styles.user + ' ' + styles.back}>
                    <a href="">Администратор по умолчанию</a>
                  </div>
                </div>

                <div className={styles.column + ' ' + styles.right}>
                  <div className={styles.destination_points}>
                    <div className={styles.destination_holder}>
                      <div className={styles.flex_box}>
                        <div className={styles.from}>
                          <span className={styles.city}>{this.props.delivery_address}</span>
                          <span className={styles.address} />
                        </div>
                        {/*<i />*/}
                        <div className={styles.to}>
                          <span className={styles.city}></span>
                          <span className={styles.address} />
                        </div>
                      </div>
                      <span className={styles.distance}></span>
                      <div className={styles.flex_box}>
                        <input type="hidden" name="geo_saved" value="0" />
                        <input
                          type="hidden"
                          name="coordinates"
                          value='["",""]'
                        />
                        <div
                          className={styles['map"']}
                          style={{
                            width: '400px',
                            height: '305px',
                          }}
                        />
                        <aside>
                          <div className={styles.box}>
                            <div className={styles.status}>
                              Статус:
                              <span>{this.props.status}</span>
                            </div>
                            <div className={styles.create_at}>
                              Создан: {moment(this.props.publish_date).format('DD-MM-YYYY')}
                            </div>
                            <div className={styles.finish}>
                              <strong>Окончание: {moment(this.props.delivery_date).format('DD-MM-YYYY')}</strong>
                            </div>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.make_offer}>
              <a className={styles['green-button']} onClick={this.openRequest}>
                <span>Сделать предложение</span>
              </a>
            </div>
            <div className={styles.make_offer + (this.state.openRequest ? ' ' + styles.active : '')}>
              <input type="text" name="price" value={this.state.price} onChange={this.onChange} />
              <button onClick={this.request}>Отправить</button>
            </div>
            <div className={styles.offers_list}>
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
        <Footer />
      </div>
    );
  }
}

export default Lot;
