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



  // auction_duration: "2019-01-03T23:47:26+06:00"
  // auction_type: 1
  // bids: Array(1)
  // 0: {amount: "150000.0000", user: 3, auction: 27, id: 15}
  // length: 1
  // __proto__: Array(0)
  // chosen_bid: {amount: "150000.0000", user: 3, auction: 27, id: 15}
  // contract_expiration_date: null
  // created: "2018-12-27T23:47:26.795275+06:00"
  // delivery_address: "Абая 23"
  // delivery_date: "2018-12-28T12:00:00+06:00"
  // delivery_frequency: null
  // eds_required: false
  // files: [{…}]
  // id: 27
  // initiator: {id: 2, email: "test@test.test", person: {…}, phone: "87071367581"}
  // modified: "2018-12-27T23:48:58.648532+06:00"
  // partners_waiting_time: null
  // partnerships: []
  // request_category: {id: 1, name: "Стройматериалы"}
  // request_description: "Тест заявки"
  // status: "active"


  //ownProps.match.params
  return {
    auction_duration: item.auction_duration,
    auction_type: item.auction_type || 1,
    id: item.id || '',
    request_category: item.request_category || {name: ''},
    publish_date: item.created || '',
    description: item.request_description || '',
    delivery_address: item.delivery_address || '',
    expired_date: item.contract_expiration_date || '',
    delivery_date: item.delivery_date || '',
    status: item.status || '',
    initiator: item.initiator || {person: {name: ''}},
    user: state.user.profile,
    partnerships,
    bids: item.bids || [],
    isMy: item && item.initiator && item.initiator.id === state.user.profile.id,
    chosen_bid: item.chosen_bid,
    volume: item.volume,
    total_volume: item.total_volume,
    measure: item.measure,
    eds_required: item.eds_required,
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