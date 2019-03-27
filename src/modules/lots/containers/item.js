import { connect } from "react-redux";
import { createRequest, createRequestPartnership, acceptBid, acceptPartnership, fetchItem} from "../actions";
import {openPopup} from "../../user/actions";
import Item from '../components/item';
import {push} from "connected-react-router";

// const Counter = ...

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps LOT',state, ownProps);


  let item_id = ownProps.match.params.id,
      min_bid = {amount: ''},
      item = state.lots.items[item_id] || {};

  // if (item) {
  //   categories = state.lots.categories;
  //   category_name = categories.filter(el => { return el.id == item.request_category })[0];
  // }

  // let bids = state.lots.bids.filter(e => e.auction == item.id && item && item.initiator && item.initiator.id == state.user.profile.id);
  if (item && item.bids && item.bids.length > 0) {
    min_bid = item.bids.sort((a,b) => {
      if (a.amount < b.amount) {
        return -1;
      }
      if (a.amount > b.amount) {
        return 1;
      }
      return 0;
    })[0];
  } else {
    min_bid =  {amount: ''}
  }

  let city = item.city && state.lots && state.lots.cities && state.lots.cities.length > 0 && state.lots.cities.filter(c => c.id == item.city)[0].name || '';

  //let partnerships = (item && item.initiator && item.initiator.id == state.user.profile.id) ? item.partnerships : [];
  return {
    auction_duration: item.auction_duration || '',
    auction_type: item.auction_type || 1,
    id: item.id || ownProps.match.params.id || '',
    request_category: item.request_category || {name: ''},
    publish_date: item.created || '',
    description: item.request_description || '',
    delivery_address: item.delivery_address || '',
    expired_date: item.contract_expiration_date || '',
    delivery_date: item.delivery_date || '',
    status: item.status || '',
    office: item.office || '',
    bids_count: item.bids_count || 0,
    min_bid_amount: item.min_bid_amount || 0,
    initiator: item.initiator || {person: {name: ''}},
    user: state.user.profile,
    partnerships: item.partnerships,
    bids: item.bids || [],
    files: item.files || [],
    isMy: item && item.initiator && item.initiator.id === state.user.profile.id,
    chosen_bid: item.chosen_bid  || '',
    volume: item.volume  || '',
    total_volume: item.total_volume  || '',
    measure: item.measure  || '',
    eds_required: item.eds_required  || '',
    city: city || '',
    street: item.street || '',
    building: item.building || '',
    min_bid,
    // categories: categories || [],
    // category_name: category_name || '',
  };
};

const mapDispatchToProps = (dispatch) => ({
  request: (data) => dispatch(createRequest(data)),
  requestPartnership: (data) => dispatch(createRequestPartnership(data)),
  acceptPartnership: (data) => dispatch(acceptPartnership(data)),
  acceptBid: (data) => dispatch(acceptBid(data)),
  reload: (id) => dispatch(fetchItem(id)),
  openUser: (id) => dispatch(push('/users/'+id)),
  openPopup: () => dispatch(openPopup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);