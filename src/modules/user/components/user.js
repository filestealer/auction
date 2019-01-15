import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import moment from 'moment';
import {ServerAddr} from "../../../config";

moment().format();

class User extends Component {


  render() {
    return <div>
      <div id="app">
        <Header />
        <div className={styles.profile_content}>
          <div className={styles.container}>
            <div className={styles.reg_tabs}>
              <div className={styles.person + styles.active} >
                Профиль пользователя
              </div>
            </div>

              <div className={styles.profile}>
                <div className={styles.top_row}>
                  <div className={styles.photo_block}>
                    <div>
                      <a href="">
                        {/*<img alt={''} src={'/' + iconUserpic}/>*/}
                      </a>
                    </div>
                    <div className={styles.desc}>
                      <h2>
                        {(this.props.profile && this.props.profile.person) ? this.props.profile.person.name : ''}
                        {(this.props.profile && this.props.profile.company) ? this.props.profile.company.name : ''}
                      </h2>
                      {(this.props.profile && this.props.profile.person ?
                        <table>
                          <tbody>
                          <tr>
                            <td>Телефон</td>
                            <td>{this.props.profile.phone}</td>
                          </tr>
                          </tbody>
                        </table>
                        : '')}
                      {(this.props.profile && this.props.profile.company ?
                        <table>
                          <tbody>
                          <tr>
                            <td>Телефон</td>
                            <td>{this.props.profile.phone}</td>
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
                          {(this.props.profile.company.files && this.props.profile.company.files.length > 0) ?
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
                    </div>
                  </div>
                  <div className={styles.what_person}>
						<span>
							{(this.props.profile && this.props.profile.person) ? 'Физическое лицо' : 'Компания' }
						</span>
                  </div>

                </div>

              </div>



          </div>
        </div>
      </div>
    </div>
  }
}

export default User;
