import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { test_auth } from '../../../api/user';
// import styles from '../../../css/style.css'

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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lots/">Lots</Link>
            </li>
            <li>
              <Link to="/lot/3/">Lot</Link>
            </li>
            <li>
              <Link to="/create_lot/">Auction_reg</Link>
            </li>
            <li>
              <Link to="/registration/">User Reg</Link>
            </li>
            <li>
              <Link to="/profile/">Profile</Link>
            </li>
          </ul>
        </nav>
        <button onClick={this.testApi}>click</button>
        <button onClick={this.getProfile}>get profile</button>
        <button onClick={this.openLots}>openLots</button>
        <button onClick={this.createLot}>Create LOT</button>
      </div>
    );
  }
}
export default App;
