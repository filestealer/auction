import { connect } from "react-redux";
import { createRequest } from "../actions";
import Item from '../components/item';

// const Counter = ...

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps LOT',state, ownProps);

  let list = state.lots.list, item;
  if (list) {
    item = list.filter((el) => {return el.id == ownProps.match.params.id})[0]
  }

  //ownProps.match.params
  return {
    id: item.id || '',
    category: item.request_category || '',
    publish_date: item.created || '',
    description: item.request_description || '',
    delivery_address: item.delivery_address || '',
    expired_date: item.contract_expiration_date || '',
    delivery_date: item.delivery_date || '',
    status: item.status || '',

  };
};

const mapDispatchToProps = (dispatch) => ({
  request: (data) => dispatch(createRequest(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);