import { connect } from "react-redux";
import { fetchList } from "../actions";
import { signIn, fetchProfile } from "../../user/actions";
import Index from '../components/index';
import {openLots} from '../../lots/actions'
import {push, go} from 'connected-react-router';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state /*, ownProps*/) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user)),
  fetchProfile: () => dispatch(fetchProfile()),
  openLots: () => dispatch(openLots()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);