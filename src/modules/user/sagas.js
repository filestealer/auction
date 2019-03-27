import t from './types'
import {select, put, takeEvery} from 'redux-saga/effects'
import API from '../../api/user';
import {push} from "connected-react-router";
import tLots from '../lots/types';

import {createNotification} from 'react-redux-notify';
import {makeNotification} from '../../utils';




// import {informErrorInfo} from '../../utils/informer';
// import {openArticleEditScene, openArticleShowScene, openArticlesScene, pushScene} from '../../utils/nav';
// import Immutable from 'immutable';

function* signIn(data) {
  console.log('Users auth', data);
  try {
    const payload = yield API.signIn(data.payload);

    if (payload.token) {
      yield put({type: t.SIGN_IN_SUCCESS, payload});
      localStorage.setItem('token', payload.token );
      yield put({type: t.HIDE_MODAL});
      yield put({type: t.FETCH_PROFILE});
    } else {
      yield put({type: t.SIGN_IN_FAILURE, payload: payload});
      yield put(createNotification(makeNotification('error', 'Ошибка авторизации. Проверьте правильность заполненных данных')));
      // switch (payload) {
      //   case payload.non_field_errors:
      //     yield put(createNotification(makeNotification('error', payload.non_field_errors[0])));
      //     break;
      //   default:
      //     yield put(createNotification(makeNotification('error', 'Ошибка авторизации. Проверьте правильность заполненных данных')));
      // }
      // yield put(createNotification(makeNotification('error', 'Test message')));

      // alert('ошибка авторизации');
    }

  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put({type: t.SIGN_IN_FAILURE, payload: error})
  }
}

function* signOut() {
  console.log('Users signOut');
  try {
    localStorage.setItem('token', '' );
    yield put(push('/'));
  } catch (error) {
    console.log('Error SignOut');
  }
}

function* localAuth(data) {
  yield put({type: t.SIGN_IN_SUCCESS, payload: {token: data.payload}});
  // yield put({type: t.HIDE_MODAL});
  yield put({type: t.FETCH_PROFILE});

  // yield put(createNotification(mySuccessNotification));
  // yield put({type: tLots.FETCH_BIDS});
}

