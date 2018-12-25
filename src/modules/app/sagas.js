import {put, take, select, call} from 'redux-saga/effects'
import tApp from './types';
import tLots from '../lots/types';
import tUser from '../user/types';
import {push} from 'connected-react-router';
// import tUser from '../user/types';
// import tCareers from '../careers/types';

function* appStart() {
  console.log('Init::Sagas::appStart');
  let storage_token = localStorage.getItem('token');

  // if (storage_token) {
  //   yield put({type: tUser.LOCAL_AUTH, payload: storage_token});
  // }


  console.log('GET TOKEN', localStorage.getItem('token'));
  yield put({type: tLots.FETCH_LIST});
  yield put({type: tLots.FETCH_CATEGORIES});

  //yield put({type: tGeoData.FETCH_GEO_DATA});
  // yield put(push('/lots/'))
  return null;
}

export function* sagas() {
  let state;
  console.log('Init::Sagas::start');

  // console.log('Init::Sagas::start', 'waiting REHYDRATE');
  // res = yield take('persist/REHYDRATE');
  // console.log('Init::Sagas::start', 'REHYDRATED ok', res);

  // state = yield select();
  // const router = state.get('router');
  // const location = (router.toJS ? router.toJS() : router).location;
  // console.log('Init::Sagas::start', 'router: ', location);

  // yield put({type: tCareers.FETCH_LIST});
  yield put({type: tApp.INIT});
  yield call(appStart);

  state = yield select();

  console.log('Init::Sagas::start', 'state is', state);
  // const {user, dontAutoSignIn} = state.get('user').toJS();

  // if (user.phone && (user.password || user.oldPassword) && !dontAutoSignIn) {
  //   yield put({type: tUser.UPDATE_PROFILE, payload: {password: (user.password || user.oldPassword)}});
  //   console.log('Init::Sagas::start', 'DO auto signIn with', user);
  //   yield put({type: tUser.SIGN_IN});
  // } else {
  //   console.log('Init::Sagas::start', 'NO auto signIn with', user, dontAutoSignIn);
  //   // noinspection JSUnresolvedVariable, JSUnresolvedFunction
  //   // Actions.MainScene && Actions.MainScene();
  // }

  yield put({type: tApp.INIT_SUCCESS});
  console.log('Init::Sagas::start', 'init finished');

}
