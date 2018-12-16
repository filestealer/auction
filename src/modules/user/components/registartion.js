import React, { Component } from 'react';
import iconAutopic from '../../../../images/icon-autopic.png'
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import TopBlock from '../../../components/top_block';


class Registration extends Component {
  render() {
    return <div>
      <Header />
      <TopBlock text="Регистрация" />
      <div className={styles.reg_content}>
        <div className={styles.container}>
          <form className={styles.register}>
            <div className={styles.reg_tabs}>
              <div className={styles.person}>
                Заказчик
              </div>
              <div className={styles.person + ' ' + styles.active}>
                Юридическое лицо
              </div>
            </div>
            <div className={styles.registaer_content}>
              <div className={styles.mail + ' ' + styles.input_block}>
                <div className={styles.label}>
                  Электронная почта:
                </div>
                <div className={styles.input_box}>
                  <input type="email" name="email" placeholder="mail@example.com"/>
                    <span>
                      <strong>
                        Обязательно проверьте e-mail адрес!
                      </strong>
                        На данный адрес будет выслана ссылка для подтверждения регистрации.
                    </span>
                </div>

              </div>

              <div className={styles.name + ' ' + styles.input_block}>
                <div className={styles.label}>
                  Название компании:
                </div>
                <div className={styles.input_box}>
                  <input type="name" className={styles.name} name="company"/>
                </div>

              </div>

              <div className={styles.name + ' ' + styles.input_block}>
                <div className={styles.label}>
                  БИН:
                </div>
                <div className={styles.input_box}>
                  <input type="name" className={styles.name} name="bin"/>
                </div>

              </div>

              <div className={styles.name + ' ' + styles.input_block}>
                <div className={styles.label}>
                  Сайт:
                </div>
                <div className={styles.input_box}>
                  <input type="name" className={styles.name} name="site"/>
                </div>

              </div>

              <div className={styles.name + ' ' + styles.input_block}>
                <div className={styles.label}>
                  Описание компании:
                </div>
                <div className={styles.input_box}>
                  <textarea type="name" className={styles.name} name="desc"/>
                </div>

              </div>

              <div className={styles.phone + ' ' + styles.input_block}>
                <div className={styles.label}>
                  Телефон:
                </div>
                <div className={styles.input_box}>
                  <input type="phone" className={styles.phone} name="phone" placeholder="+7 (777) 777-7777"/>
                </div>

              </div>

              {/*<div className={styles.performer}>*/}
                {/*<input type="hidden" name="performer[type]" value="individual"/>*/}
                  {/*<div className={styles.label}>*/}
                    {/*Тип исполнителя:*/}
                  {/*</div>*/}
                  {/*<div className={styles.choice_box}>*/}
                    {/*<div className={styles.performer_type + ' ' + styles.active}>*/}
                      {/*Частное лицо*/}
                    {/*</div>*/}
                    {/*<div className={styles.performer_type}>*/}
                      {/*Юридическое лицо*/}
                    {/*</div>*/}
                  {/*</div>*/}
              {/*</div>*/}

              {/*<div className={styles.cars}>*/}
                {/*<div className={styles.label}>*/}
                  {/*Количество машин в парке*/}
                {/*</div>*/}
                {/*<div className={styles.cars_number}>*/}
                  {/*<input type="text" name="performer[cars-number]"/>*/}
                  {/*<span className={styles.span_box}>*/}
								{/*<span>*/}
									{/*Информация об автомобиле*/}
								{/*</span>*/}
								{/*После регистрации Вы сможете добавить информацию о всех ваших машинах*/}
							{/*</span>*/}
                {/*</div>*/}
              {/*</div>*/}

              {/*<div className={styles.car_info}>*/}
                {/*<div className={styles.photo_holder}>*/}
                  {/*<div className={styles.photo_placeholder}>*/}
                    {/*<img alt={''} src={'/' + iconAutopic}/>*/}
                    {/*<input type="file" name="car-photo"/>*/}
                    {/*<a href="">*/}
                      {/*Добавить фото*/}
                    {/*</a>*/}
                  {/*</div>*/}
                  {/*<div className={styles.photo_uploaded}>*/}

                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className={styles.characteristics_holder}>*/}
                  {/*<div className={styles.mark_box}>*/}
                    {/*<div className={styles.label}>*/}
                      {/*Марка и модель:*/}
                    {/*</div>*/}
                    {/*<input type="text" name="car-title"/>*/}
                  {/*</div>*/}