function* signUp(data) {
  const state = yield select();
  let info = data.payload,
      user = {...info.user},
      type = info.type,
      company = info.company,
      person = info.person;
    // person['street'] = 'test';
    company['description'] = 'test';
    company['balance'] = 1000;
    person['balance'] = 1000;
    company['website'] = 'http://google.com';
    // person['last_name'] = 'test';

  user.phone = info.user.phone.replace(/[|&;_ $%@"<>()+,]/g, "").substr(1);

  if (company.website && company.website.indexOf('http') < 0) {
    company.website = 'http://'+company.website;
  }

  let files = Object.values(state.user.files).map(e => e.id);
  let payload;

  if (type === "person") {
    try {
      payload = yield API.signUpPerson({user: user, ...person, files});

      if (payload && payload.id) {
        yield put({type: t.SIGN_UP_SUCCESS, payload});
        yield put({type: t.SIGN_IN, payload: {email: user.email, password: user.password}});
        yield put({type: t.FILE_UPLOAD_CLEAR});
        yield put(createNotification(makeNotification('success', 'Регистрация прошла успешно.')));
        yield put(push('/'));
      } else {
        if (payload[0] && payload[0] === "Email is already registered") {
          yield put({type: t.SIGN_UP_FAILURE, payload});
          yield put(createNotification(makeNotification('error', 'Данный Email уже используется.')));
        } else {

          yield put({type: t.SIGN_UP_FAILURE, payload});
          yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
        }
      }
    } catch (error) {
      yield put({type: t.SIGN_UP_FAILURE, payload: error});
      yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
    }
  } else {
    try {
      payload = yield API.signUpCompany({user: user, ...company, files});
      if (payload && payload.id) {
        yield put({type: t.SIGN_UP_SUCCESS, payload});
        yield put({type: t.SIGN_IN, payload: {email: user.email, password: user.password}});
        yield put({type: t.FILE_UPLOAD_CLEAR});
        yield put(createNotification(makeNotification('success', 'Регистрация прошла успешно.')));
        yield put(push('/'));
      } else {
        if (payload[0] && payload[0] === "Email is already registered") {
          yield put({type: t.SIGN_UP_FAILURE, payload});
          yield put(createNotification(makeNotification('error', 'Данный Email уже используется.')));
        } else {

          yield put({type: t.SIGN_UP_FAILURE, payload});
          yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
        }
      }
    } catch (error) {
      yield put({type: t.SIGN_UP_FAILURE, payload: error});
      yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
    }
  }
}


function* editProfile(data) {
  const state = yield select();

  let info = {...data.payload},
      // user = info.user,
      isPerson = !!state.user.profile.person,
      company = info.company,
      person = info.person,
      token = state.user.token,
      id = state.user.profile.person && state.user.profile.person.id || state.user.profile.company && state.user.profile.company.id;


  info.phone = info.phone.replace(/[|&;_ $%@"<>()+,]/g, "").substr(1);

  // let files = Object.values(state.user.files).map(e => e.id);
  let payload;

  if (isPerson) {
    try {
      // person['street'] = 'test';
      // company['address'] = 'test';
      // person['last_name'] = 'test';

      let postObject = {

        ...person,
        // name: company.name,
        // office: company.office,
        // city: company.city,
        // street: company.street,
        // building: company.building,
        // balance: company.balance,
        // website: company.website,
        // files: person.files.map(e => e.id),
      };

      payload = yield API.updatePerson(postObject,id, token);

      if (payload && payload.id) {
        yield put({type: t.EDIT_PROFILE_SUCCESS, payload});
        // yield put({type: t.FILE_UPLOAD_CLEAR});
        yield put(createNotification(makeNotification('success', 'Профиль обновлен.')));
      } else {
        yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
      }
    } catch (error) {
      yield put({type: t.EDIT_PROFILE_FAILURE, payload: error});
      yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
    }
  } else {
    try {

      let postObject = {

        ...company,
        // bin: company.bin,
        // name: company.name,
        // office: company.office,
        // city: company.city,
        // street: company.street,
        // building: company.building,
        // balance: company.balance,
        // website: company.website,
        // files: company.files.map(e => e.id),
      };
      payload = yield API.updateCompany(postObject, id, token);
      if (payload && payload.id) {
        yield put({type: t.EDIT_PROFILE_SUCCESS, payload});
        yield put({type: t.FETCH_PROFILE});
        // yield put({type: t.FILE_UPLOAD_CLEAR});
        yield put(createNotification(makeNotification('success', 'Профиль обновлен.')));
      } else {
        yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
      }
    } catch (error) {
      yield put({type: t.EDIT_PROFILE_FAILURE, payload: error});
      yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
    }
  }
}

function* editProfilePopup(data) {
  const state = yield select();

  let info = {...data.payload},
      // user = info.user,
      isPerson = !!state.user.profile.person,
      company = info.company,
      person = info.person,
      token = state.user.token,
      id = state.user.profile.person && state.user.profile.person.id || state.user.profile.company && state.user.profile.company.id;


  info.phone = info.phone.replace(/[|&;_ $%@"<>()+,]/g, "").substr(1);

  // let files = Object.values(state.user.files).map(e => e.id);
  let payload;

  if (isPerson) {
    try {
      // person['street'] = 'test';
      // company['address'] = 'test';
      // person['last_name'] = 'test';

      let postObject = {

        ...person,
        // name: company.name,
        // office: company.office,
        // city: company.city,
        // street: company.street,
        // building: company.building,
        // balance: company.balance,
        // website: company.website,
        // files: person.files.map(e => e.id),
        files: []
      };

      payload = yield API.updatePerson(postObject,id, token);

      if (payload && payload.id) {
        yield put({type: t.EDIT_PROFILE_SUCCESS, payload});
        // yield put({type: t.FILE_UPLOAD_CLEAR});
        yield put(createNotification(makeNotification('success', 'Профиль обновлен.')));
        yield put({type: t.HIDE_POPUP});
      } else {
        yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
      }
    } catch (error) {
      yield put({type: t.EDIT_PROFILE_FAILURE, payload: error});
      yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
    }
  } else {
    try {

      let postObject = {

        ...company,
        // bin: company.bin,
        // name: company.name,
        // office: company.office,Пи
        // city: company.city,
        // street: company.street,
        // building: company.building,
        // balance: company.balance,
        // website: company.website,
        // files: company.files.map(e => e.id),
        files: []
      };
      payload = yield API.updateCompany(postObject, id, token);
      if (payload && payload.id) {
        yield put({type: t.EDIT_PROFILE_SUCCESS, payload});
        yield put({type: t.FETCH_PROFILE});
        yield put({type: t.HIDE_POPUP});
        // yield put({type: t.FILE_UPLOAD_CLEAR});
        yield put(createNotification(makeNotification('success', 'Профиль обновлен.')));
      } else {
        yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
      }
    } catch (error) {
      yield put({type: t.EDIT_PROFILE_FAILURE, payload: error});
      yield put(createNotification(makeNotification('error', 'Произошла ошибка. Проверьте заполненость полей.')));
    }
  }
}




function* fetchProfile() {
  console.log('Fetch Profile');
  const state = yield select(), token = state.user.token;
  console.log('fetch profile token', token);

  try {
    const payload = yield API.fetchProfile(token);
    if (payload && payload.id) {
      yield put({type: t.FETCH_PROFILE_SUCCESS, payload});
      // yield put(createNotification(makeNotification('success', 'Регистрация прошла успешно. Можете авторизоваться.')));
    } else {
      yield put(createNotification(makeNotification('error', 'Произошла ошибка в получении профиля. Проверьте заполненость полей.')));
      yield put({type: t.FETCH_PROFILE_FAILURE});
      localStorage.setItem('token', '');
    }
  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put({type: t.FETCH_PROFILE_FAILURE, payload: error});
    localStorage.setItem('token', '');
  }
}

function* fetchUser(action) {
  console.log('LOTS FetchList');
  const state = yield select();
  try {
    const payload = yield API.fetchUser(action.payload);
    yield put({type: t.FETCH_USER_SUCCESS, payload});
  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put({type: t.FETCH_USER_FAILURE, payload: error});
  }
}




function* openRegistration() {
  yield put(push('/registration/'));
  yield put({type: t.HIDE_MODAL});
}
function* openProfile() {
  yield put(push('/profile/'));
}

function* openEditProfile() {
  yield put(push('/edit_profile/'));
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
  yield takeEvery(t.SIGN_OUT, signOut);
  yield takeEvery(t.SIGN_UP, signUp);
  yield takeEvery(t.FETCH_PROFILE, fetchProfile);
  yield takeEvery(t.OPEN_REGISTRATION, openRegistration);
  yield takeEvery(t.OPEN_PROFILE, openProfile);
  yield takeEvery(t.LOCAL_AUTH, localAuth);
  yield takeEvery(t.OPEN_EDIT_PROFILE, openEditProfile);
  yield takeEvery(t.EDIT_PROFILE, editProfile);
  yield takeEvery(t.EDIT_PROFILE_POPUP, editProfilePopup);
  yield takeEvery(t.FILE_UPLOAD, fileUpload);
  yield takeEvery(t.FETCH_USER, fetchUser);
  // yield takeEvery(FETCH_ITEM, fetchItem);
  // yield takeEvery(OPEN_SHOW_SCENE, openShowScene);
  // yield takeEvery(OPEN_EDIT_SCENE, openEditScene);
  // yield takeEvery(OPEN_LIST_SCENE, openListScene);
  // yield takeEvery(PUBLISH, publish);
  // yield takeEvery(REMOVE, remove);
  // yield takeEvery(SAVE, save);
  // yield takeEvery(CREATE, create);
}
