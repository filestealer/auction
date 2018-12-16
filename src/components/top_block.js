import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from '../../css/style.css';

class TopBlock extends Component {
  render() {
    return (
      <div className={styles.top_block}>
        <h4>Быстрый и удобный сервис онлайн аукциона</h4>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default TopBlock;
