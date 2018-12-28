import t from './types';
import tUser from '../user/types';
import {select, put, takeEvery} from 'redux-saga/effects';
import API from '../../api/lots';
import {push} from "connected-react-router";
import moment from 'moment';

import {createNotification} from 'react-redux-notify';
import {makeNotification} from '../../utils';


moment().format();
// import {informErrorInfo} from '../../utils/informer';
// import {openArticleEditScene, openArticleShowScene, openArticlesScene, pushScene} from '../../utils/nav';
// import Immutable from 'immutable';

function* fetchList() {
  console.log('LOTS FetchList');
  try {
    const payload = yield API.getList();
    yield put({type: t.FETCH_LIST_SUCCESS, payload})
  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put({type: t.FETCH_LIST_FAILURE, payload: error})
  }
}


function* fetchBids() {
  console.log('LOTS FetchList');
  try {
    const payload = yield API.getBids();
    yield put({type: t.FETCH_BIDS_SUCCESS, payload})
  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put({type: t.FETCH_BIDS_FAILURE, payload: error})
  }
}

function* fetchCategories() {
  console.log('LOTS FetchList');
  try {
    const payload = yield API.getCategories();
    yield put({type: t.FETCH_CATEGORIES_SUCCESS, payload})
  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put({type: t.FETCH_CATEGORIES_FAILURE, payload: error})
  }
}



function* createLot(data) {
  console.log('createLot Saga', data);
  const state = yield select(), token = state.user.token;
  // {
//   "request_category": 1,
//   "auction_type": 1,
//   "request_description": "Вот такой вот аукцион",
//   "delivery_date": "2019-10-02T00:00:00Z",
//   "delivery_address": "куда?:D",
//   "auction_duration": "2019-10-02T00:00:00Z"
// }
  data = data.payload;

  let files = Object.values(state.user.files).map(e => e.id);

  //FIXME add fields city, 5step
  let info = {
    request_category: data.request_category,
    auction_type: data.auction_type || 1,
    request_description: data.request_description,
    delivery_address: data.delivery_address,
    delivery_date: moment(data.delivery_date_day + ' ' + (data.delivery_date_time || "00:00")).format('YYYY-MM-DD HH:mm:ssZ'),
    auction_duration: moment().add(data.auction_duration, 'days').format('YYYY-MM-DD HH:mm:ssZ'),
    files,
    volume: data.volume,
  };
  console.log(info);

  try {
    const payload = yield API.createLot({token, data: info});
    if (payload.id) {
      yield put(createNotification(makeNotification('success', "Лот успешно создан")));
      yield put({type: t.CREATE_LOT_SUCCESS, payload});
      yield put({type: t.FETCH_LIST});
      yield put({type: tUser.FILE_UPLOAD_CLEAR});
      yield put(push('/lots/'));
    } else {
      yield put({type: t.CREATE_LOT_FAILURE, payload: error})
      yield put(createNotification(makeNotification('error', 'Ошибка сохранения. Проверьте правильность заполненных данных')));
    }
  } catch (error) {
    yield put({type: t.CREATE_LOT_FAILURE, payload: error})
  }
}

function* createBid(data) {
  const state = yield select(), token = state.user.token;
  let amount = data.payload.price, id = data.payload.id;
  let files = Object.values(state.user.files).map(e => e.id);
  try {
    const payload = yield API.createBid({token, amount, id, files});
    yield put({type: t.CREATE_REQUEST_SUCCESS, payload});
    yield put({type: t.FETCH_LIST, payload});
    yield put({type: tUser.FILE_UPLOAD_CLEAR});
    alert('Ваша ставка принята');
    yield put(push('/lots/'));
  } catch (error) {
    console.log(error);
    yield put({type: t.CREATE_REQUEST_FAILURE, payload: error})
    alert(error.statusText);
  }
}

function* acceptBid(data) {
  const state = yield select(), token = state.user.token;
  let auction = data.payload.auction;
  let bid = data.payload.bid;
  try {
    const payload = yield API.acceptBid({token, auction, bid});
    yield put({type: t.ACCEPT_BID_SUCCESS, payload});
    yield put({type: t.FETCH_LIST, payload});
    yield put(createNotification(makeNotification('success', "Ставка принята")));
    // yield put(push('/lots/'));
  } catch (error) {
    console.log(error);
    yield put({type: t.ACCEPT_BID_FAILURE, payload: error});
    yield put(createNotification(makeNotification('error', "Произошла ошибка")));
  }
}


function* acceptPartnership(data) {
  const state = yield select(), token = state.user.token;
  let auction = data.payload.auction;
  let partnership = data.payload.partnership;
  try {
    const payload = yield API.acceptPartnership({token, auction, partnership});
    yield put({type: t.ACCEPT_BID_SUCCESS, payload});
    yield put({type: t.FETCH_LIST, payload});
    yield put(createNotification(makeNotification('success', "Ставка принята")));
    // yield put(push('/lots/'));
  } catch (error) {
    console.log(error);
    yield put({type: t.ACCEPT_BID_FAILURE, payload: error});
    yield put(createNotification(makeNotification('error', "Произошла ошибка")));
  }
}


function* createRequestPartnership(data) {
  const state = yield select(), token = state.user.token;
  let description = data.payload.description, id = data.payload.id, volume= data.payload.volume;

  try {
    const payload = yield API.createRequestPartnership({token, auction: id, description, volume});
    yield put({type: t.REQUEST_PARTNERSHIP_SUCCESS, payload});
    yield put({type: t.FETCH_LIST, payload});
    alert('Ваша заявка на партнерство принята');
    // yield put(push('/lots/'));
  } catch (error) {
    console.log(error);
    yield put({type: t.REQUEST_PARTNERSHIP_FAILURE, payload: error})
    alert(error.statusText);
  }

}

function* openLotsScene() {
  yield put(push('/lots/'));
}
function* openLotScene(data) {
  yield put(push('/lot/'+data.payload+'/'));
}

function* openCreateLotScene() {
  yield put(push('/create_lot/'));
}


export function* sagas() {
  console.log('LOTS SAGAS');
  yield takeEvery(t.FETCH_LIST, fetchList);
  yield takeEvery(t.OPEN_LOTS, openLotsScene);
  yield takeEvery(t.CREATE_LOT, createLot);
  yield takeEvery(t.OPEN_LOT, openLotScene);
  yield takeEvery(t.OPEN_CREATE_LOT, openCreateLotScene);
  yield takeEvery(t.CREATE_REQUEST, createBid);
  yield takeEvery(t.REQUEST_PARTNERSHIP, createRequestPartnership);
  yield takeEvery(t.FETCH_BIDS, fetchBids);
  yield takeEvery(t.FETCH_CATEGORIES, fetchCategories);
  yield takeEvery(t.ACCEPT_BID, acceptBid);
  yield takeEvery(t.ACCEPT_PARTNERSHIP, acceptPartnership);
  // yield takeEvery(FETCH_ITEM, fetchItem);
  // yield takeEvery(OPEN_SHOW_SCENE, openShowScene);
  // yield takeEvery(OPEN_EDIT_SCENE, openEditScene);
  // yield takeEvery(OPEN_LIST_SCENE, openListScene);
  // yield takeEvery(PUBLISH, publish);
  // yield takeEvery(REMOVE, remove);
  // yield takeEvery(SAVE, save);
  // yield takeEvery(CREATE, create);
}
