import { connect } from 'react-redux';
import { createLot } from '../actions';
import Auction_reg from '../components/auction_reg';
// const Counter = ...

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps LOT', state, ownProps);
  // ownProps.match.params
  return {
    id: ownProps.location.state && ownProps.location.state.query && ownProps.location.state.query.id || false,
    categories: state.lots.categories,
    files: state.user.files,
  };
};

const mapDispatchToProps = dispatch => ({
  save: (data) => dispatch(createLot(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auction_reg);
