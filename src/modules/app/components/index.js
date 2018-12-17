import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { test_auth } from '../../../api/user';
import iconMebel from '../../../../images/icon-mebel.png';
import iconBuilding from '../../../../images/icon-building.png';
import iconPipes from '../../../../images/icon-pipes.png';
import iconChemistry from '../../../../images/icon-chemistry.png';
import iconDishes from '../../../../images/icon-dishes.png';
import iconCarRepair from '../../../../images/icon-car-repair.png';
import iconScissors from '../../../../images/icon-scissors.png';
import iconGenerators from '../../../../images/icon-generators.png';
import iconPlumber from '../../../../images/icon-plumber.png';
import iconCargo from '../../../../images/icon-cargo.png';
import iconRailway from '../../../../images/icon-railway.png';
import iconCars from '../../../../images/icon-cars.png';
import styles from '../../../../css/style.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  testApi = () => {
    console.log('test click');
    this.props.signIn({ email: 'andrey2@osmushko.com', password: '1q2w3e4r' });
  };

  getProfile = () => {
    this.props.fetchProfile();
  };

  openLots = () => {
    console.log(this.props, 'push');
    this.props.openLots();
  };

  createLot = () => {
    this.props.createLot();
  };

  render() {
    return (
      <div>
        <Header/>
        <div className={styles.index}>
          <div className={styles.types}>
            <div className={styles.container}>
              <h2>Что нужно сделать?</h2>
              <h3>Выберите категорию аукциона</h3>
              <a href=""
                 className={styles.clutterFree_existingDuplicate + '' + styles.clutterFree_noIcon}>
                <img alt={''} src={'/' + iconMebel}/>
                  Мебель
              </a>
              <a href="">
                <img alt={''} src={'/' + iconBuilding}/>
                  Стройматериалы
              </a>
              <a href="">
                <img alt={''} src={'/' + iconPipes}/>
                  Металлопродукция
              </a>
              <a href=""
                 className={styles.clutterFree_existingDuplicate + '' + styles.clutterFree_noIcon}>
                <img alt={''} src={'/' + iconChemistry}/>
                  Химические вещества
              </a>
              <a href="">
                <img alt={''} src={'/' + iconDishes}/>
                  Посуда
              </a>
              <a href="">
                <img alt={''} src={'/' + iconCarRepair}/>
                  Оборудование для СТО
              </a>
              <a href="">
                <img alt={''} src={'/' + iconScissors}/>
                  Оборудование для салонов
              </a>
              <a href="">
                <img alt={''} src={'/' + iconGenerators}/>
                  Генераторы
              </a>
              <a href="">
                <img alt={''} src={'/' + iconPlumber}/>
                  Сантехника
              </a>
              <a href="">
                <img alt={''} src={'/' + iconCargo}/>
                  Грузоперевозка
              </a>
              <a href="">
                <img alt={''} src={'/' + iconRailway}/>
                  Перевозка по ж/д
              </a>
              <a href="">
                <img alt={''} src={'/' +  iconCars}/>
                  Автомобили
              </a>
            </div>
          </div>
          <div className={styles.how_it_works}>
            <div className={styles.container}>
              <h2>Как это работает?</h2>
              <h3>Сервис позволяет найти исполнителя в 3 шага</h3>
              <div className={styles.step_box}>
                <div className={styles.step}>
                  <div>
                    <span>1</span>
                  </div>
                  <h4>Разместите запрос</h4>
                  <p>
                    Всего за 3 минуты вы сможете создать аукцион
                  </p>
                </div>
                <div className={styles.step}>
                  <div>
                    <span>2</span>
                  </div>
                  <h4>Получайте предложения</h4>
                  <p>
                    Следите за поступающими предложениями по Вашему заказу на почту, указанную при регистрации или
                    смотрите на сайте.
                  </p>
                </div>
                <div className={styles.step}>
                  <div>
                    <span>3</span>
                  </div>
                  <h4>Выберите исполнителя</h4>
                  <p>
                    Как только Вы получили предложение, которое Вас устраивает, зайдите в Ваш заказ на сайте и нажмите
                    "Принять".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default App;
