import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import FileUploader from '../../../components/file_uploader';
import Footer from '../../../components/footer';
import TopBlock from '../../../components/top_block';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-datepicker";
import MaskedTextInput from "react-text-mask";

class AuctionReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request_category: 1,
      auction_type: 1,
      request_description: '',
      delivery_date: '',
      street: '',
      office: '',
      building: '',
      auction_duration: 3,
      city_address: '',
      file: '',
      time_delay: '',
      delivery_date_day: new Date(),
      ecp: '',
      joint_auction: false,
      formErrors: {
        request_category: '',
        auction_type: '',
        request_description: '',
        delivery_date: '',
        street: '',
        office: '',
        building: '',
        auction_duration: '3',
        city_address: '',
        time_delay: '',
        delivery_date_day: '',
        file: ''
      },
      city_addressValid: false,
      request_categoryValid: false,
      auction_typeValid: false,
      request_descriptionValid: false,
      delivery_dateValid: false,
      delivery_date_dayValid: false,
      streetValid: false,
      buildingValid: false,
      officeValid: false,
      auction_durationValid: false,
      fileValid: true,
      time_delayValid: false,
      formValid: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.files != this.state.files) {
      this.setState({files: nextProps.files});
      this.validateField('file', nextProps.files);
    }
  }

  save = () => {
    this.validateField('request_category', this.state.request_category);
    this.validateField('auction_type', this.state.auction_type);
    this.validateField('request_description', this.state.request_description);
    this.validateField('delivery_date_day', this.state.delivery_date);
    this.validateField('street', this.state.street);
    this.validateField('building', this.state.building);
    this.validateField('office', this.state.office);
    this.validateField('city_address', this.state.city_address);
    this.validateField('auction_duration', this.state.auction_duration);
    this.validateField('file', this.state.files);
    this.validateField('time_delay', this.state.time_delay);
    if (!this.state.formValid) {
      return;
    };
    this.props.save(this.state);
  };

  onChange = (e) => {
    console.log(e, e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value})
  };

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
    console.log(e, e.target.value, e.target.name);
  };

  onChangeCheckbox = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: !this.state.joint_auction});
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let request_categoryValid = this.state.request_categoryValid;
    let auction_typeValid = this.state.auction_typeValid;
    let request_descriptionValid = this.state.request_descriptionValid;
    let delivery_dateValid = this.state.delivery_dateValid;
    let streetValid = this.state.streetValid;
    let buildingValid = this.state.buildingValid;
    let officeValid = this.state.officeValid;
    let auction_durationValid = this.state.auction_durationValid;
    let city_addressValid = this.state.city_addressValid;
    let time_delayValid = this.state.time_delayValid;
    let fileValid = this.state.fileValid;

    switch(fieldName) {
      case 'request_category':
        request_categoryValid = value.length >= 1;
        fieldValidationErrors.request_category = request_categoryValid ? '' : ' is invalid';
        break;
      case 'delivery_date_day':
        delivery_dateValid = value.length >= 0;
        fieldValidationErrors.delivery_date_day = delivery_dateValid ? '': ' is too short';
        break;
      case 'time_delay':
        time_delayValid = value.length >= 0;
        fieldValidationErrors.time_delay = time_delayValid ? '': ' is too short';
        break;
      case 'street':
        streetValid = value.length >= 1;
        fieldValidationErrors.street = streetValid ? '' : ' is invalid';
        break;
      case 'building':
        buildingValid = value.length >= 1;
        fieldValidationErrors.building = buildingValid ? '' : ' is invalid';
        break;
      case 'office':
        officeValid = value.length >= 0;
        fieldValidationErrors.office = officeValid ? '' : ' is invalid';
        break;
      case 'city_address':
        city_addressValid = value.length >= 1;
        fieldValidationErrors.city_address = city_addressValid ? '' : ' is invalid';
        break;
      case 'request_description':
        request_descriptionValid = value.length >= 1;
        fieldValidationErrors.request_description = request_descriptionValid ? '' : ' is invalid';
        break;
      case 'auction_duration':
        auction_durationValid = value.length >= 0;
        fieldValidationErrors.auction_duration = auction_durationValid ? '': ' is too short';
        break;
      // case 'file':
      //   fileValid = Object.values(value).length >= 1;
      //   fieldValidationErrors.user.file = fileValid ? '': 'need to upload file';
      //   break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      request_categoryValid,
      request_descriptionValid,
      delivery_dateValid,
      streetValid,
      auction_durationValid,
      city_addressValid,
      time_delayValid,
      fileValid

    }, this.validateForm);
  };

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  };

  validateForm() {
    this.setState({formValid:
      this.state.request_categoryValid
      && this.state.request_categoryValid
      && this.state.request_descriptionValid
      && this.state.delivery_dateValid
      && this.state.streetValid
      && this.state.auction_durationValid
      && this.state.city_addressValid
      && this.state.time_delayValid
      && this.state.fileValid
    });
  }

  handleChange = (date) => {
    this.setState({
      delivery_date_day: date
    });
  };

  handleChangeTime = (date) => {
    this.setState({
      time_delay: date
    });
  };


