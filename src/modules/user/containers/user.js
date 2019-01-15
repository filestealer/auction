import { connect } from "react-redux";
import User from '../components/user';



const mapStateToProps = (state, ownProps) => {
  let myId = ownProps.match.params.id;
  return {
    profile: state.user.users[myId] || {},
    cities: state.lots.cities,
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);