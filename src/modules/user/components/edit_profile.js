import React, { Component, PureComponent } from 'react';
import iconAutopic from '../../../../images/icon-autopic.png'
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import TopBlock from '../../../components/top_block';
import InputMask from 'react-input-mask';
import FileUploader from '../../../components/file_uploader';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      ...props.profile,
      phone: '+7'+props.profile.phone,
      company: (props.profile.company ? {
        name: props.profile.company.name || '',
        street: props.profile.company.street || '',
        building: props.profile.company.building || '',
        office: props.profile.company.office || '',
        city: props.profile.company.city || '',
        website: props.profile.company.website || '',
        description: props.profile.company.description || '',
        balance: props.profile.company.balance || '',
        bin: props.profile.company.bin || '',
        id: props.profile.company.id,
        files: props.profile.company.files,
      } : false ),
      isPerson: !!props.profile.person,
      // user: {
      //   email: '',
      //   password: '',
      //   phone: '',
      //   file: '',
      // },
      // person: {
      //   name: "",
      //   last_name: "",
      //   street: "",
      //   balance: 0,
      // },
      // formErrors: {user: {email: '', password: '', phone: '', file: ''}},
      formErrors: {user: {email: '', password: '', phone: '', file: ''}, company: {bin: '', city: '', website: '', street: '', office: "", building: "",}},
      phoneValid: true,
      emailValid: true,
      fileValid: true,
      passwordValid: true,
      binValid: true,
      websiteValid: true,
      formValid: true,
      streetValid: true,
      officeValid: true,
      buildingValid: true,
      cityValid: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.files != this.state.files) {
      this.setState({files: nextProps.files});
      this.validateField('file', nextProps.files);
    }
  }

  save = () => {


    if (this.state.isPerson) {
      this.validateField('phone', this.state.phone);
    } else {
      this.validateField('phone', this.state.phone);
      this.validateField('bin', this.state.company.bin);
      this.validateField('website', this.state.company.website);
      this.validateField('street', this.state.company.street);
      this.validateField('building', this.state.company.building);
      this.validateField('office', this.state.company.office);
      this.validateField('city', this.state.company.city);
    }
    if (!this.state.formValid) {
      return;
    }
    this.props.save(this.state);
  };

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[e.target.name]: e.target.value},
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
    let passwordValid = this.state.passwordValid;
    let binValid = this.state.binValid;
    let websiteValid = this.state.websiteValid;
    let phoneValid = this.state.phoneValid;
    let fileValid = this.state.fileValid;
    let streetValid = this.state.streetValid;
    let buildingValid = this.state.buildingValid;
    let officeValid = this.state.officeValid;
    let cityValid = this.state.cityValid;

    console.log(fieldName, value, this.state);

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value.length >= 1;
        fieldValidationErrors.user.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.user.password = passwordValid ? '': ' is too short';
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
        fileValid = Object.values(value).length >= 1 || this.state.isPerson;
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
    console.log({ emailValid,
      passwordValid,
      binValid,
      websiteValid,
      phoneValid,
      fileValid,
      streetValid,
      officeValid,
      buildingValid,
      cityValid});
    this.setState({formErrors: fieldValidationErrors,
      emailValid,
      passwordValid,
      binValid,
      websiteValid,
      phoneValid,
      fileValid,
      streetValid,
      officeValid,
      buildingValid,
      cityValid,

    }, this.validateForm);
  };

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');

  };

  validateForm(type = this.state.isPerson) {
    console.log(type, 'TYPE!!!');
    if (type) {
      this.setState({formValid:
          this.state.emailValid
          && this.state.passwordValid
          && this.state.phoneValid
      });
    }

    else {
      this.setState({formValid:
          this.state.emailValid
          && this.state.passwordValid
          && this.state.binValid
          && this.state.websiteValid
          && this.state.phoneValid
          && this.state.fileValid
          && this.state.streetValid
          && this.state.officeValid
          && this.state.buildingValid
          && this.state.cityValid
      });
    }

  }

  render() {

    let user = this.state;

    return <div>
      <Header />
      <TopBlock text="Редактирование" />
      <div className={styles.reg_content}>
        <div className={styles.container}>
          <form className={styles.register}>
              <div className={styles.registaer_content}>
                <div className={styles.mail + ' ' + styles.input_block + ' ' +(this.state.emailValid ? '' : styles[this.errorClass(this.state.formErrors.user.email)] ) }>
                  <div className={styles.label}>
                    Электронная почта:
                  </div>
                  <div className={styles.input_box}>
                    <input disabled type="email" value={user.email} name="email" placeholder="mail@example.com" onChange={(event) => this.handleUserInput(event)}/>
                    <span>
                      <strong>
                        Обязательно проверьте e-mail адрес!
                      </strong>
                        На данный адрес будет выслана ссылка для подтверждения регистрации.
                    </span>
                  </div>

                </div>


                {(!user.isPerson) ? <div>

                  <div className={styles.name + ' ' + styles.input_block}>
                    <div className={styles.label}>
                      Название компании:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="name" value={user.company.name} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.cityValid ? '' : styles[this.errorClass(this.state.formErrors.company.city)] ) }>
                    <div className={styles.label}>
                      Город:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="city" value={user.company.city} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.streetValid ? '' : styles[this.errorClass(this.state.formErrors.company.street)] ) }>
                    <div className={styles.label}>
                      Улица:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="street" value={user.company.street} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.buildingValid ? '' : styles[this.errorClass(this.state.formErrors.company.building)] ) }>
                    <div className={styles.label}>
                      Здание:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="building" value={user.company.building} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.officeValid ? '' : styles[this.errorClass(this.state.formErrors.company.office)] ) }>
                    <div className={styles.label}>
                      Офис:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="office" value={user.company.office} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block + ' ' +(this.state.binValid ? '' : styles[this.errorClass(this.state.formErrors.company.bin)] ) }>
                    <div className={styles.label}>
                      БИН:
                    </div>
                    <div className={styles.input_box}>
                      <input type="number" className={styles.name} name="bin" value={user.company.bin} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block + ' ' +(this.state.websiteValid ? '' : styles[this.errorClass(this.state.formErrors.company.website)] ) }>
                    <div className={styles.label}>
                      Сайт:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="website" value={user.company.website} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block}>
                    <div className={styles.label}>
                      Описание компании:
                    </div>
                    <div className={styles.input_box}>
                      <textarea className={styles.name} name="description" value={user.company.description} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                </div>
                : <div>
                    <div className={styles.name + ' ' + styles.input_block}>
                      <div className={styles.label}>
                        Имя:
                      </div>
                      <div className={styles.input_box}>
                        <input type="text" className={styles.name} name="name" value={user.person.name} onChange={(event) => this.handlePersonInput(event)}/>
                      </div>
                    </div>

                </div> }

                <div className={styles.phone + ' ' + styles.input_block + ' ' +(this.state.phoneValid ? '' : styles[this.errorClass(this.state.formErrors.user.phone)] ) }>
                  <div className={styles.label}>
                    Телефон:
                  </div>
                  <div className={styles.input_box}>
                    <InputMask mask="+7 (999) 999 99 99" type="phone" className={styles.phone} name="phone" placeholder="+7 (777) 777-77-77" value={user.phone} onChange={(event) => this.handleUserInput(event)}/>
                  </div>

                </div>

                {/*<FileUploader className={(this.state.fileValid ? '' : styles[this.errorClass(this.state.formErrors.user.file)])}/>*/}
                {/*{(user.type === 'company')*/}
                  {/*? <FormErrors formErrors={this.state.formErrors} />*/}

                <div disabled={!this.state.formValid} className={styles.center} onClick={this.save}>
                  <a>
                    <span>
                        Сохранить
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

export default EditProfile;
