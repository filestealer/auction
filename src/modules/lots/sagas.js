import t from './types';
import tUser from '../user/types';
import {select, put, takeEvery} from 'redux-saga/effects';
import API from '../../api/lots';
import {push} from "connected-react-router";
import moment from 'moment';
import queryString from 'query-string';
import {createNotification} from 'react-redux-notify';
import {makeNotification} from '../../utils';


moment().format('l');
// import {informErrorInfo} from '../../utils/informer';
// import {openArticleEditScene, openArticleShowScene, openArticlesScene, pushScene} from '../../utils/nav';
// import Immutable from 'immutable';

function* fetchList(action) {
  console.log('LOTS FetchList');
  try {
    const payload = yield API.getList(action.payload);
    yield put({type: t.FETCH_LIST_SUCCESS, payload})
  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put({type: t.FETCH_LIST_FAILURE, payload: error})
  }
}

function* fetchItem(action) {
  console.log('LOTS FetchList');
  const state = yield select(), token = state.user.token;
  try {
    const payload = yield API.getItem(action.payload, token);
    yield put({type: t.FETCH_ITEM_SUCCESS, payload});
  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put({type: t.FETCH_ITEM_FAILURE, payload: error});
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

function* fetchCities() {
  console.log('LOTS fetch cities');
  try {
    const payload = yield API.getCities();
    yield put({type: t.FETCH_CITIES_SUCCESS, payload});
  } catch (error) {
    yield put(createNotification(makeNotification('error', "Ошибка получения городов")));
    yield put({type: t.FETCH_CITIES_FAILURE, payload: error});
  }
}

function* fetchCategories() {
  console.log('LOTS FetchList');
  try {
    const payload = yield API.getCategories();
    yield put({type: t.FETCH_CATEGORIES_SUCCESS, payload})
  } catch (error) {
    // informErrorInfo(error, 'Ошибка загрузки новостей');
    yield put(createNotification(makeNotification('error', "Ошибка получения категорий")));
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
  console.log(moment(moment(data.delivery_date_day).format('MM-DD-YYYY') + ' ' + (data.delivery_date_time ? moment(data.delivery_date_time).format('HH:mm') : "23:59" )).format('YYYY-MM-DD HH:mm:ssZ'));

  //FIXME add fields city, 5step
  let info = {
    request_category: data.request_category,
    auction_type: data.auction_type || 1,
    request_description: data.request_description,
    delivery_address: data.delivery_address,
    city: data.city,
    building: data.building,
    street: data.street,
    office: data.office,
    delivery_date: moment(moment(data.delivery_date_day).format('MM-DD-YYYY') + ' ' + (data.delivery_date_time ? moment(data.delivery_date_time).format('HH:mm') : "23:59" )).format('YYYY-MM-DD HH:mm:ssZ'),
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
    if (payload && payload.id) {
      yield put({type: t.CREATE_REQUEST_SUCCESS, payload});
      yield put({type: t.FETCH_LIST, payload});
      yield put({type: tUser.FILE_UPLOAD_CLEAR});
      yield put(createNotification(makeNotification('success', "Ваша ставка принята")));
      yield put(push('/lots/'));
    } else {
      yield put({type: t.CREATE_REQUEST_FAILURE, payload: payload});
      if (payload[0] == "Not enough balance") {
        yield put(createNotification(makeNotification('error', "Не достаточно средств на аккаунте")));
      } else {
        yield put(createNotification(makeNotification('error', "Произошла ошибка")));
      }
    }
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
    yield put({type: t.ACCEPT_PARTNERSHIP_SUCCESS, payload});
    yield put({type: t.FETCH_ITEM, payload: payload.auction});
    yield put(createNotification(makeNotification('success', "Заявка на партнерство принята")));
    // yield put(push('/lots/'));
  } catch (error) {
    console.log(error);
    yield put({type: t.ACCEPT_PARTNERSHIP_FAILURE, payload: error});
    yield put(createNotification(makeNotification('error', "Произошла ошибка")));
  }
}


function* createRequestPartnership(data) {
  const state = yield select(), token = state.user.token;
  let description = data.payload.description, id = data.payload.id, volume= data.payload.volume;

  try {
    const payload = yield API.createRequestPartnership({token, auction: id, description, volume});
    if (payload && typeof(payload) !== "string") {
      yield put({type: t.REQUEST_PARTNERSHIP_SUCCESS, payload});
      yield put(createNotification(makeNotification('success', "Ваша заявка на партнерство принята")));
    } else {
      yield put({type: t.REQUEST_PARTNERSHIP_FAILURE, payload: error})
      yield put(createNotification(makeNotification('error', "Произошла ошибка")));
    }


    // yield put(push('/lots/'));
  } catch (error) {
    console.log(error);
    yield put({type: t.REQUEST_PARTNERSHIP_FAILURE, payload: error})
    yield put(createNotification(makeNotification('error', "Произошла ошибка")));

  }

}

function* openLotsScene() {
  // yield put({type: t.FETCH_LIST, payload: {page: 1}});
  let state =  yield select(),
      query = {
                delivery_date__gte: state.lots.delivery_date__gte,
                delivery_date__lte: state.lots.delivery_date__lte,
                page: state.lots.page,
      };
  yield put(push('/lots/?'+queryString.stringify(query)));
}

function* openLotScene(data) {
  // yield put({type: t.FETCH_ITEM, payload: data.payload});
  yield put(push('/lot/'+data.payload+'/'));

}

function* openCreateLotScene(data) {
  yield put(push('/create_lot/?id='+data.payload,{query: {id: data.payload}}));
}

function* changeDate(action) {
  const state = yield select(), lots = state.lots;

  let query = {
    page: lots.page || 1,
    delivery_date__gte: lots.delivery_date__gte || moment().format('YYYY-MM-DD HH:mm:ssZ'),
    delivery_date__lte: lots.delivery_date__lte || moment().add(365, 'days').format('YYYY-MM-DD HH:mm:ssZ'),
    ...action.payload
  };
  yield put(push('/lots/?'+queryString.stringify(query)));

}

function* changePage(action) {
  const state = yield select(), lots = state.lots;

  let query = {
    page: lots.page || 1,
    delivery_date__gte: lots.delivery_date__gte || moment().format('YYYY-MM-DD HH:mm:ssZ'),
    delivery_date__lte: lots.delivery_date__lte || moment().add(365, 'days').format('YYYY-MM-DD HH:mm:ssZ'),
    ...action.payload
  };
  yield put(push('/lots/?'+queryString.stringify(query)));

}

function* changeLocation(action) {
  console.log("LOCATION CHANGE PAYLOAD", action.payload);
  let location = action.payload.location;
  if (location) {
    let pathname = location.pathname,
        hash = location.hash,
        search = location.search,
        state = location.state,
        query = queryString.parse(search);

    console.log(queryString.parse(search));
    if (pathname === '/lots/') {
      yield put({type: t.FETCH_LIST, payload: {
        page: query.page || 1,
        delivery_date__gte: query.delivery_date__gte || moment().format('YYYY-MM-DD HH:mm:ssZ'),
        delivery_date__lte: query.delivery_date__lte || moment().add(365, 'days').format('YYYY-MM-DD HH:mm:ssZ'),
      }})
    }

    if (pathname.indexOf('/lot/') === 0) {
      let id = pathname.split('/')[2];
      if (id !== "") {
        yield put({type: t.FETCH_ITEM, payload: id});
      }
    }

    if (pathname.indexOf('/users/') === 0) {
      let id = pathname.split('/')[2];
      if (id !== "") {
        yield put({type: tUser.FETCH_USER, payload: id});
      }
    }

  }


}


export function* sagas() {
  console.log('LOTS SAGAS');
  yield takeEvery(t.FETCH_LIST, fetchList);
  yield takeEvery(t.CHANGE_DATE, changeDate);
  yield takeEvery(t.CHANGE_PAGE, changePage);
  yield takeEvery(t.FILTER_LIST, fetchList);
  yield takeEvery(t.FETCH_ITEM, fetchItem);
  yield takeEvery(t.OPEN_LOTS, openLotsScene);
  yield takeEvery(t.CREATE_LOT, createLot);
  yield takeEvery(t.OPEN_LOT, openLotScene);
  yield takeEvery(t.OPEN_CREATE_LOT, openCreateLotScene);
  yield takeEvery(t.CREATE_REQUEST, createBid);
  yield takeEvery(t.REQUEST_PARTNERSHIP, createRequestPartnership);
  yield takeEvery(t.FETCH_BIDS, fetchBids);
  yield takeEvery(t.FETCH_CITIES, fetchCities);
  yield takeEvery(t.FETCH_CATEGORIES, fetchCategories);
  yield takeEvery(t.ACCEPT_BID, acceptBid);
  yield takeEvery(t.ACCEPT_PARTNERSHIP, acceptPartnership);
  yield takeEvery("@@router/LOCATION_CHANGE", changeLocation);
  // yield takeEvery(FETCH_ITEM, fetchItem);
  // yield takeEvery(OPEN_SHOW_SCENE, openShowScene);
  // yield takeEvery(OPEN_EDIT_SCENE, openEditScene);
  // yield takeEvery(OPEN_LIST_SCENE, openListScene);
  // yield takeEvery(PUBLISH, publish);
  // yield takeEvery(REMOVE, remove);
  // yield takeEvery(SAVE, save);
  // yield takeEvery(CREATE, create);
}
