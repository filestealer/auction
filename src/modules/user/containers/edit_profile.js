import { connect } from "react-redux";
import { signUp, editProfile } from "../actions";
import EditProfile from '../components/edit_profile';


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter,
    files: state.user.files,
    profile: state.user.profile,
  };
};

const mapDispatchToProps = (dispatch) => ({
  save: (data) => dispatch(editProfile(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);