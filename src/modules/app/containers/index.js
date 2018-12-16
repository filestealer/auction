import { connect } from "react-redux";
import { fetchList } from "../actions";
import { signIn, fetchProfile } from "../../user/actions";
import Index from '../components/index';
import {openLots, createLot} from '../../lots/actions'

const mapStateToProps = (state /*, ownProps*/) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user)),
  fetchProfile: () => dispatch(fetchProfile()),
  openLots: () => dispatch(openLots()),
  createLot: () => dispatch(createLot()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);