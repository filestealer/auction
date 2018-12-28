import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TopBlock from '../../../components/top_block';
import ListItem from './list_item';


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
                  {/*<td>Габариты</td>*/}
                  <td>Дата поставки</td>
                </tr>
              </thead>
              <tbody>
              {this.props.list.map((item)=> <ListItem
                id={item.id}
                category={item.request_category}
                publish_date={item.created}
                description={item.request_description}
                delivery_address={item.delivery_address}
                expired_date={item.contract_expiration_date}
                delivery_date={item.delivery_date}
                city={item.city}
                street={item.street}
                building={item.building}
                office={item.office}
                onClick={()=>{this.props.openLot(item.id)}}
                key={item.id}
              />)}
                {/*<tr>*/}
                  {/*<td>*/}
                    {/*<p>№ 00000696</p>*/}
                    {/*<span className={styles.category}>Металлопродукция</span>*/}
                    {/*<span className={styles.publishedon}>*/}
                      {/*21:31 / 19.11.2018*/}
                    {/*</span>*/}
                  {/*</td>*/}
                  {/*<td>*/}
                    {/*<a href="">Трубы</a>*/}
                  {/*</td>*/}
                  {/*<td>*/}
                    {/*Астана→Алматы*/}
                    {/*<p>1 215.92 км</p>*/}
                  {/*</td>*/}
                  {/*<td />*/}
                  {/*<td>20 Ноябрь</td>*/}
                {/*</tr>*/}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Lots;
