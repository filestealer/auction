import t from './types'
import {select, put, takeEvery} from 'redux-saga/effects'
import API from '../../api/lots';
import {push} from "connected-react-router";
import moment from 'moment';

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
  let info = {
    request_category: data.request_category,
    auction_type: data.auction_type || 1,
    request_description: data.request_description,
    delivery_address: data.delivery_address,
    delivery_date: moment(data.delivery_date_day + ' ' + data.delivery_date_time).format('YYYY-MM-DD HH:mm:ssZ'),
    auction_duration: moment().add(data.auction_duration, 'days').format('YYYY-MM-DD HH:mm:ssZ'),
  };
  console.log(info);

  try {
    const payload = yield API.createLot({token, data: info});
    yield put({type: t.CREATE_LOT_SUCCESS, payload});
    yield put({type: t.FETCH_LIST, payload});
    yield put(push('/lots/'));
  } catch (error) {
    yield put({type: t.CREATE_LOT_FAILURE, payload: error})
  }
}

function* createRequest(data) {
  const state = yield select(), token = state.user.token;
  let amount = data.payload.price, id = data.payload.id;
  let files = [
    data.payload.file
  ]
  try {
    const payload = yield API.createRequest({token, amount, id, files});
    yield put({type: t.CREATE_REQUEST_SUCCESS, payload});
    yield put({type: t.FETCH_LIST, payload});
    alert('Ваша ставка принята');
    yield put(push('/lots/'));
  } catch (error) {
    console.log(error);
    yield put({type: t.CREATE_REQUEST_FAILURE, payload: error})
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
  yield takeEvery(t.CREATE_REQUEST, createRequest);
  yield takeEvery(t.FETCH_BIDS, fetchBids);
  // yield takeEvery(FETCH_ITEM, fetchItem);
  // yield takeEvery(OPEN_SHOW_SCENE, openShowScene);
  // yield takeEvery(OPEN_EDIT_SCENE, openEditScene);
  // yield takeEvery(OPEN_LIST_SCENE, openListScene);
  // yield takeEvery(PUBLISH, publish);
  // yield takeEvery(REMOVE, remove);
  // yield takeEvery(SAVE, save);
  // yield takeEvery(CREATE, create);
}
