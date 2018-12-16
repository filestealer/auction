import { connect } from "react-redux";
import { fetchList } from "../actions";
import { signIn, fetchProfile } from "../../user/actions";
import Index from '../components/index';

const mapStateToProps = (state /*, ownProps*/) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user)),
  fetchProfile: () => dispatch(fetchProfile()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);