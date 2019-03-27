import { connect } from "react-redux";
import { signUp, editProfile, editProfilePopup } from "../actions";
import UpdateProfilePopup from '../components/update_profile_popup';


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter,
    files: state.user.files,
    profile: state.user.profile,
    isPerson: state.user.profile && !!state.user.profile.person,
    popupActive: state.user.popupActive,
  };
};

const mapDispatchToProps = (dispatch) => ({
  save: (data) => dispatch(editProfilePopup(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfilePopup);