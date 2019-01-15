import { connect } from "react-redux";
import { getProfile, openEditProfile } from "../actions";
import Profile from '../components/profile';
import {testFileUpload} from '../../../api/lots';
import {openLot} from "../../lots/actions";


const mapStateToProps = (state /*, ownProps*/) => {
  let myId, myList, myBids;
      myId = state.user.profile.id; //(state.user.profile.person ? state.user.profile.person.id : state.user.profile.company.id);

        if (state.lots.list.length > 0) {
          myList = state.lots.list && state.lots.list.filter((e) => {return e.initiator.id == myId }).map(e => {return {...e, bids: state.lots.bids.filter((m) => {return m.auction == e.id })}});
          myBids = state.lots.bids && state.lots.bids.filter((e) => {return e.user == myId }).map((e)=> {return {...e, auction_info: state.lots.list.filter((m) => {return m.id == e.auction})[0] }});
        }
  console.log('PROOOOOOFFFIIIIILLELLELELLELE', myList, myBids);

  return {
    profile: state.user.profile || {},
    user: state.user,
    token: state.user.token,
    myList: myList || [],
    myBids: myBids || [],
    cities: state.lots.cities,
  };
};

const mapDispatchToProps = (dispatch) => ({
  testFileUpload: (data) => testFileUpload(data),
  openEditProfile: () => dispatch(openEditProfile()),
  openLot: (id) => dispatch(openLot(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);