// {
//   "request_category": 1,
//   "auction_type": 1,
//   "request_description": "Вот такой вот аукцион",
//   "delivery_date": "2019-10-02T00:00:00Z",
//   "street": "куда?:D",
//   "auction_duration": "2019-10-02T00:00:00Z"
// }

  render() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var current_date = yyyy + '-' + dd + '-' + mm;
    let state = this.state;
    return (
      <div>
        <Header />
        <TopBlock text="Заказы" />
        <div className={styles.auction_reg_content}>
          <div className={styles.container}>
            <form>
              <h2>1. Опишите запрос</h2>
              <div className={styles[this.errorClass(this.state.formErrors.request_category)]}>
                <select
                  style={{
                    width: '100%',
                    marginBottom: '15px',
                  }}
                  name={'request_category'}
                  // value={user.user.password}
                  onChange={(event) => this.handleUserInput(event)}

                >
                  <option value={'category'}>Выберите категорию</option>
                  {this.props.categories.map((e)=>
                    <option key={e.id} value={e.id}>{e.name}</option>
                  )}
                </select>
              </div>
              <div className={styles.fields + ' ' + styles[this.errorClass(this.state.formErrors.request_description)]}>
                <div className={styles.textarea_block}>
                  <textarea
                    name="request_description"
                    placeholder="Краткое описание"
                    onChange={(event) => this.handleUserInput(event)}
                    value={state.request_description}
                  />
                </div>
              </div>
              <h2>2. Куда поставить</h2>
              <div className={styles.fields}>
                <div className={styles.order_address}>
                  <div className={styles.label + ' ' + styles[this.errorClass(this.state.formErrors.city_address)]}>
                    Город:
                    <input type="text" data-counter="1" name="city_address" onChange={(event) => this.handleUserInput(event)}
                           value={state.city_address}/>
                  </div>
                  <div className={styles.label + ' ' + styles[this.errorClass(this.state.formErrors.street)]}>
                    Улица:
                    <input type="text" data-counter="1" name="street" onChange={(event) => this.handleUserInput(event)}
                           value={state.street}/>
                  </div>
                  <div className={styles.label + ' ' + styles[this.errorClass(this.state.formErrors.building)]}>
                    Здание:
                    <input type="text" data-counter="1" name="building" onChange={(event) => this.handleUserInput(event)}
                           value={state.building}/>
                  </div>
                  <div className={styles.label + ' ' + styles[this.errorClass(this.state.formErrors.office)]}>
                    Офис:
                    <input type="text" data-counter="1" name="office" onChange={(event) => this.handleUserInput(event)}
                           value={state.office}/>
                  </div>
                  {/*<a className={styles.delete_node} />*/}
                </div>

                {/*<div className={styles.order_address}>*/}
                  {/*<div className={styles.label}>*/}
                    {/*Город:*/}
                    {/*<input*/}
                      {/*type="text"*/}
                      {/*data-counter="1"*/}
                      {/*name="cities[]"*/}
                      {/*placeholder="откуда"*/}
                      {/*autoComplete="off"*/}
                    {/*/>*/}
                  {/*</div>*/}
                  {/*<div className={styles.label}>*/}
                    {/*Адрес:*/}
                    {/*<input type="text" data-counter="1" name="addresses[]" />*/}
                  {/*</div>*/}
                  {/*<a className={styles.add_node} />*/}
                {/*</div>*/}

                <div className={styles.order_date}>
                  <div className={styles[this.errorClass(this.state.formErrors.delivery_date_day)]}>
                    <div className={styles.label}>Дата поставки</div>
                      <Calendar
                        selected={this.state.delivery_date_day}
                        onChange={this.handleChange}
                        customInput={
                          <MaskedTextInput
                            type="text"
                            mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
                          />
                        }
                      />
                  </div>
                  <div className={styles.time_box}>
                    <div className={styles.label}>Время</div>
                    <Calendar
                      selected={this.state.time_delay}
                      onChange={this.handleChangeTime}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      dateFormat="hh:mm"
                      timeFormat="HH:mm"
                      timeCaption="Time"
                      customInput={
                        <MaskedTextInput
                          type="text"
                          mask={[/\d/, /\d/, ":", /\d/, /\d/]}
                        />
                      }
                    />
                  </div>


                  {/*<a className={styles.add_node} />*/}
                </div>
                <br/>
                <div className={styles.fields}>
                  <div className={styles.label}>
                    Объем поставки:
                    <input
                      className={styles['input-width-100']}
                      type="number"
                      name="volume"
                      onChange={(event) => this.handleUserInput(event)}
                      value={state.volume}
                    />

                  </div>
                </div>
              </div>
              <h2>3. Дополнительная информация</h2>
              <div className={styles.fields}>
                {/*<input type="hidden" name="distance" />*/}
                <div className={styles.input_select}>
                  <div className={styles.label}>
                    Максимальная цена:
                    <input
                      className={styles['input-width-100']}
                      type="text"
                      name="max_price"
                      onChange={(event) => this.handleUserInput(event)}
                      value={state.max_price}
                    />
                    тг.
                  </div>
                  {/*<div className={styles.label+ ' ' + styles.auction_duration + ' ' + styles[this.errorClass(this.state.formErrors.auction_duration)]}>*/}
                    {/*<div className={styles.label}>Запрос актуален</div>*/}
                    {/*<input type="date" name="auction_duration" placeholder="дд.мм.гггг" min={current_date} onChange={(event) => this.handleUserInput(event)}*/}
                           {/*value={state.delivery_date_day}/>*/}
                  {/*</div>*/}
                  <div className={styles.label}>
                    Запрос актуален
                    <select name={"auction_duration"} onChange={(event) => this.handleUserInput(event)}
                            value={state.auction_duration}>
                      <option value={1}>1 день</option>
                      <option value={2}>2 дня</option>
                      <option value={3}>3 дня</option>
                      <option value={4}>4 дня</option>
                      <option value={5}>5 дня</option>
                      <option value={6}>6 дня</option>
                      <option value={7}>7 дня</option>
                    </select>
                  </div>
                  {/*<a className={styles.add_node} />*/}
                </div>
              </div>
              <h2>4. Файлы</h2>
              <FileUploader />
              <h2>
                5. Совместный аукцион

              </h2>
              <div className={styles.partner_search}>
                Найти партнера?
                <input
                  type="checkbox"
                  name="joint_auction"
                  checked={this.state.joint_auction}
                  onChange={()=>{this.setState({joint_auction: !this.state.joint_auction})}}
                />
              </div>
              {this.state.joint_auction ? <div className={styles.partner_search}>
                <div
                  className={styles.aprove}
                  style={{
                    marginBottom: '15px',
                  }}
                >
                  Наличие ЭЦП
                  <input type="checkbox" name="rulesChecked"/>
                </div>
                <div
                  className={styles.label+ ' ' + styles[this.errorClass(this.state.formErrors.time_delay)]}
                  style={{
                    marginBottom: '15px',
                  }}
                >
                  <div className={styles.label}>Время ожидания</div>
                  <input type="date" name="time_delay" placeholder="дд.мм.гггг" min={current_date} onChange={(event) => this.handleUserInput(event)} value={state.time_delay}/>
                </div>
              </div> : ''
              }



              {/*<div className={styles.fields}>*/}
                {/*<div className={styles.order_address}>*/}
                  {/*<span>Загрузить файлы спецификации</span>*/}
                  {/*<a className={styles.delete_node} />*/}
                {/*</div>*/}
              {/*</div>*/}
              <div className={styles.center}>
                <a>
                  <span onClick={this.save}>Разместить запрос</span>
                </a>
              </div>

            </form>

            <div className={styles.support_block}>
              <span className={styles.font}>
                Служба поддержки: +7 777 617 27 71
              </span>
              <a>
                <span>Заказать звонок</span>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AuctionReg;
