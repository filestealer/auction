import { connect } from "react-redux";
import { createRequest, createRequestPartnership, acceptBid, acceptPartnership } from "../actions";
import Item from '../components/item';

// const Counter = ...

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps LOT',state, ownProps);

  let list = state.lots.list, item, categories, category_name;
  if (list) {
    item = list.filter((el) => {return el.id == ownProps.match.params.id})[0];
    console.log(item);
    if (item) {
      categories = state.lots.categories;
      category_name = categories.filter(el => { return el.id == item.request_category })[0];
    }
  }

  let bids = state.lots.bids.filter(e => e.auction == item.id && item && item.initiator && item.initiator.id == state.user.profile.id);

  let partnerships = (item && item.initiator && item.initiator.id == state.user.profile.id) ? item.partnerships : [];


  //ownProps.match.params
  return {
    id: item.id || '',
    category: item.request_category || {name: ''},
    publish_date: item.created || '',
    description: item.request_description || '',
    delivery_address: item.delivery_address || '',
    expired_date: item.contract_expiration_date || '',
    delivery_date: item.delivery_date || '',
    status: item.status || '',
    initiator: item.initiator || {person: {name: ''}},
    user: state.user.profile,
    partnerships,
    bids: bids || [],
    isMy: item && item.initiator && item.initiator.id == state.user.profile.id,
    // categories: categories || [],
    // category_name: category_name || '',

  };
};

const mapDispatchToProps = (dispatch) => ({
  request: (data) => dispatch(createRequest(data)),
  requestPartnership: (data) => dispatch(createRequestPartnership(data)),
  acceptPartnership: (data) => dispatch(acceptPartnership(data)),
  acceptBid: (data) => dispatch(acceptBid(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);