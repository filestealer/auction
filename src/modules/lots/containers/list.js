import { connect } from "react-redux";
import {fetchList, openLots, openLot} from "../actions";
import List from '../components/list';
// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    list: state.lots.list || []
  };
};

const mapDispatchToProps = (dispatch) => ({
  openLot: (id) => dispatch(openLot(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);