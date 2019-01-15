import { connect } from "react-redux";
import {fetchList, openLots, openLot, changeDate, changePage, filterList} from "../actions";
import List from '../components/list';

import moment from 'moment';
moment().format();
// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {

  const lots = state.lots, list = state.lots.list && state.lots.cities && state.lots.list.filter((e) => {
    return e.chosen_bid == null //(moment(e.auction_duration).format('YYYYMMDD') >= moment().format('YYYYMMDD')) &&
  }).map(e => {return {...e, city: state.lots.cities.filter(c => c.id == e.city)[0]}});
  console.log('LIST CONTAINER', list);
  return {
    list: list || [],
    cities: lots.cities,
    count: lots.count,
    page: lots.page,
    delivery_date__gte: lots.delivery_date__gte,
    delivery_date__lte: lots.delivery_date__lte,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openLot: (id) => dispatch(openLot(id)),
  onChangeDateFrom: (e) => {
    dispatch(changeDate({delivery_date__gte: moment(e).format('YYYY-MM-DD HH:mm:ssZ')}));
  },
  onChangeDateTo: (e) => {
    dispatch(changeDate({delivery_date__lte: moment(e).format('YYYY-MM-DD HH:mm:ssZ')}));
  },
  filter: (data) => {
    dispatch(filterList(data));
  },
  changePage: (page) => {
    dispatch(changePage({page}));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);