                  {/*<div className={styles.select_box}>*/}
                    {/*<div className={styles.label}>*/}
                      {/*Кузов:*/}
                    {/*</div>*/}
                    {/*<select>*/}
                      {/*<option>Закрытый-Тентованный</option>*/}
                      {/*<option>Закрытый-Фургон</option>*/}
                      {/*<option>Закрытый-Контейнер</option>*/}
                      {/*<option>Закрытый-Цельнометаллический</option>*/}
                      {/*<option>Закрытый-Рефрижератор</option>*/}
                      {/*<option>Закрытый-Изотермический</option>*/}
                      {/*<option>Открытый-Бортовой</option>*/}
                      {/*<option>Открытый-Контейнеровоз</option>*/}
                      {/*<option>Открытый-Манипулятор</option>*/}
                      {/*<option>Открытый-Низкорамный</option>*/}
                      {/*<option>Открытый-Самосвал</option>*/}
                      {/*<option>Открытый-Шаланда</option>*/}
                      {/*<option>Открытый-Платформа</option>*/}
                      {/*<option>Открытый-Пирамида</option>*/}
                      {/*<option>Автовоз</option>*/}
                      {/*<option>Автотранспортер</option>*/}
                      {/*<option>Эвакуатор</option>*/}
                      {/*<option>Трал</option>*/}
                      {/*<option>Автобус</option>*/}
                      {/*<option>Микроавтобус</option>*/}
                      {/*<option>Пикап</option>*/}
                      {/*<option>Легковая-седан</option>*/}
                      {/*<option>Легковая-хетчбек</option>*/}
                      {/*<option>Легковая-универсал</option>*/}
                      {/*<option>Ж/Д вагон</option>*/}
                      {/*<option>Цистерна</option>*/}
                      {/*<option>Коневоз</option>*/}
                      {/*<option>Скотовоз</option>*/}
                      {/*<option>Авиаперевозка</option>*/}
                    {/*</select>*/}
                  {/*</div>*/}

                  {/*<div className={styles.select_box}>*/}
                    {/*<div className={styles.label}>*/}
                      {/*Кузов:*/}
                    {/*</div>*/}
                    {/*<select>*/}
                      {/*<option>Менее 1,5 т.</option>*/}
                      {/*<option>1,5 - 1,7 т.</option>*/}
                      {/*<option>1,7 - 3 т.</option>*/}
                      {/*<option>3 -5 т.</option>*/}
                      {/*<option>5 - 10 т.</option>*/}
                      {/*<option>10 - 20 т.</option>*/}
                      {/*<option>Свыше 20 т.</option>*/}
                    {/*</select>*/}
                  {/*</div>*/}
                {/*</div>*/}

              {/*</div>*/}

              {/*<div className={styles.categories}>*/}
                {/*<h4>*/}
                  {/*Категории аукциона*/}
                {/*</h4>*/}
                {/*<input type="hidden" name="performer[categories]"/>*/}
                {/*<a href="" className={styles.active} data-category="cars">*/}
                  {/*Автомобили*/}
                {/*</a>*/}
                {/*<a href="" className={styles.active} data-category="cars">*/}
                  {/*Генераторы*/}
                {/*</a>*/}
                {/*<a href=""  data-category="cars">*/}
                  {/*Грузоперевозка*/}
                {/*</a>*/}
                {/*<a href="" className={styles.active} data-category="cars">*/}
                  {/*Мебель*/}
                {/*</a>*/}
                {/*<a href="" data-category="cars">*/}
                  {/*Металлопродукция*/}
                {/*</a>*/}
                {/*<a href="" className={styles.active} data-category="cars">*/}
                  {/*Оборудования для салонов*/}
                {/*</a>*/}
                {/*<a href="" className={styles.active} data-category="cars">*/}
                  {/*Перевозка по ж/д*/}
                {/*</a>*/}
                {/*<a href="" className={styles.active} data-category="cars">*/}
                  {/*Покупки*/}
                {/*</a>*/}
                {/*<a href="" className={styles.active} data-category="cars">*/}
                  {/*Посуда*/}
                {/*</a>*/}
                {/*<a href="" className={styles.active} data-category="cars">*/}
                  {/*Сантехника*/}
                {/*</a>*/}
                {/*<a href="" className={styles.active} data-category="cars">*/}
                  {/*СТО*/}
                {/*</a>*/}
                {/*<a href="" className={styles.active} data-category="cars">*/}
                  {/*Стройматериалы*/}
                {/*</a>*/}
              {/*</div>*/}

