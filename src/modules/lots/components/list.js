import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TopBlock from '../../../components/top_block';
import ListItem from './list_item';
import Pagination from "react-js-pagination";
import Calendar from "react-datepicker";
import MaskedTextInput from "react-text-mask";


class Lots extends Component {
  render() {
    return (

      <div>
        <div id="app">
          <Header />
          <TopBlock text="Заказы" />
        </div>
        <div className={styles.filter}>
          <div>
            <div className={styles.container}>
              <div className={styles.columns}>
                <div className={styles.column + ' ' + styles.date}>
                  <div className={styles.label}>Дата доставки</div>
                  <div className={styles.input_row}>
                    <span>с</span>
                    <Calendar
                      selected={this.props.delivery_date__gte}
                      onChange={this.props.onChangeDateFrom}
                      dateFormat={"dd MM yyyy"}
                      customInput={
                        <MaskedTextInput
                          type="text"
                          mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
                        />
                      }
                    />

                  </div>
                  <div className={styles.input_row}>
                    <span>по</span>
                    <Calendar
                      selected={this.props.delivery_date__lte}
                      onChange={this.props.onChangeDateTo}
                      dateFormat={"dd MM yyyy"}
                      customInput={
                        <MaskedTextInput
                          type="text"
                          mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
                        />
                      }
                    />

                  </div>
                  <div>
                    <select
                      style={{
                        width: '100%',
                        marginBottom: '15px',
                      }}
                      name={'request_category'}
                      value={this.props.request_category || ''}
                      onChange={(event) => this.props.onChangeFilter(event)}

                    >
                      <option value={''}>Выберите категорию</option>
                      {this.props.categories.map((e)=>
                        <option key={e.id} value={e.id}>{e.name}</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <select
                      style={{
                        width: '100%',
                        marginBottom: '15px',
                      }}
                      name={'city'}
                      value={this.props.city || ''}
                      onChange={(event) => this.props.onChangeFilter(event)}

                    >
                      <option value={''}>Выберите город</option>
                      {this.props.cities.map((e)=>
                        <option key={e.id} value={e.id}>{e.name}</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <span>По тексту</span>
                    <input type="text" name={"request_description__icontains"} value={this.props.request_description__icontains} onChange={e => this.props.onChangeFilter(e)}/>
                  </div>
                </div>

                {/*<div className={styles.column + ' ' + styles.order}>*/}
                  {/*<div className={styles.label}>Номер заказа</div>*/}
                  {/*<div className={styles.input_row}>*/}
                    {/*<input type="text" name="lot_id" />*/}
                  {/*</div>*/}
                  {/*<a href="">*/}
                    {/*<span>Найти</span>*/}
                  {/*</a>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
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
              {this.props.list && this.props.list.length > 0 ?
                <tbody>
                  {this.props.list.map((item)=> <ListItem
                    id={item.id}
                    category={item.request_category}
                    publish_date={item.created}
                    description={item.request_description}
                    delivery_address={item.delivery_address}
                    expired_date={item.contract_expiration_date}
                    delivery_date={item.delivery_date}
                    city={item.city && item.city.name || ''}
                    street={item.street}
                    building={item.building}
                    office={item.office}
                    onClick={()=>{this.props.openLot(item.id)}}
                    key={item.id}
                  />)}
                </tbody>
              : ''}
            </table>

            <Pagination
              activePage={this.props.page}
              itemsCountPerPage={2}
              totalItemsCount={this.props.count}
              pageRangeDisplayed={5}
              onChange={this.props.changePage}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Lots;
