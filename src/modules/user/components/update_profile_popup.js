import React, { Component, PureComponent } from 'react';
import iconAutopic from '../../../../images/icon-autopic.png'
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import TopBlock from '../../../components/top_block';
import InputMask from 'react-input-mask';
import FileUploader from '../../../components/file_uploader';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-datepicker";
import MaskedTextInput from "react-text-mask";

class UpdateProfilePopup extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      ...props.profile,
      phone: '+7'+props.profile.phone,
      company: (props.profile.company ? {
        bin: props.profile.company.bin || '',
        legal_address: props.profile.company.legal_address || '',
        actual_address: props.profile.company.actual_address || '',
        director: props.profile.company.director || '',
        bik: props.profile.company.bik || '',
        iik: props.profile.company.iik || '',
        bank_name: props.profile.company.bank_name || '',
        id: props.profile.company.id || '',

      } : false ),
      person: (props.profile.person ? {
        iin: props.profile.person.iin || '',
        place_of_residence: props.profile.person.place_of_residence || '',
        certificate_number: props.profile.person.certificate_number || '',
        issued_by: props.profile.person.issued_by || '',
        when_issued: props.profile.person.when_issued || '',
        valid_until: props.profile.person.valid_until || '',
        id: props.profile.person.id || '',
      } : false ),
      isPerson: !!props.profile.person,
      formErrors: {
        user: {email: '', password: '', phone: '', file: ''},
        person: {iin: '', place_of_residence: '', certificate_number: '', issued_by: '', when_issued: '', valid_until: ''},
        company: {bin: '', legal_address: '', actual_address: '', director: '', bik: '', iik: '', bank_name: ''}
      },
      formValid: false,

      iinValid: false,
      placeOfResidenceValid: false,
      certificateNumberValid: false,
      issuedByValid: false,
      whenIssuedValid: false,
      validUntilValid: false,

      binValid: false,
      bikValid: false,
      iikValid: false,
      bankNameValid: false,
      legalAddressValid: false,
      actualAddressValid: false,

    };
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.files != this.state.files) {
  //     this.setState({files: nextProps.files});
  //     this.validateField('file', nextProps.files);
  //   }
  // }

  save = () => {


    if (this.props.isPerson) {
      this.validateField('iin', this.state.person.iin);
      this.validateField('place_of_residence', this.state.person.place_of_residence);
      this.validateField('certificate_number', this.state.person.certificate_number);
      this.validateField('issued_by', this.state.person.issued_by);
      this.validateField('when_issued', this.state.person.when_issued);
      this.validateField('valid_until', this.state.person.valid_until);
    } else {
      this.validateField('bin', this.state.company.bin || this.props.profile.company.bin);
      this.validateField('legal_address', this.state.company.legal_address);
      this.validateField('actual_address', this.state.company.actual_address);
      this.validateField('director', this.state.company.director);
      this.validateField('bik', this.state.company.bik);
      this.validateField('iik', this.state.company.iik);
      this.validateField('bank_name', this.state.company.bank_name);
    }
    if (!this.state.formValid) {
      return;
    }
    this.props.save(this.state);
  };

  issueDateChange = (date) => {
    this.setState({
      when_issued: date
    });
  };

  expirationDateChange = (date) => {
    this.setState({
      valid_until: date
    });
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
    let iinValid = this.state.iinValid;
    let placeOfResidenceValid = this.state.placeOfResidenceValid;
    let certificateNumberValid = this.state.certificateNumberValid;
    let issuedByValid = this.state.issuedByValid;
    let whenIssuedValid = this.state.whenIssuedValid;
    let validUntilValid = this.state.validUntilValid;
    let binValid = this.state.binValid;
    let bikValid = this.state.bikValid;
    let iikValid = this.state.iikValid;
    let bankNameValid = this.state.bankNameValid;
    let legalAddressValid = this.state.legalAddressValid;
    let actualAddressValid = this.state.actualAddressValid;

    console.log(fieldName, value, this.state);

    switch(fieldName) {
      case 'bin':
        binValid = value.length === 12;
        fieldValidationErrors.company.bin = binValid ? '' : ' is invalid';
        break;
      case 'bik':
        bikValid = value.length > 0;
        fieldValidationErrors.company.bik = bikValid ? '' : ' is invalid';
        break;
      case 'iik':
        iikValid = value.length > 0;
        fieldValidationErrors.company.iik = iikValid ? '' : ' is invalid';
        break;
      case 'bank_name':
        bankNameValid = value.length > 0;
        fieldValidationErrors.company.bank_name = bankNameValid ? '' : ' is invalid';
        break;
      case 'legal_address':
        legalAddressValid = value.length > 0;
        fieldValidationErrors.company.legal_address = legalAddressValid ? '' : ' is invalid';
        break;
      case 'actual_address':
        actualAddressValid = value.length > 0;
        fieldValidationErrors.company.actual_address = actualAddressValid ? '' : ' is invalid';
        break;
      case 'iin':
        iinValid = value.length === 12;
        fieldValidationErrors.person.iin = iinValid ? '' : ' is invalid';
        break;
      case 'place_of_residence':
        placeOfResidenceValid = value.length > 0;
        fieldValidationErrors.person.place_of_residence = placeOfResidenceValid ? '' : ' is invalid';
        break;
      case 'certificate_number':
        certificateNumberValid = value.length > 0;
        fieldValidationErrors.person.certificate_number = certificateNumberValid ? '' : ' is invalid';
        break;
      case 'issued_by':
        issuedByValid = value.length > 0;
        fieldValidationErrors.person.issued_by = issuedByValid ? '' : ' is invalid';
        break;
      case 'when_issued':
        whenIssuedValid = value.length > 0;
        fieldValidationErrors.person.when_issued = whenIssuedValid ? '' : ' is invalid';
        break;
      case 'valid_until':
        validUntilValid = value.length > 0;
        fieldValidationErrors.person.valid_until = validUntilValid ? '' : ' is invalid';
        break;

      default:
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
      iinValid,
      placeOfResidenceValid,
      certificateNumberValid,
      issuedByValid,
      whenIssuedValid,
      validUntilValid,
      binValid,
      bikValid,
      iikValid,
      bankNameValid,
      legalAddressValid,
      actualAddressValid

    }, this.validateForm);
  };

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');

  };

  validateForm(type = this.props.isPerson) {
    console.log(type, 'TYPE!!!');
    if (this.props.isPerson) {
      this.setState({formValid:
        this.state.iinValid
        && this.state.placeOfResidenceValid
        && this.state.certificateNumberValid
        && this.state.issuedByValid
        && this.state.whenIssuedValid
        && this.state.validUntilValid
      });
    }

    else {
      this.setState({formValid:
        this.state.bikValid
        && this.state.binValid
        && this.state.iikValid
        && this.state.bankNameValid
        && this.state.legalAddressValid
        && this.state.actualAddressValid
      });
    }

  }

  render() {
    console.log('render UpdateProfilePopup', this.props);

    let user = this.state;

    return <div style={{
      position: "fixed",
      width: '80%',
      height: '80%',
      zIndex: '10',
      display: (this.props.popupActive ? 'block' : 'none'),
    }}>

      <div className={styles.reg_content}>
        <div className={styles.container}>
          <form className={styles.register}>
            <div className={styles.registaer_content}>


              {(!this.props.isPerson) ? <div>

                  <div className={styles.name + ' ' + styles.input_block + ' ' +(this.state.binValid ? '' : styles[this.errorClass(this.state.formErrors.company.bin)] ) }>
                    <div className={styles.label}>
                      БИН:
                    </div>
                    <div className={styles.input_box}>
                      <input type="number" className={styles.name} name="bin" value={user.company.bin} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.legalAddressValid ? '' : styles[this.errorClass(this.state.formErrors.company.legal_address)] ) }>
                    <div className={styles.label}>
                      Юридический адрес:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="legal_address" value={user.company.legal_address} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>
                  </div>
                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.actualAddressValid ? '' : styles[this.errorClass(this.state.formErrors.company.actual_address)] ) }>
                    <div className={styles.label}>
                      Физический адрес:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="actual_address" value={user.company.actual_address} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>
                  </div>

                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.directorValid ? '' : styles[this.errorClass(this.state.formErrors.company.director)] ) }>
                    <div className={styles.label}>
                      Директор:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="director" value={user.company.director} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.bikValid ? '' : styles[this.errorClass(this.state.formErrors.company.bik)] ) }>
                    <div className={styles.label}>
                      БИК:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="bik" value={user.company.bik} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.bankNameValid ? '' : styles[this.errorClass(this.state.formErrors.company.bank_name)] ) }>
                    <div className={styles.label}>
                      Название банка:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="bank_name" value={user.company.bank_name} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>

                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.iikValid ? '' : styles[this.errorClass(this.state.formErrors.company.iik)] ) }>
                    <div className={styles.label}>
                      ИИК:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="iik" value={user.company.iik} onChange={(event) => this.handleCompanyInput(event)}/>
                    </div>

                  </div>
                </div>
                :
                <div>
                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.iinValid ? '' : styles[this.errorClass(this.state.formErrors.person.iin)] ) }>
                    <div className={styles.label}>
                      ИИН:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="iin" value={user.person.iin} onChange={(event) => this.handlePersonInput(event)}/>
                    </div>
                  </div>
                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.placeOfResidenceValid ? '' : styles[this.errorClass(this.state.formErrors.person.place_of_residence)] ) }>
                    <div className={styles.label}>
                      Адрес прописки:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="place_of_residence" value={user.person.place_of_residence} onChange={(event) => this.handlePersonInput(event)}/>
                    </div>
                  </div>
                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.certificateNumberValid ? '' : styles[this.errorClass(this.state.formErrors.person.certificate_number)] ) }>
                    <div className={styles.label}>
                      Номер удостоверения:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="certificate_number" value={user.person.certificate_number} onChange={(event) => this.handlePersonInput(event)}/>
                    </div>
                  </div>
                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.issuedByValid ? '' : styles[this.errorClass(this.state.formErrors.person.issued_by)] ) }>
                    <div className={styles.label}>
                      Кем выдан:
                    </div>
                    <div className={styles.input_box}>
                      <input type="text" className={styles.name} name="issued_by" value={user.person.issued_by} onChange={(event) => this.handlePersonInput(event)}/>
                    </div>
                  </div>
                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.whenIssuedValid ? '' : styles[this.errorClass(this.state.formErrors.person.when_issued)] ) }>
                    <div className={styles.label}>
                      Дата выдачи:
                    </div>
                    <div className={styles.input_box}>
                      <Calendar
                        selected={this.state.when_issued}
                        onChange={this.issueDateChange}
                        dateFormat={"dd MM yyyy"}
                        customInput={
                          <MaskedTextInput
                            type="text"
                            mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
                          />
                        }
                      />
                      {/*<input type="text" className={styles.name} name="when_issued" value={user.person.when_issued} onChange={(event) => this.handlePersonInput(event)}/>*/}
                    </div>
                  </div>
                  <div className={styles.name + ' ' + styles.input_block+ ' ' +(this.state.validUntilValid ? '' : styles[this.errorClass(this.state.formErrors.person.valid_until)] ) }>
                    <div className={styles.label}>
                      До какой даты действует:
                    </div>
                    <div className={styles.input_box}>
                      <Calendar
                        selected={this.state.valid_until}
                        onChange={this.expirationDateChange}
                        dateFormat={"dd MM yyyy"}
                        customInput={
                          <MaskedTextInput
                            type="text"
                            mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
                          />
                        }
                      />
                      {/*<input type="text" className={styles.name} name="valid_until" value={user.person.valid_until} onChange={(event) => this.handlePersonInput(event)}/>*/}
                    </div>
                  </div>
                </div>

              }
              <div disabled={!this.state.formValid} className={styles.center} onClick={this.save}>
                <a>
                  <span>
                  Сохранить
                  </span>
                </a>
              </div>
            </div>



          </form>
        </div>
      </div>
    </div>

  }
}

export default UpdateProfilePopup;
