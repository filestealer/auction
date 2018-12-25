import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import FileUploader from '../../../components/file_uploader';
import Footer from '../../../components/footer';
import TopBlock from '../../../components/top_block';

class AuctionReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request_category: 1,
      auction_type: 1,
      request_description: '',
      delivery_date: '',
      delivery_address: '',
      auction_duration: '',
      city_address: '',
      file: '',
      formErrors: {
        request_category: '',
        auction_type: '',
        request_description: '',
        delivery_date: '',
        delivery_address: '',
        auction_duration: '',
        city_address: '',
        file: ''
      },
      city_addressValid: false,
      request_categoryValid: false,
      auction_typeValid: false,
      request_descriptionValid: false,
      delivery_dateValid: false,
      delivery_addressValid: false,
      auction_durationValid: false,
      fileValid: false,
      formValid: false
    };
  }

  save = () => {
    this.validateField('request_category', this.state.request_category);
    this.validateField('auction_type', this.state.auction_type);
    this.validateField('request_description', this.state.request_description);
    this.validateField('delivery_date', this.state.delivery_date);
    this.validateField('delivery_address', this.state.delivery_address);
    this.validateField('city_address', this.state.city_address);
    this.validateField('auction_duration', this.state.auction_duration);
    this.validateField('file', this.state.file);
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

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let request_categoryValid = this.state.request_categoryValid;
    let auction_typeValid = this.state.auction_typeValid;
    let request_descriptionValid = this.state.request_descriptionValid;
    let delivery_dateValid = this.state.delivery_dateValid;
    let delivery_addressValid = this.state.delivery_addressValid;
    let auction_durationValid = this.state.auction_durationValid;
    let city_addressValid = this.state.city_addressValid;
    let fileValid = this.state.fileValid;

    switch(fieldName) {
      case 'request_category':
        request_categoryValid = value.length >= 1;
        fieldValidationErrors.request_category = request_categoryValid ? '' : ' is invalid';
        break;
      case 'delivery_date':
        delivery_dateValid = value.length >= 1;
        fieldValidationErrors.delivery_date = delivery_dateValid ? '': ' is too short';
        break;
      case 'delivery_address':
        delivery_addressValid = value.length >= 0;
        fieldValidationErrors.delivery_address = delivery_addressValid ? '' : ' is invalid';
        break;
      case 'city_address':
        city_addressValid = value.length >= 1;
        fieldValidationErrors.city_address = city_addressValid ? '' : ' is invalid';
        break;
      case 'auction_type':
        auction_typeValid = value.length >= 6;
        fieldValidationErrors.auction_type = auction_typeValid ? '': ' is too short';
        break;
      case 'request_description':
        request_descriptionValid = value.length >= 1;
        fieldValidationErrors.request_description = request_descriptionValid ? '' : ' is invalid';
        break;
      case 'auction_duration':
        auction_durationValid = value.length >= 1;
        fieldValidationErrors.auction_duration = auction_durationValid ? '': ' is too short';
        break;
      case 'file':
        fileValid = value.length >= 1;
        fieldValidationErrors.file = fileValid ? '': 'need to upload file';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      request_categoryValid,
      auction_typeValid,
      request_descriptionValid,
      delivery_dateValid,
      delivery_addressValid,
      auction_durationValid,
      fileValid

    }, this.validateForm);
  };

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  };

  validateForm() {
    this.setState({formValid:
      this.state.request_categoryValid
      && this.state.auction_typeValid
      && this.state.request_descriptionValid
      && this.state.delivery_dateValid
      && this.state.delivery_addressValid
      && this.state.auction_durationValid
      && this.state.city_addressValid
      && this.state.fileValid
    });
  }


// {
//   "request_category": 1,
//   "auction_type": 1,
//   "request_description": "Вот такой вот аукцион",
//   "delivery_date": "2019-10-02T00:00:00Z",
//   "delivery_address": "куда?:D",
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
                  <div className={styles.label + ' ' + styles[this.errorClass(this.state.formErrors.delivery_address)]}>
                    Адрес:
                    <input type="text" data-counter="1" name="delivery_address" onChange={(event) => this.handleUserInput(event)}
                           value={state.delivery_address}/>
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
                  <div>
                    <div className={styles.label}>Дата поставки</div>
                    <input type="date" name="delivery_date_day" placeholder="дд.мм.гггг" min={current_date} onChange={(event) => this.handleUserInput(event)}
                           value={state.delivery_date_day}/>
                  </div>
                  <div className={styles.time_box}>
                    <div className={styles.label}>Время</div>
                    <input
                      type="time"
                      data-counter="1"
                      name="delivery_date_time"
                      placeholder="чч:мм"
                      onChange={(event) => this.handleUserInput(event)}
                      value={state.delivery_date_time}
                    />
                  </div>
                  {/*<a className={styles.add_node} />*/}
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
                  <div className={styles.label + ' ' + styles[this.errorClass(this.state.formErrors.auction_duration)]}>
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
