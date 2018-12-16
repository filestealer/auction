import React, { Component } from 'react';
import styles from '../../../../css/style.css';
import moment from 'moment';
moment().format();

class ListItem extends Component {
  render() {
    return (
      <tr onClick={this.props.onClick}>
        <td>
          <p>№ {this.props.id}</p>
          <span className={styles.category}>{this.props.category}</span>
          <span className={styles.publishedon}>{moment(this.props.publish_date).format('DD-MM-YYYY')}</span>
        </td>
        <td>
          <a >{this.props.description}</a>
        </td>
        <td>
          {this.props.delivery_address}
          {/*<p>1 215.92 км</p>*/}
        </td>
        <td />
        <td>{moment(this.props.expired_date).format('DD-MM-YYYY')}</td>
      </tr>
    );
  }
}

export default ListItem;

