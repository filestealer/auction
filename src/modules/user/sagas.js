import t from './types'
import {select, put, takeEvery} from 'redux-saga/effects'
import API from '../../api/user';
import {push} from "connected-react-router";
import tLots from '../lots/types';

// import {informErrorInfo} from '../../utils/informer';
// import {openArticleEditScene, openArticleShowScene, openArticlesScene, pushScene} from '../../utils/nav';
// import Immutable from 'immutable';

function* signIn(data) {
  console.log('Users auth', data);
  try {
    const payload = yield API.signIn(data.payload);
    yield put({type: t.SIGN_IN_SUCCESS, payload});
    localStorage.setItem('token', payload.token );
    yield put({type: t.HIDE_MODAL});
    yield put({type: t.FETCH_PROFILE});
    yield put({type: tLots.FETCH_BIDS});
  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put({type: t.SIGN_IN_FAILURE, payload: error})
  }
}

function* localAuth(data) {
  yield put({type: t.SIGN_IN_SUCCESS, payload: {token: data.payload}});
  // yield put({type: t.HIDE_MODAL});
  yield put({type: t.FETCH_PROFILE});
  // yield put({type: tLots.FETCH_BIDS});
}

function* signUp(data) {
  const state = yield select();
  let info = data.payload,
      user = info.user,
      type = info.type,
      company = info.company,
      person = info.person;
    person['address'] = 'test';
    person['last_name'] = 'test';
  let files = Object.values(state.user.files).map(e => e.id);
  let payload;

  if (type === "person") {
    try {
      payload = yield API.signUpPerson({user: user, ...person, files});
      yield put({type: t.SIGN_UP_SUCCESS, payload});
      yield put({type: t.FILE_UPLOAD_CLEAR});
      alert('Вы зарегистрировались, можете войти');
    } catch (error) {
      yield put({type: t.SIGN_UP_FAILURE, payload: error})
      alert('Ошибка при регистрации');
    }
  } else {
    try {
      payload = yield API.signUpCompany({user: user, ...company, files});
      yield put({type: t.SIGN_UP_SUCCESS, payload});
      yield put({type: t.FILE_UPLOAD_CLEAR});
      alert('Вы зарегистрировались, можете войти');
    } catch (error) {
      yield put({type: t.SIGN_IN_FAILURE, payload: error})
      alert('Ошибка при регистрации');
    }
  }
}

function* fetchProfile() {
  console.log('Fetch Profile');
  const state = yield select(), token = state.user.token;

  try {
    const payload = yield API.fetchProfile(token);
    yield put({type: t.FETCH_PROFILE_SUCCESS, payload});
  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put({type: t.FETCH_PROFILE_FAILURE, payload: error});
    localStorage.setItem('token', '');
  }
}

function* openRegistration() {
  yield put(push('/registration/'));
}
function* openProfile() {
  yield put(push('/profile/'));
}
function* fileUpload(data) {
  console.log('User FileUpload', data);
  try {
    const payload = yield API.fileUpload(data.payload.file);
    yield put({type: t.FILE_UPLOAD_SUCCESS, payload: {...payload, file_id: data.payload.file_id}});
  } catch (error) {
    yield put({type: t.FILE_UPLOAD_FAILURE, payload: error})
  }
}



//
//
// function* openShowScene({payload}) {
//   yield put({type: FETCH_ITEM, payload});
//   openArticleShowScene(payload);
// }


export function* sagas() {
  yield takeEvery(t.SIGN_IN, signIn);
  yield takeEvery(t.SIGN_UP, signUp);
  yield takeEvery(t.FETCH_PROFILE, fetchProfile);
  yield takeEvery(t.OPEN_REGISTRATION, openRegistration);
  yield takeEvery(t.OPEN_PROFILE, openProfile);
  yield takeEvery(t.LOCAL_AUTH, localAuth);
  yield takeEvery(t.FILE_UPLOAD, fileUpload);
  // yield takeEvery(FETCH_ITEM, fetchItem);
  // yield takeEvery(OPEN_SHOW_SCENE, openShowScene);
  // yield takeEvery(OPEN_EDIT_SCENE, openEditScene);
  // yield takeEvery(OPEN_LIST_SCENE, openListScene);
  // yield takeEvery(PUBLISH, publish);
  // yield takeEvery(REMOVE, remove);
  // yield takeEvery(SAVE, save);
  // yield takeEvery(CREATE, create);
}
