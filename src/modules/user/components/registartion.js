import React, { Component } from 'react';
import iconAutopic from '../../../../images/icon-autopic.png'
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import TopBlock from '../../../components/top_block';
import InputMask from 'react-input-mask';


class Registration extends Component {


  // PERSON
  // "name": "Евгений",
  // "last_name": "Култышев",
  // "address": "Алматы",
  // "balance": 5000,
  // "user": {
  //   "email": "cds@gmail.com",
  //   "password": "Qwerty123456"
  // }

  // COMPANY
  // {
  //   "name": "OWLSTUDIO",
  //   "address": "Somewhere",
  //   "website": "https://owlstudio.kz",
  //   "description": "web studio",
  //   "balance": 5000,
  //   "user": {
  //     "email": "csa@gmail.com",
  //     "password": "Qwerty123456"
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      company: {
        name: "OWLSTUDIO",
        address: "Somewhere",
        website: "https://owlstudio.kz",
        description: "web studio",
        balance: 0,
        bin: '',
      },
      user: {
        email: '',
        password: '',
        phone: '',
      },
      person: {
        name: "",
        last_name: "",
        address: "",
        balance: 0,
      },
      type: 'person'
    };
  }

  save = () => {
    this.props.save(this.state);
  };

  onChangeUser = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({user: {...this.state.user, [e.target.name]: e.target.value}})
  };

  onChangeCompany = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({company: {...this.state.company, [e.target.name]: e.target.value}})
  };

  onChangePerson = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({person: {...this.state.person, [e.target.name]: e.target.value}})
  };

  render() {

    let user = this.state;
    return <div>
      <Header />
      <TopBlock text="Регистрация" />
      <div className={styles.reg_content}>
        <div className={styles.container}>
          <form className={styles.register}>
            <div className={styles.reg_tabs}>
              <div className={styles.person + ((user.type === 'person') ? ' '+ styles.active : '')}
                   onClick={()=>{this.setState({type: 'person'})}}>
                Физическое лицо
              </div>
              <div className={styles.person + ((user.type === 'company') ? ' '+ styles.active : '')}
                   onClick={()=>{this.setState({type: 'company'})}}>
                Юридическое лицо
              </div>
            </div>

              <div className={styles.registaer_content}>
                <div className={styles.mail + ' ' + styles.input_block}>
                  <div className={styles.label}>
                    Электронная почта:
                  </div>
                  <div className={styles.input_box}>
                    <input type="email" value={user.user.email} name="email" placeholder="mail@example.com" onChange={this.onChangeUser}/>
                    <span>
                      <strong>
                        Обязательно проверьте e-mail адрес!
                      </strong>
                        На данный адрес будет выслана ссылка для подтверждения регистрации.
                    </span>
                  </div>

                </div>

                <div className={styles.phone + ' ' + styles.input_block}>
                  <div className={styles.label}>
                    Пароль:
                  </div>
                  <div className={styles.input_box}>
                    <InputMask mask="99/99/9999" type="password" className={styles.phone} name="password" value={user.user.password} placeholder="" onChange={this.onChangeUser}/>
                  </div>

                </div>

                {(user.type === 'company') ? <div>

                  <div className={styles.name + ' ' + styles.input_block}>
                    <div className={styles.label}>
                      Название компании:
                    </div>
                    <div className={styles.input_box}>
                      <input type="name" className={styles.name} name="name" value={user.company.name} onChange={this.onChangeCompany}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block}>
                    <div className={styles.label}>
                      БИН:
                    </div>
                    <div className={styles.input_box}>
                      <input type="name" className={styles.name} name="bin" value={user.company.bin} onChange={this.onChangeCompany}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block}>
                    <div className={styles.label}>
                      Сайт:
                    </div>
                    <div className={styles.input_box}>
                      <input type="name" className={styles.name} name="website" value={user.company.website} onChange={this.onChangeCompany}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block}>
                    <div className={styles.label}>
                      Описание компании:
                    </div>
                    <div className={styles.input_box}>
                      <textarea type="name" className={styles.name} name="description" value={user.company.description} onChange={this.onChangeCompany}/>
                    </div>

                  </div>

                </div>
                : <div>
                    <div className={styles.name + ' ' + styles.input_block}>
                      <div className={styles.label}>
                        Имя:
                      </div>
                      <div className={styles.input_box}>
                        <input type="name" className={styles.name} name="name" value={user.person.name} onChange={this.onChangePerson}/>
                      </div>
                    </div>

                </div> }

                <div className={styles.phone + ' ' + styles.input_block}>
                  <div className={styles.label}>
                    Телефон:
                  </div>
                  <div className={styles.input_box}>
                    <InputMask mask="+7 (999) 999 99 99" type="phone" className={styles.phone} name="phone" placeholder="+7 (777) 777-7777" value={user.user.phone} onChange={this.onChangeUser}/>
                  </div>

                </div>


                <div className={styles.aprove}>
                  <input type="checkbox" name="rulesChecked"/>
                  Я ознакомился и принимаю
                  <a href="">
                    Соглашение об использовании
                  </a>
                </div>

                <div className={styles.center} onClick={this.save}>
                  <a>
                    <span>
                        Зарегистрироваться
                    </span>
                  </a>
                </div>
              </div>



          </form>

          <div className={styles.support_block}>
            <span className={styles.font}>
                Служба поддержки: +7 777 617 27 71
            </span>
            <a>
              <span>
                  Заказать звонок
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Registration;