              <div className={styles.aprove}>
                <input type="checkbox" name="rulesChecked"/>
                  Я ознакомился и принимаю
                  <a href="">
                    Соглашение об использовании
                  </a>
              </div>

              <div className={styles.center}>
                <a href="">
							<span>
								Зарегистрироваться
							</span>
                </a>
              </div>
            </div>
            <div className={styles.registaer_content}>
              <div className={styles.mail + ' ' + styles.input_block}>
                <div className={styles.label}>
                  Электронная почта:
                </div>
                <div className={styles.input_box}>
                  <input type="email" name="email" placeholder="mail@example.com"/>
                  <span>
                    <strong>
                      Обязательно проверьте e-mail адрес!
                    </strong>
                      На данный адрес будет выслана ссылка для подтверждения регистрации.
                  </span>
                </div>

              </div>

              <div className={styles.name + ' ' + styles.input_block}>
                <div className={styles.label}>
                  Имя:
                </div>
                <div className={styles.input_box}>
                  <input type="name" className={styles.name} name="company"/>
                </div>

              </div>

              <div className={styles.phone + ' ' + styles.input_block}>
                <div className={styles.label}>
                  Телефон:
                </div>
                <div className={styles.input_box}>
                  <input type="phone" className={styles.phone} name="phone" placeholder="+7 (777) 777-7777"/>
                  <span>
                      На данный адрес будет выслана ссылка для подтверждения регистрации.
                  </span>
                </div>

              </div>

              {/*<div className={styles.performer}>*/}
              {/*<input type="hidden" name="performer[type]" value="individual"/>*/}
              {/*<div className={styles.label}>*/}
              {/*Тип исполнителя:*/}
              {/*</div>*/}
              {/*<div className={styles.choice_box}>*/}
              {/*<div className={styles.performer_type + ' ' + styles.active}>*/}
              {/*Частное лицо*/}
              {/*</div>*/}
              {/*<div className={styles.performer_type}>*/}
              {/*Юридическое лицо*/}
              {/*</div>*/}
              {/*</div>*/}
              {/*</div>*/}

              {/*<div className={styles.cars}>*/}
              {/*<div className={styles.label}>*/}
              {/*Количество машин в парке*/}
              {/*</div>*/}
              {/*<div className={styles.cars_number}>*/}
              {/*<input type="text" name="performer[cars-number]"/>*/}
              {/*<span className={styles.span_box}>*/}
              {/*<span>*/}
              {/*Информация об автомобиле*/}
              {/*</span>*/}
              {/*После регистрации Вы сможете добавить информацию о всех ваших машинах*/}
              {/*</span>*/}
              {/*</div>*/}
              {/*</div>*/}

              {/*<div className={styles.car_info}>*/}
              {/*<div className={styles.photo_holder}>*/}
              {/*<div className={styles.photo_placeholder}>*/}
              {/*<img alt={''} src={'/' + iconAutopic}/>*/}
              {/*<input type="file" name="car-photo"/>*/}
              {/*<a href="">*/}
              {/*Добавить фото*/}
              {/*</a>*/}
              {/*</div>*/}
              {/*<div className={styles.photo_uploaded}>*/}

              {/*</div>*/}
              {/*</div>*/}
              {/*<div className={styles.characteristics_holder}>*/}
              {/*<div className={styles.mark_box}>*/}
              {/*<div className={styles.label}>*/}
              {/*Марка и модель:*/}
              {/*</div>*/}
              {/*<input type="text" name="car-title"/>*/}
              {/*</div>*/}

