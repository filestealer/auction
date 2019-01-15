import { connect } from "react-redux";
import { signUp } from "../actions";
import Registration from '../components/registartion';


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter,
    files: state.user.files,
    cities: state.lots.cities || [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  save: (data) => dispatch(signUp(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);