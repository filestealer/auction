import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import logo_text from '../../../../images/logo-text.png';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TopBlock from '../../../components/top_block';
import moment from 'moment';
import {ServerAddr} from '../../../config'

import {statusLocale} from '../../../utils/locales';
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
      price: '',
      openRequest: false,
      openRequestPartnership: false,
      file: {},
    };
  }

  // componentDidMount(state,props) {
  //   this.props.reload(this.props.id);
  // }

  request = () => {
    this.props.request({price: this.state.price, id: this.props.id, file: this.state.file});
    this.setState({openRequest: false});
  };
  requestPartnership = () => {
    this.props.requestPartnership({description: 'test', id: this.props.id, volume: this.state.volume});
    this.setState({openRequestPartnership: false});
  };

  openRequest = () => {
    this.setState({openRequest: true});
  };
  openRequestPartnership = () => {
    this.setState({openRequestPartnership: true});
  };

  onChange = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value})
  };
  uploadFile = (e) => {
    console.log(e, e.target.value, e.target.name);
    // debugger;
    this.setState({ [e.target.name]: e.target.files[0]});
  };


  render() {
    console.log(this.props);
    return (
      <div>
        <div id="app">
          <Header />
          <TopBlock text={"Заказ №" + this.props.id} />

        </div>
        <div className={styles.lot_content}>
          <div className={styles.container}>
            {this.props.description ?
              <table style={{margin: '0 auto', maxWidth: '800px', width: '500px', td: {padding: '10px'}}}>
              <tbody>
                <tr>
                  <td><strong>Категория</strong></td>
                  <td>{this.props.request_category.name}</td>
                </tr>
                <tr>
                  <td><strong>Описание</strong></td>
                  <td>{this.props.description}</td>
                </tr>
                <tr>
                  <td><strong>Общий объем</strong></td>
                  <td>{this.props.total_volume}</td>
                </tr>
                {this.props.isMy ?
                  <tr>
                    <td><strong>Мой объем</strong></td>
                    <td>{this.props.volume.split('.')[0]}</td>
                  </tr>

                  :'' }

                <tr>
                  <td><strong>Дата поставки</strong></td>
                  <td>{moment(this.props.delivery_date).format('DD-MM-YYYY HH:mm')}</td>
                </tr>
                <tr>
                  <td><strong>Инициатор</strong></td>
                  <td onClick={()=>this.props.openUser(this.props.initiator.id)}><a >{(this.props.initiator.person) ? this.props.initiator.person.name : (this.props.initiator.company && this.props.initiator.company.name)}</a></td>
                </tr>
                <tr>
                  <td><strong>Адрес поставки</strong></td>
                  <td>г. {this.props.city}, ул. {this.props.street} {this.props.building}   {this.props.office ? 'оф '+ this.props.office  : ''}</td>
                </tr>
                <tr>
                  <td><strong>Статус</strong></td>
                  <td>{this.props.chosen_bid ? statusLocale['closed'] : statusLocale[this.props.status]}</td>
                </tr>
                <tr>
                  <td><strong>Создан</strong></td>
                  <td>{moment(this.props.publish_date).format('DD-MM-YYYY')}</td>
                </tr>
                <tr>
                  <td><strong>Окончание</strong></td>
                  <td>{moment(this.props.auction_duration).format('DD-MM-YYYY')}</td>
                </tr>
                <tr>
                  <td><strong>Минимальная ставка</strong></td>
                  <td>{this.props.min_bid_amount || 'ставок нет'}</td>
                </tr>
                <tr>
                  <td><strong>Количество заявок</strong></td>
                  <td>{this.props.bids_count || 0}</td>
                </tr>
                {(this.props.files.length > 0) ?
                <tr>
                  <td><strong>Прикрепленные файлы</strong></td>
                  <td>
                    {this.props.files.map((e,i) => <div key={i}><a href={e.content} target={"_blank"}>{decodeURI(e.content).split('/').last()}</a></div>)}
                  </td>
                </tr>
                : ''}

              </tbody>


            </table>
            : ''}
          </div>
        </div>

        <div className={styles.lot_content}>
          <div className={styles.container}>
            {/*<h1 className={styles.title}>{this.props.request_category.name}</h1>*/}
            {/*<h3 />*/}
            <div className={styles.main_part}>

              {/*<p>{this.props.description}</p>*/}
              {/*<div className={styles.columns}>*/}
                {/*<div className={styles.column + ' ' + styles.left}>*/}
                  {/*<div className={styles.when_date + ' ' + styles.back}>*/}
                    {/*<span className={styles.name}>Когда нужно:</span>*/}
                    {/*<span className={styles.date}>*/}
                      {/*{moment(this.props.delivery_date).format('DD-MM-YYYY')}*/}
                      {/*<span className={styles.time}>{moment(this.props.delivery_date).format('HH:mm')}</span>*/}
                    {/*</span>*/}
                  {/*</div>*/}

                  {/*/!*<div className={styles.weight + ' ' + styles.back}>*!/*/}
                    {/*/!*<span className={styles.name}>Вес:</span>*!/*/}

                    {/*/!*<span className={styles.date}>0 кг.</span>*!/*/}
                  {/*/!*</div>*!/*/}

                  {/*<div className={styles.back} />*/}

                  {/*<div className={styles.user + ' ' + styles.back}>*/}
                    {/*<a >{(this.props.initiator.person) ? this.props.initiator.person.name : (this.props.initiator.company && this.props.initiator.company.name)}</a>*/}
                  {/*</div>*/}
                {/*</div>*/}

                {/*<div className={styles.column + ' ' + styles.right}>*/}
                  {/*<div className={styles.destination_points}>*/}
                    {/*<div className={styles.destination_holder}>*/}
                      {/*<div className={styles.flex_box}>*/}
                        {/*<div className={styles.from}>*/}
                          {/*<span className={styles.city}>{this.props.delivery_address}</span>*/}
                          {/*<span className={styles.address} />*/}
                        {/*</div>*/}
                        {/*/!*<i />*!/*/}
                        {/*<div className={styles.to}>*/}
                          {/*<span className={styles.city}></span>*/}
                          {/*<span className={styles.address} />*/}
                        {/*</div>*/}
                      {/*</div>*/}
                      {/*<span className={styles.distance}></span>*/}
                      {/*<div className={styles.flex_box}>*/}
                        {/*<input type="hidden" name="geo_saved" value="0" />*/}
                        {/*<input*/}
                          {/*type="hidden"*/}
                          {/*name="coordinates"*/}
                          {/*value='["",""]'*/}
                        {/*/>*/}
                        {/*<div*/}
                          {/*className={styles['map"']}*/}
                          {/*style={{*/}
                            {/*width: '400px',*/}
                            {/*height: '305px',*/}
                          {/*}}*/}
                        {/*/>*/}
                        {/*<aside>*/}
                          {/*<div className={styles.box}>*/}
                            {/*<div className={styles.status}>*/}
                              {/*Статус:*/}
                              {/*<span>{this.props.status == 'active' ? 'Активен' : this.props.status}</span>*/}
                            {/*</div>*/}
                            {/*<div className={styles.create_at}>*/}
                              {/*Создан: {moment(this.props.publish_date).format('DD-MM-YYYY')}*/}
                            {/*</div>*/}
                            {/*<div className={styles.finish}>*/}
                              {/*<strong>Окончание: {moment(this.props.delivery_date).format('DD-MM-YYYY')}</strong>*/}
                            {/*</div>*/}
                          {/*</div>*/}
                        {/*</aside>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</div>*/}
            </div>
            {!this.props.isMy ? <div>
              {(this.props.bids.length == 0) ? <div>
                <div className={styles.make_offer}>
                  <a className={styles['green-button']} onClick={this.openRequestPartnership}>
                    <span>Совместная покупка</span>
                  </a>
                </div>

                <div className={styles.make_offer_form + (this.state.openRequestPartnership ? ' ' + styles.active : '')}>

                  <input placeholder={'Ваш объем'} type="text" name="volume" value={this.state.volume} onChange={this.onChange} />
                  {/*<br/>*/}
                  {/*<input placeholder={'Сообщение'} type="text" name="description" value={this.state.description} onChange={this.onChange} />*/}
                  {/*<br/>*/}
                  <button onClick={this.requestPartnership}>Отправить</button>
                </div>
              </div>: '' }
            <div className={styles.make_offer}>
              <a className={styles['green-button']} onClick={this.openRequest}>
                <span>Сделать предложение</span>
              </a>
            </div>
            <div className={styles.make_offer_form + (this.state.openRequest ? ' ' + styles.active : '')}>
              <div className={styles.remaining_time}>
                Сделайте свое предложение
                {/*Осталось <span>27</span> дней <span>8</span> часа*/}
              </div>
              <input placeholder={'Сумма в тенге'} type="text" name="price" value={this.state.price} onChange={this.onChange} />
              {/*<input type="file" name={"file"} onChange={this.uploadFile}/>*/}
              <button onClick={this.request}>Отправить</button>
            </div>
              </div> : '' }
            {this.props.isMy ? <div>
              <div className={styles.offers_list}>
                <h2>
                  Предложения (<span>{this.props.partnerships.length}</span>)
                </h2>
                <table>
                  <thead>
                  <tr>
                    <td>Предложение</td>
                    <td>Партнер</td>
                    <td></td>
                    <td />
                    <td />
                  </tr>
                  {this.props.partnerships.map((e,i)=> { return <tr key={i}>
                    <td>{e.volume.split('.')[0]}</td>
                    <td onClick={()=>this.props.openUser(e.partner.id)}>{e.partner && e.partner.company && e.partner.company.name || e.partner && e.partner.person && e.partner.person.name}</td>
                    <td>{e.confirmed ? 'Предложение принято' : <div className={styles.newButton} onClick={()=> this.props.acceptPartnership({partnership: e.id, auction: this.props.id})}>Принять</div>}</td>
                    <td />
                    <td />
                  </tr>})}
                  </thead>
                </table>
              </div>
              <div className={styles.offers_list}>
                <h2>
                  Ставки (<span>{this.props.bids.length}</span>)
                </h2>
                <table>
                  <thead>
                  <tr>
                    <td>Ставка</td>
                    <td>Исполнитель</td>
                    <td></td>
                    <td />
                    <td />
                  </tr>
                  {this.props.bids.map((e,i)=> { return <tr key={i}>
                    <td>{e.amount.split('.')[0]}</td>
                    <td onClick={()=>this.props.openUser(e.user && e.user.id)}>{e.user && e.user.company && e.user.company.name || e.user && e.user.person && e.user.person.name}</td>
                    <td>{(this.props.chosen_bid && this.props.chosen_bid.id === e.id)  ? 'Ставка принята': (this.props.chosen_bid && this.props.chosen_bid.id ? '' : <div className={styles.newButton} onClick={()=> this.props.acceptBid({bid: e.id, auction: this.props.id})}>Принять</div>) }
                    </td>
                    <td>{
                      (this.props.chosen_bid && this.props.chosen_bid.id === e.id)  ?
                        <button className={styles.newButton} onClick={()=>this.props.openPopup()}>Подписать</button> :
                        '' }
                    </td>
                    <td />
                    <td />
                  </tr>})}
                  </thead>
                </table>
              </div>
            </div> : ''}




          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Lot;
