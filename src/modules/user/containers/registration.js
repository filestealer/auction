import { connect } from "react-redux";
import { signUp } from "../actions";
import Registration from '../components/registartion';


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => ({
  save: (data) => dispatch(signUp(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);