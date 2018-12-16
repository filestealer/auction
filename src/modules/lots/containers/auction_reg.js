import { connect } from 'react-redux';
import { fetchList } from '../actions';
import Auction_reg from '../components/auction_reg';
// const Counter = ...

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps LOT', state, ownProps);
  // ownProps.match.params
  return {
    id: ownProps.match.params,
  };
};

const mapDispatchToProps = dispatch => ({
  test: () => dispatch(fetchList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auction_reg);
