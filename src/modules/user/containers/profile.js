import { connect } from "react-redux";
import { getProfile } from "../actions";
import Profile from '../components/profile';


const mapStateToProps = (state /*, ownProps*/) => {
  let myId = state.user.profile.id, //(state.user.profile.person ? state.user.profile.person.id : state.user.profile.company.id),
      myList = state.lots.list.filter((e) => {return (e.initiator.person && e.initiator.person.id == myId) || (e.initiator.company && e.initiator.company.id == myId) }),
      myBids = state.lots.bids.filter((e) => {return e.user == myId }).map((e)=> {return {...e, auction_info: state.lots.list.filter((m) => {return m.id == e.auction})[0] }});

  console.log('PROOOOOOFFFIIIIILLELLELELLELE', myList, myBids);
  return {
    profile: state.user.profile || {},
    myList: myList || [],
    myBids: myBids || [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  test: () => dispatch(fetchList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);