import { connect } from "react-redux";
import {fetchList, openLots, openLot} from "../actions";
import List from '../components/list';
// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => ({
  test: () => dispatch(fetchList()),
  openLot: (id) => dispatch(openLot(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);