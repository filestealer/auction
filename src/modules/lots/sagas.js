import t from './types'
import {select, put, takeEvery} from 'redux-saga/effects'
import API from '../../api/lots';
import {push} from "connected-react-router";
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


function* openLotsScene() {
  yield put(push('/lots/'));
}


export function* sagas() {
  console.log('LOTS SAGAS');
  yield takeEvery(t.FETCH_LIST, fetchList);
  yield takeEvery(t.OPEN_LOTS, openLotsScene);
  // yield takeEvery(FETCH_ITEM, fetchItem);
  // yield takeEvery(OPEN_SHOW_SCENE, openShowScene);
  // yield takeEvery(OPEN_EDIT_SCENE, openEditScene);
  // yield takeEvery(OPEN_LIST_SCENE, openListScene);
  // yield takeEvery(PUBLISH, publish);
  // yield takeEvery(REMOVE, remove);
  // yield takeEvery(SAVE, save);
  // yield takeEvery(CREATE, create);
}