              {/*<div className={styles.select_box}>*/}
              {/*<div className={styles.label}>*/}
              {/*Кузов:*/}
              {/*</div>*/}
              {/*<select>*/}
              {/*<option>Закрытый-Тентованный</option>*/}
              {/*<option>Закрытый-Фургон</option>*/}
              {/*<option>Закрытый-Контейнер</option>*/}
              {/*<option>Закрытый-Цельнометаллический</option>*/}
              {/*<option>Закрытый-Рефрижератор</option>*/}
              {/*<option>Закрытый-Изотермический</option>*/}
              {/*<option>Открытый-Бортовой</option>*/}
              {/*<option>Открытый-Контейнеровоз</option>*/}
              {/*<option>Открытый-Манипулятор</option>*/}
              {/*<option>Открытый-Низкорамный</option>*/}
              {/*<option>Открытый-Самосвал</option>*/}
              {/*<option>Открытый-Шаланда</option>*/}
              {/*<option>Открытый-Платформа</option>*/}
              {/*<option>Открытый-Пирамида</option>*/}
              {/*<option>Автовоз</option>*/}
              {/*<option>Автотранспортер</option>*/}
              {/*<option>Эвакуатор</option>*/}
              {/*<option>Трал</option>*/}
              {/*<option>Автобус</option>*/}
              {/*<option>Микроавтобус</option>*/}
              {/*<option>Пикап</option>*/}
              {/*<option>Легковая-седан</option>*/}
              {/*<option>Легковая-хетчбек</option>*/}
              {/*<option>Легковая-универсал</option>*/}
              {/*<option>Ж/Д вагон</option>*/}
              {/*<option>Цистерна</option>*/}
              {/*<option>Коневоз</option>*/}
              {/*<option>Скотовоз</option>*/}
              {/*<option>Авиаперевозка</option>*/}
              {/*</select>*/}
              {/*</div>*/}

              {/*<div className={styles.select_box}>*/}
              {/*<div className={styles.label}>*/}
              {/*Кузов:*/}
              {/*</div>*/}
              {/*<select>*/}
              {/*<option>Менее 1,5 т.</option>*/}
              {/*<option>1,5 - 1,7 т.</option>*/}
              {/*<option>1,7 - 3 т.</option>*/}
              {/*<option>3 -5 т.</option>*/}
              {/*<option>5 - 10 т.</option>*/}
              {/*<option>10 - 20 т.</option>*/}
              {/*<option>Свыше 20 т.</option>*/}
              {/*</select>*/}
              {/*</div>*/}
              {/*</div>*/}

              {/*</div>*/}

              {/*<div className={styles.categories}>*/}
              {/*<h4>*/}
              {/*Категории аукциона*/}
              {/*</h4>*/}
              {/*<input type="hidden" name="performer[categories]"/>*/}
              {/*<a href="" className={styles.active} data-category="cars">*/}
              {/*Автомобили*/}
              {/*</a>*/}
              {/*<a href="" className={styles.active} data-category="cars">*/}
              {/*Генераторы*/}
              {/*</a>*/}
              {/*<a href=""  data-category="cars">*/}
              {/*Грузоперевозка*/}
              {/*</a>*/}
              {/*<a href="" className={styles.active} data-category="cars">*/}
              {/*Мебель*/}
              {/*</a>*/}
              {/*<a href="" data-category="cars">*/}
              {/*Металлопродукция*/}
              {/*</a>*/}
              {/*<a href="" className={styles.active} data-category="cars">*/}
              {/*Оборудования для салонов*/}
              {/*</a>*/}
              {/*<a href="" className={styles.active} data-category="cars">*/}
              {/*Перевозка по ж/д*/}
              {/*</a>*/}
              {/*<a href="" className={styles.active} data-category="cars">*/}
              {/*Покупки*/}
              {/*</a>*/}
              {/*<a href="" className={styles.active} data-category="cars">*/}
              {/*Посуда*/}
              {/*</a>*/}
              {/*<a href="" className={styles.active} data-category="cars">*/}
              {/*Сантехника*/}
              {/*</a>*/}
              {/*<a href="" className={styles.active} data-category="cars">*/}
              {/*СТО*/}
              {/*</a>*/}
              {/*<a href="" className={styles.active} data-category="cars">*/}
              {/*Стройматериалы*/}
              {/*</a>*/}
              {/*</div>*/}

              <div className={styles.aprove}>
                <input type="checkbox" name="rulesChecked"/>
                Я ознакомился и принимаю
                <a href="">
                  Соглашение об использовании
                </a>
              </div>

              <div className={styles.center}>
                <a href="">
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
            <a href="">
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
