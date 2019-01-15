import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import iconUserpic from '../../../../images/icon-userpic.png';
import logo_text from '../../../../images/logo-text.png';
import moment from 'moment';
import FileUploader from '../../../components/file_uploader';
import {ServerAddr} from "../../../config";
import {statusLocale} from '../../../utils/locales';
moment().format();

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: 'profile',
      token: props.token,
    };
  }

  save = () => {
    this.props.save(this.state);
  };

  onChangeUser = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({user: {...this.state.user, [e.target.name]: e.target.value}})
  };

  request = () => {
    this.props.testFileUpload({file: this.state.file, token: this.props.token});
  };
  uploadFile = (e) => {
    console.log(e, e.target.value, e.target.name);
    // debugger;
    this.setState({ [e.target.name]: e.target.files[0]});
  };

  render() {
    let state = this.state;
    return <div>
      <div id="app">
        <Header />
        {/*<input placeholder={'Сумма в тенге'} type="text" name="price" value={this.state.price} onChange={this.onChange} />*/}
        {/*<input type="file" name={"file"} onChange={this.uploadFile}/>*/}
        {/*<button onClick={this.request}>Отправить</button>*/}


        <div className={styles.profile_content}>
          <div className={styles.container}>
            <div className={styles.reg_tabs}>
              <div className={styles.person + ((state.tabActive === 'profile') ? ' '+ styles.active : '')}
                   onClick={()=>{this.setState({tabActive: 'profile'})}}>
                Профиль
              </div>
              <div className={styles.person + ((state.tabActive === 'lots') ? ' '+ styles.active : '')}
                   onClick={()=>{this.setState({tabActive: 'lots'})}}>
                Мои заказы
              </div>
              <div className={styles.person + ((state.tabActive === 'requests') ? ' '+ styles.active : '')}
                   onClick={()=>{this.setState({tabActive: 'requests'})}}>
                Мои предложения
              </div>
            </div>
            {(state.tabActive === 'profile') ?
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
                      {this.props.profile.person ? this.props.profile.person.name : ''}
                      {this.props.profile.company ? this.props.profile.company.name : ''}
                    </h2>
                    {(this.props.profile.person ?
                      <table>
                        <tbody>
                          <tr>
                            <td>Телефон</td>
                            <td>{this.props.user.profile.phone}</td>
                          </tr>
                          <tr>
                            <td>Баланс</td>
                            <td>{this.props.profile.person.balance}</td>
                          </tr>
                        </tbody>
                      </table>
                    : '')}
                    {(this.props.profile.company ?
                    <table>
                      <tbody>
                        <tr>
                          <td>Телефон</td>
                          <td>{this.props.user.profile.phone}</td>
                        </tr>
                        <tr>
                          <td>Баланс</td>
                          <td>{this.props.profile.company.balance.split('.')[0]}</td>
                        </tr>
                        <tr>
                          <td>Город</td>
                          <td>{this.props.cities.filter(e => e.id == this.props.profile.company.city)[0].name}</td>
                        </tr>
                        <tr>
                          <td>Улица</td>
                          <td>{this.props.profile.company.street}</td>
                        </tr>
                        <tr>
                          <td>Дом</td>
                          <td>{this.props.profile.company.building}</td>
                        </tr>
                        <tr>
                          <td>Офис</td>
                          <td>{this.props.profile.company.office}</td>
                        </tr>
                        <tr>
                          <td>БИН</td>
                          <td>{this.props.profile.company.bin}</td>
                        </tr>
                        <tr>
                          <td>Сайт</td>
                          <td>{this.props.profile.company.website}</td>
                        </tr>
                        <tr>
                          <td>Описание</td>
                          <td>{this.props.profile.company.description}</td>
                        </tr>
                        {(this.props.profile.company.files.length > 0) ?
                          <tr>
                            <td>Прикрепленные файлы</td>
                            <td>
                              {this.props.profile.company.files.map((e,i) => <div key={i}><a href={ServerAddr + '' + e.content} target={"_blank"}>{e.content.split('/')[e.content.split('/').length -1]}</a></div>)}
                            </td>
                          </tr>
                          : ''}
                      </tbody>


                    </table>
                    : '')}
                    {/*<div>*/}
                      {/*заказчик/перевозчик*/}
                    {/*</div>*/}

                    {/*<div className={styles.count_transitions}>*/}
                      {/*<a href="">0 перевозок</a>*/}
                      {/*/*/}
                      {/*<a href="">0 ставки</a>*/}
                    {/*</div>*/}
                    {/*<div className={styles.count_orders}>*/}
                      {/*<a href="">0 заказов</a>*/}
                      {/*/*/}
                      {/*<a href="">0 выполненных</a>*/}
                    {/*</div>*/}
                  </div>
                </div>
                <div className={styles.what_person}>
						<span>
							{this.props.profile.person ? 'Физическое лицо' : 'Компания' }
						</span>
                </div>
                {/*<a href="" className={styles.change_password}>*/}
                  {/*Сменить пароль*/}
                {/*</a>*/}
                <a className={styles.change_password} onClick={this.props.openEditProfile}>
                  Редактировать профиль
                </a>

              </div>
              {/*<div className={styles.categories}>*/}
                {/*Категории перевозок*/}
              {/*</div>*/}
              {/*<div className={styles.cars}>*/}
                {/*<h2>Автопарк <span>(0 машин)</span></h2>*/}
              {/*</div>*/}
            </div>
              :  null }
            {(state.tabActive === 'lots') ?
            <div className={styles.orders}>
              <table>
                <tbody>
                {this.props.myList.map(e =>
                  <tr key={e.id} onClick={() => this.props.openLot(e.id)}>
                    <td className={styles.status}>{statusLocale[e.status]}</td>
                    <td className={styles.left + ' ' + styles.info} onClick={() => this.props.openLot(e.id)}>
                      <p>
                        Лот № {e.id}
                      </p>
                      <span className={styles.category}>
                          {e.request_category.name}
                      </span>
                      <span className={styles.publishedon}>
                        {moment(e.auction_duration).format('DD.MM.YYYY')}
                      </span>
                     </td>
                    <td className={styles.left + ' ' + styles.title}><a>{e.request_description}</a></td>
                    <td> ставок {e.bids && e.bids.length || 0}  / предложений {e.partnerships && e.partnerships.length || 0} </td>
                  </tr>
                )}
                {/*<tr>*/}
                  {/*<td className={styles.status}>Активен</td>*/}
                  {/*<td className={styles.left + ' ' + styles.info}>*/}
                    {/*<p>*/}
                      {/*№392334634*/}
                    {/*</p>*/}
                    {/*<span className={styles.category}>*/}
									{/*Стройматериалы*/}
								{/*</span>*/}
                    {/*<span className={styles.publishedon}>*/}
									{/*16:52 16 декабря*/}
								{/*</span>*/}
                  {/*</td>*/}
                  {/*<td className={styles.left + ' ' + styles.title}><a href="#">Цемент</a></td>*/}
                  {/*<td>14 предложений</td>*/}
                {/*</tr>*/}
                </tbody>
              </table>
            </div>
              :  null }
            {(state.tabActive === 'requests') ?
            <div className={styles.requests}>
              <table>
                <tbody>

                {this.props.myBids.map(e =>
                  <tr key={e.id}>
                    <td className={styles.status}>{statusLocale[e.status]}</td>
                    <td className={styles.left + ' ' + styles.info} onClick={() => this.props.openLot(e.auction)}>
                      <p>
                        Лот № {e.auction}
                      </p>
                      <span className={styles.category}>
                          {e.auction_info.request_category.name}
                      </span>
                      <span className={styles.publishedon}>
                        {moment(e.auction_info.contract_expiration_date).format('DD.MM.YYYY')}
                      </span>
                    </td>
                    <td className={styles.left + ' ' + styles.title}><a>{e.auction_info.request_description}</a></td>
                    <td>{e.amount}</td>
                  </tr>
                )}
                {/*<tr>*/}
                  {/*<td className={styles.status}>Активен</td>*/}
                  {/*<td className={styles.left + ' ' + styles.info}>*/}
                    {/*<p>*/}
                      {/*№392334634*/}
                    {/*</p>*/}
                    {/*<span className={styles.category}>*/}
									{/*Стройматериалы*/}
								{/*</span>*/}
                    {/*<span className={styles.publishedon}>*/}
									{/*16:52 16 декабря*/}
								{/*</span>*/}
                  {/*</td>*/}
                  {/*<td className={styles.left + ' ' + styles.title}><a href="#">Цемент</a></td>*/}
                  {/*<td>50 000 тенге</td>*/}
                {/*</tr>*/}
                </tbody>
              </table>
            </div>
            :  null }
          </div>
        </div>
    </div>
    </div>
  }
}

export default Profile;
