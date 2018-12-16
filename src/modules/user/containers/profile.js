import { connect } from "react-redux";
import { getProfile } from "../actions";
import Profile from '../components/profile';


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => ({
  test: () => dispatch(fetchList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);