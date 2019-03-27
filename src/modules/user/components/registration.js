import React, { Component, PureComponent } from 'react';
import iconAutopic from '../../../../images/icon-autopic.png'
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import TopBlock from '../../../components/top_block';
import InputMask from 'react-input-mask';
import FileUploader from '../../../components/file_uploader';

class Registration extends Component {


  // PERSON
  // "name": "Евгений",
  // "last_name": "Култышев",
  // "street": "Алматы",
  // "balance": 5000,
  // "user": {
  //   "email": "cds@gmail.com",
  //   "password": "Qwerty123456"
  // }

  // COMPANY
  // {
  //   "name": "OWLSTUDIO",
  //   "street": "Somewhere",
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
        name: "",
        // street: "",
        // building: "",
        // office: "",
        // city: "",
        // website: "",
        // description: "",
        // balance: 0,
        // bin: '',
      },
      user: {
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        // file: '',
      },
      person: {
        name: "",
        // last_name: "",
        // balance: 0,
      },
      files: props.files,
      type: 'person',
      // formErrors: {user: {email: '', password: '', phone: '', file: ''}},
      formErrors: {user: {name: '', email: '', password: '', password_confirmation: '', phone: '', file: ''}, company: {name: '', bin: '', city: '', website: '', street: '', office: "", building: "",}},
      phoneValid: false,
      emailValid: false,
      fileValid: false,
      passwordValid: false,
      passwordConfirmationValid: false,
      binValid: false,
      websiteValid: false,
      formValid: false,
      streetValid: false,
      officeValid: true,
      buildingValid: false,
      cityValid: false,
      nameValid: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.files != this.state.files) {
      this.setState({files: nextProps.files});
      this.validateField('file', nextProps.files);
    }
  }

  // shouldComponentUpdate(nextProps, nextState){
  //
  //   if (nextProps.files != nextState.files) {
  //       return true;
  //
  //   }
  // }

  save = () => {
    console.log(this.state);

    if (this.state.type === 'person') {
      this.validateField('email', this.state.user.email);
      this.validateField('password', this.state.user.password);
      this.validateField('password_confirmation', this.state.user.password_confirmation);
      this.validateField('phone', this.state.user.phone);
      this.validateField('name', this.state.person.name);
    } else {
      this.validateField('email', this.state.user.email);
      this.validateField('password', this.state.user.password);
      this.validateField('password_confirmation', this.state.user.password_confirmation);
      this.validateField('phone', this.state.user.phone);
      this.validateField('name', this.state.company.name);
      // this.validateField('file', this.state.files);
      // this.validateField('bin', this.state.company.bin);
      // this.validateField('website', this.state.company.website);
      // this.validateField('street', this.state.company.street);
      // this.validateField('building', this.state.company.building);
      // this.validateField('office', this.state.company.office);
      // this.validateField('city', this.state.company.city);
    }
    console.log(this.state);
    if (!this.state.formValid) {
      return;
    }
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

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({user: {...this.state.user, [e.target.name]: e.target.value}},
      () => { this.validateField(name, value) });
    console.log(e, e.target.value, e.target.name);
  };

  handleCompanyInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({company: {...this.state.company, [e.target.name]: e.target.value}},
      () => { this.validateField(name, value) });
    console.log(e, e.target.value, e.target.name);
  };

  handlePersonInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({person: {...this.state.person, [name]: value}},
      () => { this.validateField(name, value) });
    console.log(e, e.target.value, e.target.name);
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let passwordValid = this.state.passwordValid;
    let passwordConfirmationValid = this.state.passwordConfirmationValid;
    let binValid = this.state.binValid;
    let websiteValid = this.state.websiteValid;
    let phoneValid = this.state.phoneValid;
    let fileValid = this.state.fileValid;
    let streetValid = this.state.streetValid;
    let buildingValid = this.state.buildingValid;
    let officeValid = this.state.officeValid;
    let cityValid = this.state.cityValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value.length >= 1;
        fieldValidationErrors.user.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.user.password = passwordValid ? '': ' is too short';
        break;
      case 'name':
        nameValid = value.length > 0;
        fieldValidationErrors.user.name = nameValid ? '': ' is too short';
        break;
      case 'password_confirmation':
        passwordConfirmationValid = (value == this.state.user.password);
        fieldValidationErrors.user.password_confirmation = passwordValid ? '': ' is too short';
        break;
      case 'bin':
        binValid = value.length === 12;
        fieldValidationErrors.company.bin = binValid ? '' : ' is invalid';
        break;
      case 'website':
        websiteValid = value.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm);
        fieldValidationErrors.company.website = websiteValid ? '': ' is too short';
        break;
      case 'phone':
        phoneValid = value.replace(/[|&;_ $%@"<>()+,]/g, "").length === 11;
        fieldValidationErrors.user.phone = phoneValid ? '' : ' is invalid';
        break;
      case 'file':
        fileValid = Object.values(value).length >= 1 || this.state.type === 'person';
        fieldValidationErrors.user.file = fileValid ? '': 'need to upload file';
        break;
      case 'street':
        streetValid = value.length >= 1;
        fieldValidationErrors.company.street = streetValid ? '': 'is invalid';
        break;
      case 'building':
        buildingValid = value.length >= 1;
        fieldValidationErrors.company.building = buildingValid ? '': 'is invalid';
        break;
      case 'office':
        officeValid = value.length >= 0;
        fieldValidationErrors.company.office = officeValid ? '': 'is invalid';
        break;
      case 'city':
        cityValid = value.length >= 1;
        fieldValidationErrors.company.city = cityValid ? '': 'is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      emailValid,
      passwordValid,
      passwordConfirmationValid,
      binValid,
      websiteValid,
      phoneValid,
      fileValid,
      streetValid,
      officeValid,
      buildingValid,
      cityValid,
      nameValid,

    }, this.validateForm);
  };

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');

  };

  validateForm(type = this.state.type) {
    console.log(type, 'TYPE!!!');
    if (type == 'person') {
      this.setState({formValid:
          this.state.emailValid
          && this.state.passwordValid
          && this.state.passwordConfirmationValid
          && this.state.phoneValid
          && this.state.nameValid
      });
    }

    else {
      this.setState({formValid:
          this.state.emailValid
          && this.state.passwordValid
          && this.state.nameValid
          && this.state.passwordConfirmationValid
          // && this.state.binValid
          // && this.state.websiteValid
          && this.state.phoneValid
          // && this.state.fileValid
          // && this.state.streetValid
          // && this.state.officeValid
          // && this.state.buildingValid
          // && this.state.cityValid
      });
    }

  }

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
                   onClick={()=>{this.setState({type: 'person'}); this.validateForm('person')}}>
                Физическое лицо
              </div>
              <div className={styles.person + ((user.type === 'company') ? ' '+ styles.active : '')}
                   onClick={()=>{this.setState({type: 'company'}); this.validateForm('company')}}>
                Юридическое лицо
              </div>
            </div>

              <div className={styles.registaer_content}>
                {(user.type === 'company') ? <div>

                  <div className={styles.name + ' ' + styles.input_block + ' ' +(this.state.nameValid ? '' : styles[this.errorClass(this.state.formErrors.user.name)] ) }>
                    <div className={styles.label}>
                      Название компании:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="name" value={user.company.name} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>
                </div>
                : <div>
                  <div className={styles.name + ' ' + styles.input_block + ' ' +(this.state.nameValid ? '' : styles[this.errorClass(this.state.formErrors.user.name)] ) }>
                    <div className={styles.label}>
                      Имя:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="name" value={user.person.name} onChange={(event) => this.handlePersonInput(event)}/>
                    </div>
                  </div>

                </div> }
                <div className={styles.mail + ' ' + styles.input_block + ' ' +(this.state.emailValid ? '' : styles[this.errorClass(this.state.formErrors.user.email)] ) }>
                  <div className={styles.label}>
                    Электронная почта:
                  </div>
                  <div className={styles.input_box}>
                    <input type="email" value={user.user.email} name="email" placeholder="mail@example.com" onChange={(event) => this.handleUserInput(event)}/>
                    <span>
                      <strong>
                        Обязательно проверьте e-mail адрес!
                      </strong>
                        На данный адрес будет выслана ссылка для подтверждения регистрации.
                    </span>
                  </div>

                </div>





                <div className={styles.phone + ' ' + styles.input_block + ' ' +(this.state.phoneValid ? '' : styles[this.errorClass(this.state.formErrors.user.phone)] ) }>
                  <div className={styles.label}>
                    Телефон:
                  </div>
                  <div className={styles.input_box}>
                    <InputMask mask="+7 (999) 999 99 99" type="phone" className={styles.phone} name="phone" placeholder="+7 (777) 777-77-77" value={user.user.phone} onChange={(event) => this.handleUserInput(event)}/>
                  </div>

                </div>

                <div className={styles.mail + ' ' + styles.input_block + ' ' +(this.state.passwordValid ? '' : styles[this.errorClass(this.state.formErrors.user.password)] ) }>
                  <div className={styles.label}>
                    Пароль:
                  </div>
                  <div className={styles.input_box}>
                    <input type="password" value={user.user.password} name="password"  onChange={(event) => this.handleUserInput(event)}/>
                  </div>

                </div>

                <div className={styles.mail + ' ' + styles.input_block + ' ' +(this.state.passwordConfirmationValid ? '' : styles[this.errorClass(this.state.formErrors.user.password_confirmation)] ) }>
                  <div className={styles.label}>
                    Подтверждение пароля:
                  </div>
                  <div className={styles.input_box}>
                    <input type="password" value={user.user.password_confirmation} name="password_confirmation"  onChange={(event) => this.handleUserInput(event)}/>
                  </div>

                </div>

                {/*<FileUploader className={(this.state.fileValid ? '' : styles[this.errorClass(this.state.formErrors.user.file)])}/>*/}
                {/*{(user.type === 'company')*/}
                  {/*? <FormErrors formErrors={this.state.formErrors} />*/}

                <div className={styles.aprove}>
                  <input type="checkbox" name="rulesChecked"/>
                  Я ознакомился и принимаю
                  <a href="">
                    Соглашение об использовании
                  </a>
                </div>

                <div disabled={!this.state.formValid} className={styles.center} onClick={this.save}>
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
