import { connect } from "react-redux";
import { getProfile, openEditProfile } from "../actions";
import Profile from '../components/profile';
import {testFileUpload} from '../../../api/lots';


const mapStateToProps = (state /*, ownProps*/) => {
  let myId = state.user.profile.id, //(state.user.profile.person ? state.user.profile.person.id : state.user.profile.company.id),
      myList = state.lots.list.filter((e) => {return e.initiator.id == myId }).map(e => {return {...e, bids: state.lots.bids.filter((m) => {return m.auction == e.id })}}),
      myBids = state.lots.bids.filter((e) => {return e.user == myId }).map((e)=> {return {...e, auction_info: state.lots.list.filter((m) => {return m.id == e.auction})[0] }});

  console.log('PROOOOOOFFFIIIIILLELLELELLELE', myList, myBids);

  return {
    profile: state.user.profile || {},
    token: state.user.token,
    myList: myList || [],
    myBids: myBids || [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  testFileUpload: (data) => testFileUpload(data),
  openEditProfile: () => dispatch(openEditProfile()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);