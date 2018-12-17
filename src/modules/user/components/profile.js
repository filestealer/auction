import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import iconUserpic from '../../../../images/icon-userpic.png';
import logo_text from '../../../../images/logo-text.png';
import moment from 'moment';
moment().format();

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: 'profile',
    };
  }

  save = () => {
    this.props.save(this.state);
  };

  onChangeUser = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({user: {...this.state.user, [e.target.name]: e.target.value}})
  };
  render() {
    let state = this.state;
    return <div>
      <div id="app">
        <Header />
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
                    <div>
                      заказчик/перевозчик
                    </div>

                    {/*<div className={styles.count_transitions}>*/}
                      {/*<a href="">0 перевозок</a>*/}
                      {/*/*/}
                      {/*<a href="">0 ставки</a>*/}
                    {/*</div>*/}
                    <div className={styles.count_orders}>
                      <a href="">0 заказов</a>
                      /
                      <a href="">0 выполненных</a>
                    </div>
                  </div>
                </div>
                <div className={styles.what_person}>
						<span>
							{this.props.profile.person ? 'Физическое лицо' : 'Компания' }
						</span>
                </div>
                <a href="" className={styles.change_password}>
                  Сменить пароль
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
                  <tr key={e.id}>
                    <td className={styles.status}>Активен</td>
                    <td className={styles.left + ' ' + styles.info}>
                      <p>
                        {e.id}
                      </p>
                      <span className={styles.category}>
                          {e.request_category.name}
                      </span>
                      <span className={styles.publishedon}>
                        {moment(e.contract_expiration_date).format('DD.MM.YYY')}
                      </span>
                     </td>
                    <td className={styles.left + ' ' + styles.title}><a>{e.request_description}</a></td>
                    <td>{e.partners.size()} предложений</td>
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
                    <td className={styles.status}>Активен</td>
                    <td className={styles.left + ' ' + styles.info}>
                      <p>
                        {e.auction}
                      </p>
                      <span className={styles.category}>
                          {e.auction_info.request_category.name}
                      </span>
                      <span className={styles.publishedon}>
                        {moment(e.auction_info.contract_expiration_date).format('DD.MM.YYY')}
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
